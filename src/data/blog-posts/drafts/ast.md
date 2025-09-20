# Practical introduction to Abstract Syntax Trees

https://astexplorer.net/

GraphQL is one of the tools I've really embraced lately. A feature that is held up as a major advantage over more traditional APIs is that everthing about it can be introspected. What this means is that anything working with a GraphQL document or query is able to dive into the structure of it in order to develop superpowers, such as writing a plugin that removes all properties begining with 'banana' from the query.

However, this superpower has a high entrance fee to pay. GraphQL's introspection is powered by Abstract Syntax Trees, which are not a simple concept to grasp. In order to remove the 'banana' I must learn about the gorillas and the entire jungle first!

I'm by no means an expert now, but I thought I'd try to explain ASTs by working through a relatively simple example of what they are commonly used for - transpilation (Babel is built around ASTs). I'll go into why ASTs are a good choice for the kind of tasks they're used for, how ASTs are generated from their source material, and how new content can be generated from them.

Indepbted to http://savage.net.au/Ron/html/graphviz2.marpa/Lexing.and.Parsing.Overview.html#The_Lexer%27s_Job_Description

## The project

We want to write a transpiler that turns an arithmetic statement using number up to twenty

```
1 + 2 - ( 3 - ( 4 * 15 ) )
```

into the same statement written in words, but with the size of the numbers decreasing where possible (as long as the value of the sum does not change)

```
two plus one minus the result of three minus the result of fifteen times four
```

## Why an AST
Firstly, as an exercise, try and write some code that accomplishes the task above. Whether you attempt it or not, you will hopefully realise it requires infinite recursion, look ahead an arbitrary distance, and a combination of mathematical calculation and string manipulation. 

If you were to try to write something that accomplishes this task, you might write a _single pass compiler_; you pass it the string and it dives straight in, trying to comprehend and convert the string in one go. It may well complete this task elegantly and efficiently, but is unlikely to be extensible. How would it fare if new requirements were added, for example to support square roots.

Approaches using an AST have the advantage of first converting your input into a regular structure which provides a 'picture' of your input's 'meaning', and can be interacted with by modules of code in well organised and reusable ways. As you have access to the input's 'meaning' it's easier to change its form without risking changing its meaning. 

It is very simiar to how we think of translation - convert the text, using its grammar and vocabulary, into some structure representing its meaning, and then use this to translate. If we were to work purely on the text we would not achieve very good results (unless we were Google translate, but that's a computing topic for another day).

ASTs can deal with the example we're working through quite easily (if verbosely), but also scale (albeit with a considerable, though manageable, amount of complexity) to other more advanced cases, such as parsing a GraphQL document, or converting a typescript file to EcmaScript5

The proces of compiling some text into an AST is typically achieved in two steps:
- Lexing (or tokenisation)
- Parsing
To be able to work with ASTs you don't need to _do_ either (in GraphQL, for example, most applications involve reading from or mutating an AST), but hopefully seeing how one gets build can lead to a deeper understanding that makes working with ASTs less daunting (despite what the GraphQL crowd may think, it is _extremely_ OK to be daunted by ASTs). It may also help reading spec that lean heavily on terms such as 'grammars' (again, the GraphQL spec fits this description)

## Our grammar

The grammar for our language is a subset of the rules of arithmetic. I won't list them here (partly because I don't know them up front, though I expect I'll figure them out as I work through the example. Spec documents are normally do the opposite - they hit you with the detail of the grammar up front, leaving you bewildered as to how it fits together. 'm going to be nice and do the opposite). What I will do however is divide them into 2

1. Sub grammar 1 - this defines which combinations of characters make valid tokens, i.e. any single digit, the digit 1 followed by any digit, the digits 20, parentheses, and the 4 common arithmetical operators. These are the indivisible 'words' of your grammar. They may not literally be words, e.g. in the javascript statement `cont tomato = "potato pizza"`, the string `"potato pizza"` is a token because, from the point of view of the language, it is an indivisible unit; an instance of a string.
2. Sub grammar 2 - this is the more difficult one to write up front. It defines the rules for how the tokens can be combined e.g. any arithmetical operator must not have another one next to it



## Lexing

Your lexer needs two inputs
- Sub grammar 1
- some text input

As long as your lexer code can start at the beginning of the text, work its way through to the end and end up with a list of sequences of valid tokens, you have yourself a lexer. You can write it any way you like, but typicaly you will have a loop, a counter and lots of conditionals. Ours will be quite simple as it's a simple example, but the most complexity is around 'looking ahead' to see if one of our 'number' tokens is a single or double digit.

```js
let i = 0;
const tokens = [];
while(i<txt.length) {
    let char = txt[i];
    
    if (/\s/.test(char)) {
        // we ignore whitespace, but it would be totally legitimate to treat
        // whitespace as a token, and then ignore it later at the parsing stage
        // Not much point in doing that though    
    } else if(/\d/.test(char)) {
        // it'd be easier to convert the pair of digits to a number and 
        // then check to see that it's <= 20, but that's be less in the
        // spirit of things. At the lex stage we are dealing with character
        // patterns only
        if (/\d/.test(txt[i+1])) {
            const potentialToken = char + txt[i+1]    
            i++
            if (/1\d/.test(potentialToken) || potentialToken === '20') {
                tokens.push(potentialToken) 
            }
        } else {
            tokens.push(char)
        }
    } else if (/[\(\)+-\/*]/.test(char)){
        tokens.push(char)
    } else {
        throw new Error(`Invalid token ${char} at character ${i}`)
    }
    i++
}

```
Passing our example input into the above results in the following output:

```
['1', '+', '2', '-', '(', '3', '-', '(', '4', '*', '15', ')', ')']
```

You might ask why I do't just split the input by whitespace characters. While that would work in this simple example, in general it does not (for example if my grammar was for a programming language it would probably need to support quoted strings that may contain whitespace _inside_ a string that should be considered a complete token by itself.)

At this stage we've stored our tokens as strings (Note that even the numbers are stored as strings - all we know so far is that these characters belong toegther, not what they mean). It's common for ASTs to also include details of where in the text file a token started or finished (imagine how this can be used by webpack + babel to produce sourcemaps). Hopefully you can see that with a bit more effort we could output this from our lexer too. Something like the following:
```json
{
    value: '20'
    position: {
        start: {
            line: 1,
            character: 5
        },
        end: {
            line: 1,
            character: 7
        }
    }
}


```
Another thing our lexer doesn't do is proper error handling (while it throws an error for some scenarios, for others e.g. encountering `123`, it would lex as `['12', '3']`. I'm not too sure if the 'correct' way to deal with this is to throw in the lexer or in the parser. Or whether the lexer should leave opinions about the size of the numbers it accepts up to the parser. An illustration that even when working with well explored coding patterns, there's still more than way to slice things.)
