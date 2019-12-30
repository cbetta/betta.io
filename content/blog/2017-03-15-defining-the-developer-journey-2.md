---
title: "The Developer Experience Journey: Get Started"
date: 2017-03-15
tags: developer experience
icon: Map
draft: true
---

> A 5 minute on-stage code-demo beats a slide deck every time <br>
> __- Developers at every hackathon ever__

In my previous post I layed out [a framework for understanding developers](/2017/02/23/understanding-developers/). In it I provided a way for us to place any developer on spectrum separated by:

* Product Experience
* Industry Experience
* Technology Experience
* Motivation / Persistence

In this article I want to take a deeper dive and look at how a developer can go from unexperienced and unmotivated to a motivated developer with all the knowledge they need to be successful on your platform.

## The 4 Step Journey

The developer experience with your product is a 4 step journey, starting at a level of low motivation and low experience, all the way until they are motivated and experienced enough to deep dive into your reference documentation. In this article we will look at step #1: Exploration.

<div class="ui five mini steps">
  <div class="step">
    <div class="content">
      <div class="title">1. Exploration</div>
      <div class="description">1m confidence</div>
    </div>
  </div>
  <div class="step">
    <div class="content">
      <div class="title">2. Get Started</div>
      <div class="description">10m first implementation</div>
    </div>
  </div>
  <div class="step">
    <div class="content">
      <div class="title">3. Guidance</div>
      <div class="description">More complex instructions</div>
    </div>
  </div>
  <div class="step">
    <div class="content">
      <div class="title">4. Reference</div>
      <div class="description">Total comprehension</div>
    </div>
  </div>
</div>

## The art of the 1-minute-confidence boost

<em>No motivation / No experience</em>

If you've ever seen companies like Twilio present on stage at a hackathon or conference you know they do a few things very well, and one of these is their on-stage demos. Within five minutes they are able to pack an often interactive demo of their application, showing live code and their product in action, without you needing to do any coding yourself.

You might think the power here is that Twilio can be integrated in 5 minutes, but let's be serious we all know a real implementation takes a lot longer than that. To add all the error catching, edge cases, and test would probably take days, if not weeks for any reasonably large project.

So why do these 5 minute demos still work so well? __Confidence__.

Twilio has mastered the art of giving __you__ the confidence that their product is powerful, useful, and easy enough for __you__ to use. By doing so, they give you a basic understanding of the product and the motivation to try it yourself.

### Exploration documentation

If we translate this to a developer product, a successful exploration of the product should be possible within a few seconds, ideally under 60. This __"1-minute-comprehension" of your product's capabilities ensures that developers who visit your developer portal will be able to understand:

* What your product does do
* What your product doesn't do
* How they can use your product in their work
* That your product is easy to

A good example of this is Stripe, who pair an example payment form with the code to process that payment, side by side. I've put a few of these demos together in <a href="https://betta.io/galleries/interactive_demos">this animated gallery</a>.

## The 10 minute zero-to-hero

<em>Low motivation / Low experience</em>

Once a developer has explored your product they will want to get their hands dirty and get going on their first implementation. Depending on your product, this first implementation can be super easy or require a lot of setup. In general though, it means to take a user from no hands-on experience to their first successful use of your product in __under 10 minutes__. Along the way they will need to get their hands on all the tools they'll need to successfully use your product in the future, which can include _API credentials_, _dependencies_, and _initialization_.

Often, this zero-to-hero experience can be broken down into 2 steps.

### Get Started

A successful 10 minute implementation of a __Get Started__ guide allows a developer to explore your product in full detail and confirm that __<u>they</u> are able__ to implement your product. This stage is about giving the developer the confidence in themselves more than your product, it lets them implement a working first draft and helps to enforce their findings from the 1 minute demonstration.

Along the way it is important to provide the developer with all the tools they need to use your product from that moment on. This might include getting them to sign up and get their first API credentials, and setting up their first __application__ in their account. Additionally this would require them to install any SDKs, initialize them with their API credentials, but also could include things like setting up a http tunnel so they can receive webhooks, or setting up a database for your product to talk to.

### Onboarding

As I said, a __Get Started__ guide is usually combined with the developer onboarding experience, __signing up__ a new developer to your product. It is extremely important for this process to take a developer all the way from __zero__ to __hero__. Onboarding is integral to the __Get Started__ guide and should therefore not just be about signing up a developer, but truly about getting them working on your platform.

As the onboarding is part of that __Get Started__ experience it's important to resume this flow after signup has been completed. Many successful developer products provide __first-use experiences__ for users new to the platform. A great example is Pusher [who provide a new developer with an excellent first-use experience](https://betta.io/blog/2016/08/31/developer-experience-review-pusher/) that asks new developers to set up their first application, pick their preferred languages, and then provides them with next steps in those languages.

## Complex Guidance

_Medium Motivation / Low Experience_

## Full Reference

_High Motivation / Medium Experience_
