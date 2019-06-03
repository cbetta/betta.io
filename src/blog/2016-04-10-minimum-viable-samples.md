---
title: Minimum Viable Samples
date: 2016-04-10
tags: devrel
icon: Code
migrated: true
---

> TL;DR - Code samples are important for teaching developers how to use a technology. Use the Minimum Viable Sample checklist below to avoid common mistakes.

Explaining to developers how to use your software or service is important - wether you are working in developer relations or as an open source developer. During my time as a developer advocate at PayPal [I wrote a lot of code samples](https://github.com/braintreedev?utf8=%E2%9C%93&query=sample) and came up with the idea of the Minimum Viable Sample.

Code samples are a great way to teach developers how your product works. They go by many names - demos, examples, quickstart apps - but what sets them apart from tutorials and documentation is that they provide developers with a different way to assimilate the same content. It's important to remember that developers, like most people, have different preferred ways of learning. Samples are just one of those.

## Samples as a learning technique

The purpose of a good code sample is to allow a developer to see a fully integrated example of your technology in action. They can download, run, experience, and then break down your sample to see how it works and how it fails. At the essence samples allow for "Learning By Breaking" (or "Learning By Taking Apart").

Additionally samples also allow developers to get a full context for  your documentation. Often tutorials or documentation can skip important details that seem obvious to the experts but can confuse a beginner.


## The sample flow

To understand why samples can fail to help a developer let's break down how samples tend to work in practice.

1. A developer discovers a sample
2. They download the sample to a development machine
3. They install the dependencies for the sample
4. They compile or build the sample
5. They run the sample
6. They interact with the sample
7. They look at the code and change or remove things
8. Back to 6.

For a simple [Sinatra](http://www.sinatrarb.com/) app this would look something like this:

1. Head to Github
2. `git clone` the sample
3. Ensure Ruby and Bundler are installed
4. `bundle install` the dependencies for the app
5. `ruby app.rb` to run the Sinatra app
6. Open the browser, fill in a URL, click a button, type in some account details, etc.
7. Change an API call paramater
8. Back to 6.

## Why samples fail

A lot of things can go wrong when writing a good sample. Here's a few of the main concerns to keep an eye out for.

### Missing or Incorrect Documentation

The simplest mistake to make is to not document the steps above. Especially steps 3, 4, and 6 require a lot of detail to help out a beginner. Any steps missing can be confusing to anyone new to your product (or the language or platform).

### Unnecessarily Complicated Code

When you are trying to show how to use your product on platform X (e.g. Express) then that should be __the only learning objective__ for that sample. Don't add in unnecessary dependencies or technologies. _Just because you use them in all your products doesn't mean a beginner knows what they are._

For example, when you want to show off your product on Express, don't also add in React if not needed. Instead you can provide a series of samples that add more technology to the stack in each sample. In this example you'd have an Express sample followed by a Express+React sample.

### Unnecessary Configuration

Ideally a developer should never need to configure a sample. If your product uses API keys then try to provide test credentials for them to play with. Try to infer all other values from the system environment if possible.

If you really want to provide some flexibility through configuration then ensure that you have sensible defaults for people to get started with. The important thing is to provide an out-of-the-box experience.

### Unidiomatic Code

As a Ruby developer I can often tell when a sample (or an SDK) has been written by a Java developer. Whether it's the use of `CamelCase` instead of `snake_case`, the use of incorrect build tools, or the excessive use of trailing semi-colons.

It is important your code reflects current coding styles and design patterns used by the developers you're trying to target. If your code isn't idiomatic you can alienate the experts and confuse a beginner.

### Unmaintained Code

We all want to write samples once and then leave them behind. Sadly SDKs get updated, APIs change, and even a language's best practices (see Unidiomatic Code) changes. Trying to keep up with these changes can be hard but if these samples are important to your business then maintaining them is important as well.

The real danger of unmaintained samples is that a developer might download it and fail to get it working. At this point their impression of you has been lowered or ruined, possibly leading them to abandon your product.

### Untested

One thing that can help with Unmaintained Code is to provide tests for your samples. I've personally found tests very useful to quickly assess if the SDKs/APIs/sample are still working. It allows me to quickly tell a developer if it's them or us.

One danger of tests is that they can create Unnecessarily Complicated Code in your sample. Be aware of this as finding the right balance is important.

## The Minimum Viable Sample

Based on the problems above I wrote a little checklist for a Minimum Viable Sample (or a Minimum Viable Demo as I used call it). I've used this idea at PayPal for our samples and I intend to use this in the future again.

I intentionally use the term Minimum Viable here as I think I showed above that staying minimalistic is extremely important. Often when I write samples (or review them) I will chip away at the code until only the bare essence of the sample remains.

---

A __Minimum Viable Sample__ ensures that:

1. The sample only has __one (new) learning objective__
1. The code is of __minimal complexity__
1. The code is __idiomatic__
1. The code is __maintained__
1. The code is __tested__
1. The documentation is __complete__ and __correct__
1. The configuration is __minimal__ or non existent


---

To see some good code samples have a look at the [BraintreeDev GitHub page](https://github.com/braintreedev?utf8=%E2%9C%93&query=sample). Although these samples are currently no longer maintained they are what inspired this checklist.

One thing we learned from these samples is that it can be hard to find the right balance. Especially the ones that involved the Mobile SDKs were particularly hard. In these we had to combine the mobile and server-side code into one sample, essentially breaking our first and second rules.

I'd love to know what your approach is to code samples and if you think I missed any rules. I also think a lot of these rules can probably (to a certain degree) be applied to documentation and tutorials as well. Leave me your thoughts in the comments.
