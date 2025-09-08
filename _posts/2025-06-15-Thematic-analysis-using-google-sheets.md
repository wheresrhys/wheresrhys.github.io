---
layout: post
title: Qualitative analysis using Google sheet
date: 2025-06-15
---

A brief post to share a simple tool I've created for my own use for thematic analysis of text sources when analysing qualitative data in a research project. The general process is to annotate the text (which might be media articles, interview transcripts etc.) with labels - typically referred to as "codes" - which can later be grouped into themes and sub-themes that describe the most significant trends in the data.

There are a few off the shelf tools out there. Most these days seem to use AI to automate the analysis, which, while no doubt a time saver, is somewhat troubling because, as many commentators have written about, AI tools tend to reproduce the biases of the data they are trained upon. This has harmful effects when used in tools that e.g. are used to make decisions that impact on individuals on society. When applied to academic research it seriously undermines the need to take a critical viewpoint that aims to probe and question existing knowledge. Perhaps they have their uses, but indiscriminate use seems unwise. Needless to say, use of AI tools like this is prohibited when writing my dissertation.

The two tools I'm aware of for manually conducting thematic analysis are Nvivio and taguette, the former a commercial product, and the latter an open source tool. I've tried them both, but, as a programmer who's spent decades honing the ability to work with minimal recourse to using a mouse, I found them frustrating to use. Adding a code typically took several fiddly mouse clicks around popup dialogs, and once the list of codes you're working with grows to more than about 8, there's a great deal of scrolling involved. For me, this was infuriating, turning what could be the kind of tedious task that, while repetitive, can be quite satisfying while listening to music, into a grating experience that I kept avoiding.

So I turned my passing familiarity with Google sheets functions into a minimal-mouse-use thematic analysis tool . I should give a shout out to LLMs here - the documentation from google is infuriatingly opaque, but ChatGPT/Github Copilot are very good at identifying the correct formula for a particular task. It's these kinds of uses of GenAI that I think are reasonably ethical from an environmental standpoint - one query saves, learned from painful experience, dozens of google searches and website visits. It's probably trained, without licencing, on stackexchange and countless tech how to sites, which isn't so great. While I don't in general approve of their copyright infringing scraping, I hope the original authors will approve of my contributing something back to the google sheets commons. 

## The tool!

Here's a link to it. The first tab in the spreadsheet contains a user guide, but briefly, here's what it allows users to do.

1. Include an unlimited number of source texts
2. Define an unlimited number of codes, and each paragraph/sentence of each text can be labelled with up to 6 codes
3. Rename codes
4. Once codes have stabilised a bit, turn them into an autocomplete when coding subsequent documents
5. Rank codes by how much they are used
6. For a given code, view all the quotes from all the texts that have been labelled with that code

So it's similar in features to Taguette, but the crucial thing is that once a source text is added, the process of coding it is almost entirely keyboard based, just by typing the codes out as you read the text. For me this really keeps me in the flow of coding, and has made the whole process a lot quicker and more pleasurable.

Any comments, let me know on Bluesky https://bsky.app/profile/wheresrhys.bsky.social



