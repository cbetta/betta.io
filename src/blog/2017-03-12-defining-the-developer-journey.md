---
title: "The Developer Experience Journey: Exploration"
date: 2017-03-12
tags: developer experience
icon: Map
---

> A 5 minute on-stage code-demo beats a slide deck every time <br>
> <em>- Developers at every hackathon ever </em>

In my previous post I layed out [a framework for understanding developers](/blog/2017/02/23/understanding-developers/). In it I provided a way for you to categorize a developer by:

* Product Experience
* Industry Experience
* Technology Experience
* Motivation / Persistence

In this article I want to take a deeper look at how a developer can go from unexperienced and unmotivated, to a motivated and experienced developer with all the knowledge and tools they need to be successful on your platform.

## The 4 Step Journey

<div class="ui five mini unstackable steps">
  <div class="step">
    <div class="content">
      <div class="title">Exploration</div>
    </div>
  </div>
  <div class="step">
    <div class="content">
      <div class="title">Getting Started</div>
    </div>
  </div>
  <div class="step">
    <div class="content">
      <div class="title">Guidance</div>
    </div>
  </div>
  <div class="step">
    <div class="content">
      <div class="title">Reference</div>
    </div>
  </div>
</div>

A developer experience can be split into a 4 step journey, starting at a level of low motivation and low experience, and slowly building up to full expert level. In this article we will look at how we can help developers make their first step: Exploration.

### The art of the 5 minute confidence demo

If you've ever seen companies like [Twilio](https://www.twilio.com/) present on stage then you know they do a few things very well. One of these is their on-stage demonstration.

<div class="ui segment" markdown='1'>
  <div class="ui bottom attached label">Mike Elsmore, then Developer Advocate at IBM doing one of his on stage live code demos.</div>
  ![Mike at Work](/images/blog/2017/developer-journey/mike-at-work.png){:.ui.bordered.rounded.fluid.image}
</div>


Within just 5 minutes they are able to show an interactive demo of their application, using live code and their product in action. They show you their product without you needing to do any coding yourself.

You might think that the most powerful thing here is that Twilio can be integrated in just 5 minutes, but let's be serious we all know that isn't true. A real production-ready implementation takes a lot longer than a few minutes to add all the error catching, edge cases, and tests. It would probably take closer to a few days, if not weeks for any reasonably large project.

So why do these 5 minute demos still work so well?

### The Ultimate Confidence Boost

Companies like Twilio have mastered the art of giving __you__ the confidence that their product is powerful, useful, and easy enough for __you__ to use. By doing so, they give you a basic understanding of the product and the motivation to try it yourself.

In a few minutes they are able to tell show you:

* What Twilio can be used for
* That Twilio is easy to use
  * because their SDK is easy to install
  * and their API is intuitive
  * and only a few lines of code can be used to do something very powerful
* That any developer can make sense of Twilio
* That they have "real" developers on their team that you can talk to if you need any help

So how do we translate this magic to an only developer experience?

## Exploration documentation


<div class='ui message' markdown='1'>
__Before:__ _No motivation / No experience_<br>
__After:__ _Low motivation / No experience_
</div>

When translate this confidence building to a developer product, a successful exploration of the product should be possible within a few seconds, ideally under 60. This __1-minute comprehension__ of your product's capabilities ensures that developers who visit your developer portal will be able to understand:

* What your product does do
* What your product doesn't do
* How they can use your product in their work
* That your product is easy to use

A good example of this is [Twilio's SMS API demo](https://www.twilio.com/sms/api), where they pair some sample code for sending an SMS side-by-side with a form to send an SMS.

<div class="ui segment" markdown='1'>
  <%= dx_image 'twilio', '4', 'Twilio SMS' %>
</div>

These demos are great as they combine code, sample output, and an interactive demo without really requiring the user to do any acctual development. In Twilio's example I __could__ run the code in my preferred language, but I could also just add my phone number to the form and send a sample SMS.

In both cases, I will have been informed of what Twilio does (the demo), how it does it (the code) and that it's probably all easy enough for me to understand.

## Next

In my next post I will be looking what comes after this exploration phase: __Getting Started__.



I am a [freelance Developer Experience consultant](https://work.betta.io). If you want to know more about my work have a look at my [portfolio](https://work.betta.io) and if you'd like for me to help improve your company's Developer Experience then most definitely reach out to me via [Twitter](https://twitter.com/cbetta) or [email](mailto:cristiano@betta.io)!
