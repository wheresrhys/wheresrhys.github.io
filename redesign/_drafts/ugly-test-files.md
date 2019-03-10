ugly test files



Some principles

 - use a lot of nested describe blocks - comprehensibility (of test src and reports), makes running subset of tests easier, makes repeat setup/teardown easier to manage (before, after)
 - names and directory structure just like src
 - use mocks for anything that needs initialising before tests will run, unless you deliberately want to test a side effect caused by that component
 - write test descriptions and skip them, rather than leaving undocumented holes in test coverage. or could output warning put an expect block that will fail if date increases past a given time
 ```
it(name, date) => {
    todo.call(this, date);
    if (Date.now() > date) {
    throw 'shuld have test for' name ' by now'
}
}


 ```

more options
 - why not put spec files alongside src? easie visibility, slightly easier to manage
