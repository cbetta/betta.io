---
title: "Developer Experience: Emails"
date: 2017-01-26 
tags: developer experience, developer onboarding, dx highlights
icon: Mail
---

While looking at the developer onboarding of [Twilio](/blog/2017/01/09/developer-experience-review-twilio/), [Stripe](/blog/2016/10/16/developer-experience-review-stripe/), [Pusher](/blog/2016/08/31/developer-experience-review-pusher/) and [SendGrid](/blog/2016/08/29/developer-experience-review-sendgrid/) I noticed certain design patterns that were common across all of them. This article is the first in a series where I'll take a deeper look at specific parts of developer onboarding and how companies implement them differently.

In this first installment I'll look at the emails that are sent to developers when they sign up. Often these are part of a larger campaign of a trickle of emails, so I specifically focus on any emails sent on the same day as I signed up.

## Overview

The following are some of the core elements that seem to be present across the 4 companies I've reviewed so far.

|                       | SendGrid | Pusher   | Stripe   | Twilio  |
|-----------------------|----------|----------|----------|----------|
| Email verification    | __&#x2713;__{:.color.bg.green} | __&#x2713;__{:.color.bg.green}  | __&#x2713;__{:.color.bg.green}  | __&#x2713;__{:.color.bg.orange} |
| Link to documentation | __&#x2713;__{:.color.bg.green} | __&#x2713;__{:.color.bg.green}  | __&#x2713;__{:.color.bg.green}  | __&#x2713;__{:.color.bg.green}  |
| Link to support       | __&#x2713;__{:.color.bg.green} | __&minus;__{:.color.bg.orange}  | __&#x2713;__{:.color.bg.green}  | __&#x2713;__{:.color.bg.green}  |
| Link to dashboard     | __&#x2713;__{:.color.bg.green} | __&#x2717;__{:.color.bg.red}    | __&#x2713;__{:.color.bg.green}  | __&#x2713;__{:.color.bg.green}  |
| Links to Get Started  | __&#x2717;__{:.color.bg.red}   | __&#x2713;__{:.color.bg.green}  | __&#x2717;__{:.color.bg.red}    | __&#x2713;__{:.color.bg.green}  |
{:.ui.table.unstackable.compact.small}

**Note:** this is not meant to be an exhaustive list, nor am I saying that any omissions of these elements is a bad thing. This table just serves as an indicator of what's important to these companies and the level in which they share certain features.
{:.ui.message.warning}

## Observations

Further down I show every email I received, but before that I want to summarize some of the most interesting observations that I made.

### Timeline

Everyone but __Stripe__ sent me 2 emails on the first day. Mostly they consisted of a __confirmation__ email to confirm my email address, and a __information__ heavy email with some content as to how to proceed next.

__Pusher__ interestingly sent me the emails both at the same time, while SendGrid (an email company) took 2.5 hours to send me the second email.

|SendGrid| 2.5 hours apart  |
|Pusher  | 0 minutes apart  |
|Twilio  | 30 minutes apart |
{:.ui.table.unstackable.compact.small}

### Senders

From the 3 companies that sent me more than one email (Twilio, Pusher, SendGrid) only __Twilio__ used a consistent `from` address and name.

The most come email addresses seem to be a variation of `[company]team@` and `support@`.

|SendGrid|`SendGrid Support <support@sendgrid.com> `|
|        |`SendGrid <sendgridteam@sendgrid.com>`    |
|Pusher  |`Pusher <support@pusher.com>`             |
|        |`The Pusher Team <team@pusher.com>`       |
|Stripe  |`Stripe <support@stripe.com>`             |
|Twilio  |`Team Twilio <teamtwilio@twilio.com>`             |
|        |`Team Twilio <teamtwilio@twilio.com>`       |
{:.ui.table.unstackable.compact.small}

### Content-Type

Obviously SendGrid send me some beautiful HTML emails. Interestingly (as far as I can tell) the emails were HTML only, and not a multi part email with a text fallback. They probably have very good reasons to do so, as they are the email experts.

Pusher and Stripe just sent plain text emails.

Twilio also sent me 2 HTML emails but in this case they did have plain text backups.

|SendGrid| `HTML` x2  |
|Pusher  | `TEXT` x2  |
|Stripe  | `TEXT`     |
|Twilio  | `HTML/TEXT` x2 |
{:.ui.table.unstackable.compact.small}

### Length

Another observation is that all emails __except for Twilio's__ fit on my screen completely. In comparison to the other companies the emails that Twilio sends are __MASSIVE__. I have to admit they __are__ awesome, they contain full GIFs showcasing what the product does, and are full of useful links on how to use their product in real life.

### Lack of personalization

One final observation was the surprising lack of personalization. Only one email mentions me by name, and only one other email seems to have been catered to any other infirmation I provided on signup.

