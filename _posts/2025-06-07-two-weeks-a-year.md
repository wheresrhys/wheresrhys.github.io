---
layout: post
title: Two weeks a year?
description: How believable is the government's pilot of using AI to increase civil service productivity?
date: 2025-06-07
---

Bless me, interent, for I have strayed. It's been five years since my last post, and over a year since my last profession... having taken a break from tech leadership and gone back to Uni to study political communications. Eventually I hope this will turn into a new career in tech policy, hence the reanimation of this blog as a place to demonstrate that there's at least some substance to my claims to be a cross-disciplinarian of some potential use.

Today I'm taking a brief detour from dissertation writer's block to share some thoughts on the government's recent report on their [Microsoft 365
Copilot Experiment](https://assets.publishing.service.gov.uk/media/683db42bd23a62e5d32680d0/M365_Copilot_Experiment_Findings_Report.pdf), with the [press release](https://www.gov.uk/government/news/landmark-government-trial-shows-ai-could-save-civil-servants-nearly-2-weeks-a-year) claiming "Landmark government trial shows AI could save civil servants nearly 2 weeks a year". But does the research provide sound evidence to back that claim?

To address the elephant in the room, yes there is a lot of AI hype about, and yes there are a lot of people high up in government, the tech industry, and probably academia too, who desperately want AI to be a success. So I approached reading the report with a supposition that the "2 weeks a year" claim would be absolutely the most positive spin that could possible be made of the results. Even before reviewing the research paper my initial reaction was that it's an underwhelming figure. Steam power meant cloth could be manufactured with a quarter of the workforce. Computers allowed entire offices full of people whose former job title was "computer" to be let go. Considering the hype about AI being a general purpose transformative technology, productivity gains of ~4% are hardly breathtaking. Does this represent a good return on investment, for the government's outlay on copilot licences? 

Now, on to review the actual research. The objectives are defined as follows:

> "The objective of this experiment was to understand the value that an AI tool such as
	M365 Copilot would bring when deployed across a large portion of the UK
	government. Value was defined as improvements in efficiency, task completion
	rates, and overall user satisfaction."

Seems pretty sensible. Having said that, outside of this statement "task completion" is not mentioned again, and it appears that nothing in the research methodology actually set out to gather data to answer this question. But it's a minor quibble. Come to think of it, some graphs are mislabelled too. Sloppiness like this is probably a sign that it's not been thoroughly peer-reviewed.

A far bigger quibble is that being an adopter of Copilot is defined as somebody with "at least one interaction with M365 Copilot in the previous 30 days." Given that the research only ran for 3 months, this means that using Copilot just 3 times would put a civil servant in the "adopters" cohort. And what counts as an interaction? So the claim that the adoption rate was 80% overall is rather dubious. At a cursory glance it doesn't actually impact the validity of the rest of the data and findings (though more on the flaws in that below), but does serve to unnecessarily exaggerate how impactful the software was organisationally: it suggests that 80% of people were saving the equivalent of 2 weeks per year, as opposed to a much lower figure that is not inferrable from the report. 

Most of the study's data came from surveys rather than actual usage data. There doesn't appear to be any real effort to correlate surveys with data about actual usage of Copilot, which seems strange to me: it should be possible to arrange that for at least some users as a way of checking how accurate self-reported estimates of Copilot usage were. There's no access to the actual survey questions, but users appear to have been asked how often they use copilot in a variety of applications: daily or weekly. A noteworthy trend here is that "Daily usage was centred around using M365 Copilot for communications, compared to more infrequent weekly use for content creation." 

Now on to the part of the report reproduced in big red letters in the press release: time savings. This is where the boldest claims are made, but, I would argue, the methodology is deeply flawed. Users appear to have been asked to estimate what their daily time savings using copilot are. There are a couple of big issues here.

Firstly, estimating time saved is going to be very subjective and unreliable. Even if each user is self-consistent in their biased recollections, without any effort to correlate these estimates with real measurements of efficiency it really is an exercise in collective finger waving. The press relase should really read, "Landmark government trial shows civil servants __reckon__ AI could save them nearly 2 weeks a year".

Secondly, as we just saw, usage of Copilot in many tools is approximately weekly. Asking users to estimate how much time they save daily, when combining subjective assessments of some things they use daily and others weekly is unlikely to be accurate. They were asked a second question, estimating the amound of time saved daily in each application when using Copilot. The figures are presented as graphs, not as a data table, but I would be surprised if the product of adoption and time saved data per tool results in a similar estimate to the overall one<sup>1</sup>. Given the general unreliable nature of self-reported estimates, and the fact the project involved 14,000 staff, running a proper controlled trial that looked at actual usage data seems like it would have yielded far more reliable, unsubjective data.

At last, though, it's time to draw attention to something quite good, actually, about the trial. The user satisfaction ratings are pretty positive, both in terms of quantifiable answers to questions like "Copilot saves me time on mundane tasks" and the more freeform feedback. Judging from what some former colleagues have told me about efforts to encourage AI use in their workplaces, such positive user experiences are far from a given. 

On the flipside, this is not the only story told by the qualitative feedback. Users reported concerns about Copilot's ability to deal with nuanced, context heavy tasks, echoing the limitations of other generative AI tools. While this is highlighted in the report's "Key findings" section, it's wholly absent from the press release. AI boosterism at work again there.

While I am sceptical of a lot of AI hype, I'm far from a naysayer or luddite, and think it is full of exciting promise. In some ways I admire this government funded study; while the methodology is, IMHO, flawed, and the results reported with far too much certainty, it is nevertheless a study that _could_ have delivered a negative result, so is at face value a genuine attempt at evidence based AI policy. Though the upshot of the study's flaws mean that AI roll-out will increase based, in part, on what a few thousand civil servants reckon about the time it saves them.

<small><sup>1</sup> I tried to work this out by eye-balling the graphs and writing down the numbers, but on some of the % graphs the bars did not add up even close to 100... so I gave up on the exercise.</small>
