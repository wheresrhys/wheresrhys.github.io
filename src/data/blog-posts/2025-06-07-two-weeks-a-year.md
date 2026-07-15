---
layout: post
title: Two weeks a year?
description: How believable is the government's pilot of using AI to increase civil service productivity?
date: 2025-06-07
---

Bless me, internet, for I have strayed. It's been five years since my last post, and over a year since my last profession... having taken a break from tech leadership and gone back to Uni to study political communications. Eventually I hope this will turn into a new career in tech policy, hence the reanimation of this blog as a place to demonstrate that there's at least some substance to my claims to be a cross-disciplinarian.

Today I'm taking a brief detour from dissertation writer's block to share some thoughts on the government's recent report on their [Microsoft 365
Copilot Experiment](https://assets.publishing.service.gov.uk/media/683db42bd23a62e5d32680d0/M365_Copilot_Experiment_Findings_Report.pdf), with the [press release](https://www.gov.uk/government/news/landmark-government-trial-shows-ai-could-save-civil-servants-nearly-2-weeks-a-year) claiming "Landmark government trial shows AI could save civil servants nearly 2 weeks a year". But does the research provide sound evidence to back that claim?

To address the elephant in the room, yes there is a lot of AI hype about, and yes there are a lot of people high up in government, the tech industry, and probably academia too, who desperately want AI to be a success. Bearing this in mind (and perhaps having watched too many episodes of "The thick of it"), I thought it likely that the results would be presented in as positive a light as possible. So even before reviewing the research paper in full my initial reaction was that "2 weeks a year" is an underwhelming figure. Steam power meant cloth could be manufactured with a quarter of the workforce. Computers allowed entire offices full of people whose former job title was "computer" to be let go. Considering the hype about AI being a general purpose transformative technology, productivity gains of ~4% are hardly breathtaking. Does this represent a good return on investment for the government's outlay on copilot licences? And would other approaches, such as investing in training, delier the results just as effectively?

Now, on to review the actual research. The objectives are defined as follows:

> "The objective of this experiment was to understand the value that an AI tool such as
	M365 Copilot would bring when deployed across a large portion of the UK
	government. Value was defined as improvements in efficiency, task completion
	rates, and overall user satisfaction."

Seems pretty sensible. Having said that, "task completion" is not mentioned again in the report, and it appears that nothing in the research methodology actually set out to gather data to answer this question. This poorly defined terminology and other sloppy mistakes throughout the paper (e.g. some graphs are mislabelled or their totals don't add up) is probably a sign that it's not been thoroughly peer-reviewed.

A far bigger quibble is that being an adopter of Copilot is defined as somebody with "at least one interaction with M365 Copilot in the previous 30 days." Given that the research only ran for 3 months, this means that using Copilot just 3 times would put a civil servant in the "adopters" cohort. And one also wonders what counts as an "interaction" - signing in, opening the chat window but then closing it immediately, getting it to write a full report? So the claim that the adoption rate was 80% overall is rather dubious. At a cursory glance it doesn't actually impact the validity of the rest of the data and findings (though more on the flaws in that below), but does serve to unnecessarily exaggerate how impactful the software was organisationally: it suggests that 80% of staff were saving the equivalent of 2 weeks per year, which is unlikely to be the case given the low threshold for counting a user as an "adopter". 

Most of the study's data came from surveys rather than actual usage data. There is nothing wrong with surveys per se, but it looks like a strange choice of methodology to _only_ use surveys. If copilot is anything like other enterprise software (including rivals such as Anthropic) then it will provide real data on usage across the organisation. It should be possible to compare survey responses versus actual usage data to check how accurate self-reported estimates of Copilot usage were. This lack of rigour in measuring how much copliot is actually used undermines any empirical claims made about how much difference its use makes.

There's no access to the actual survey questions in the report, but users appear to have been asked how often they use copilot in a variety of applications: daily or weekly. A noteworthy trend here is that "Daily usage was centred around using M365 Copilot for communications, compared to more infrequent weekly use for content creation." For this qualitative data surveys are perhaps quite valuable, but it's when they are used to make quantitative claims, such as the 2 weeks per year from the headline, that the methodology becomes more problematic. 

Users appear to have been asked to estimate what their daily time savings using copilot are. There are a couple of big issues here.
Firstly, estimating time saved is going to be very subjective and unreliable. Even if each user is self-consistent in their biased recollections, without any effort to correlate these estimates with real measurements of efficiency it really is an exercise in collective finger waving. The press relase should really read, "Landmark government trial shows civil servants __reckon__ AI could save them nearly 2 weeks a year".

Secondly, usage of Copilot in many tools is approximately weekly, and for others approximately daily. Asking users to estimate how much time they save daily, when combining subjective assessments of some things they use daily and others weekly is unlikely to be accurate. They were also asked a second question, estimating the amound of time saved daily in each application when using Copilot. The figures are presented as graphs, but extracting the data into tables uncovers some anomalies:

| Response | Document Drafting | Creating Presentations | Managing Emails | Scheduling Meetings | Overall
|---|---|---|---|---|---\
| I have not noticed any time savings | 16 | 24 | 21 | 35 | 17 |
| Less than 5 minutes | 5 | 4 | 8 | 8 | 5 |
| 5–15 minutes | 17 | 11 | 20 | 12 | 13 |
| 16–30 minutes | 18 | 12 | 15 | 7 | 28 |
| More than 30 minutes | 37 | 23 | 23 | 8 | 23 |
| Doesn't apply to my use | 6 | 26 | 13 | 30 | 14 |

For instance, only 23% of respondents said that overall copilot saved them more than 30 minutes daily, but _37%_ said that they saved more than 30 minutes daily just considering its use for document drafting. A similar mismatch occurs in the 5-15 minute time saving category. This is very clear evidence that self-reported estimates are unreliable, but nowhere in the report is this acknowledged. Perhaps it wasn't noticed. It feels like the study could have done with going through a trial stage, testing out the methodology and fixing what to me look like obvious flaws in the design of the survey. The inconsistent time periods staff were asked to estimate over, for one, feels like an unecessary element whose removal would have improved the results. Given that 14,000 staff were involved in the study, it also seems to me that running some sort of proper controlled trial, giving some staff access and delaying it for others, and that looked at actual usage data seems like it would have yielded far more reliable, unsubjective data.

An additional flaw with the methodology here is that it assumes a null or positive result; there is no way for a participant to log that copilot _cost_ them time. In my experience, getting nisinformed or misdirected by AI, thus doubling work and negating any potential time savings, is not uncommon. The study's failure to consider such patterns is another major methodological flaw which will have biased tye findings towards a positive outcome.

At last, though, it's time to draw attention to something quite good, actually, about the trial. The user satisfaction ratings are pretty positive, both in terms of quantifiable answers to questions like "Copilot saves me time on mundane tasks" and the more freeform feedback. Judging from what some former colleagues have told me about efforts to encourage AI use in their workplaces, such positive user experiences are far from a given. 

On the flipside, this is not the only story told by the qualitative feedback. Users reported concerns about Copilot's ability to deal with nuanced, context heavy tasks, echoing the limitations of other generative AI tools. While this is highlighted in the report's "Key findings" section, it's wholly absent from the press release. AI boosterism at work again there.

While I am sceptical of a lot of AI hype, I'm far from a naysayer or luddite, and think it is full of exciting promise. In some ways I admire this government funded study; while the methodology is, IMHO, deeply flawed, and the results reported with far too much certainty, it is nevertheless a study that _could_ have delivered a negative result, so is at face value a genuine attempt at evidence based AI policy. Though the upshot of the study's flaws mean that AI roll-out will increase based, in part, on what a few thousand civil servants reckon about the time it saves them.