Only the first email I received from Twilio seems to be catered to the use case I chose on sign up (messaging, not voice).

<br>
<hr>

## SendGrid

### The emails

`Subject: Welcome To SendGrid! Confirm Your Email` <br>
`From: SendGrid Support <support@sendgrid.com>` <br>
`Received: 15:19`

<%= dx_image 'sendgrid', 6, 'SendGrid' %>


`Subject: Before You Press Send...` <br>
`From: SendGrid <sendgridteam@sendgrid.com>` <br>
`Received: 17:55 (over 2.5 hours later)`

<%= dx_image 'sendgrid', 24, 'SendGrid' %>

### Insights

<%= partial 'partials/check_items', locals: { items: [
    { icon: 'check', title: "Requires email confirmation on signup", color: 'green' },
    { icon: 'check', title: "Has a link to the generic documentation", color: 'green' },
    { icon: 'check', title: "Has a link to the support resources", color: 'green' },
    { icon: 'check', title: "Has a link to the dashboard", color: 'green' },
    { icon: 'delete', title: "Does not have a link to a specific Get Started guide", color: 'red' },
    { icon: 'check', title: "Has a link to the company's social media accounts", color: 'grey' },
    { icon: 'check', title: "Has a link to the company blog", color: 'grey' },
    { icon: 'check', title: "Has a link to a 'go-live' checklist", color: 'grey' },
    { icon: 'check', title: "Has a link to resources for non-developers", color: 'grey' }
  ] } %>

## Pusher

### The emails

`Subject: [Pusher] Please verify your email address` <br>
`From: Pusher <support@pusher.com>` <br>
`Received: 16:30`

<%= dx_image 'pusher', 16, 'Pusher 1/2' %>

`Subject: Pusher quick start guide` <br>
`From: The Pusher Team <team@pusher.com>` <br>
`Received: 16:30 (0 minutes later)`

<%= dx_image 'pusher', 17, 'Pusher 2/2' %>

### Insights

<%= partial 'partials/check_items', locals: { items: [
    { icon: 'check', title: "Requires email confirmation on signup", color: 'green' },
    { icon: 'check', title: "Has a link to the generic documentation", color: 'green' },
    { icon: 'check', title: "Has a link to a specific Get Started guide", color: 'green' },
    { icon: 'minus', title: "Has a link to the support, but only in the confirmation email", color: 'orange' },
    { icon: 'delete', title: "Does not have a link to the dashboard", color: 'red' },
    { icon: 'check', title: "Has links to guides for specific programming languages", color: 'grey' }
  ] } %>


## Stripe

### The email

`Subject: Confirm your Stripe email address!` <br>
`From: Stripe <support@stripe.com>`

<%= dx_image 'stripe', 1, 'Stripe' %>

### Insights

<%= partial 'partials/check_items', locals: { items: [
    { icon: 'check', title: "Requires email confirmation on signup", color: 'green' },
    { icon: 'check', title: "Has a link to the generic documentation", color: 'green' },
    { icon: 'check', title: "Has a link to the support resources", color: 'green' },
    { icon: 'check', title: "Has a link to the dashboard", color: 'green' },
    { icon: 'delete', title: "Does not have a link to a specific Get Started guide", color: 'red' },
    { icon: 'check', title: "Has a link to resources for non-developers", color: 'grey' }
  ] } %>


## Twilio

### The emails

`Subject: Your Twilio Account: Getting Started` <br>
`From: Team Twilio <teamtwilio@twilio.com>` <br>
`Received: 15:52`

<%= dx_image 'twilio', 32, 'Twilio' %>

`Subject: Twilio SMS free trial tips` <br>
`From: Team Twilio <teamtwilio@twilio.com>` <br>
`Received: 16:22 (30 minutes later)`

<%= dx_image 'twilio', 33, 'Twilio' %>


### Insights

<%= partial 'partials/check_items', locals: { items: [
    { icon: 'check', title: "Has a link to the generic documentation", color: 'green' },
    { icon: 'check', title: "Has a link to the support resources", color: 'green' },
    { icon: 'check', title: "Has a link to the dashboard", color: 'green' },
    { icon: 'check', title: "Has a link to a specific Get Started guide", color: 'green' },
    { icon: 'minus', title: "Does not require email confirmation on signup (but validates the phone number)", color: 'orange' },
    { icon: 'check', title: "Has a link to resources for non-developers", color: 'grey' },
    { icon: 'check', title: "Informs the user where their API credentials can be found", color: 'grey' },
    { icon: 'check', title: "Shows an animation of the product in action", color: 'grey' },
    { icon: 'check', title: "Has a link to products build with the solution", color: 'grey' },
    { icon: 'check', title: "Informs the user of the Trial Account's limitations", color: 'grey' },
    { icon: 'check', title: "Emails include animated GIFs to show demo of product in action", color: 'grey' }
  ] } %>
