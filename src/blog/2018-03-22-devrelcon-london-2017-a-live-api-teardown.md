---
title: "DevRelCon London 2017 - A Live API Teardown"
date: 2018-03-22
tags: developer experience, developer onboarding
icon: Video
migrated: true
---

<Message> This post is a transcript up of a talk given at [DevRelCon London 2017](london-2017.devrel.net). This article was first posted on the [DevRel.net](https://devrel.net/developer-experience/live-api-teardown) blog. </Message>

<Youtube id='4X6iPGnV9jI'></Youtube>

## Transcript

You know, normally, the way I kind of submit talks for conferences, I just write the title and then I submit it. And like most of my talks, this is like three months ago, I thought this was a great idea. And now, standing here, I’m like, “Oh, shit.” So, yeah. Hi, I’m Cristiano. I work at [Hoopy](http://hoopy.io). I’m a developer experience designer. I’m doing some of the training tomorrow, so for those of you who would be there tomorrow, I’ll see you there.

### Constructive rudeness

I do a certain kind of thing quite often on the Internet where I’m a bit rude. And in this way, it’s kind of constructive rude. So, one of the things I’ve been doing is, I’ve been looking at different companies and how they do their onboarding and their documentation or what it looks like. And the way I do that is I just try to onboard myself onto their platform, and record that as a video, and show people how that goes.

So, I’ve looked at SendGrid, initially, and they took it very well. I didn’t get beaten up by people over here. So, I think that went relatively well. Everybody was always like, “Yeah, that was very good, very constructive,” and I’m like, in the background, like, they’re having a meeting somewhere going, “How can we shut his website down?” GitHub could have done that because my website is actually hosted on GitHub. So, they could have done that.

You know, I look at these things and it’s mostly just me going, “Oh.” So, yeah, it’s mainly me just going, “Where am I supposed to click? What am I doing? Well…” I do a lot of editing to take those out but sometimes I leave them in. I have a five-star rating system. There’s actually a system behind it. There’s stripe, which is kind of almost flawless, a five star would pretty much be like it’s completely flawless. One star would be, you know, I didn’t manage to make an integration work. I gave GitHub a “Harder than it should be” rating, which sounds harsh but they did a pretty good job, it just was harder than it should be. So, yeah, I’m a bit evil in that way.

### Exploration, onboarding and reference

And my thought for this talk was, you know, I’m not trying to be a jerk. I’m trying to kind of give people constructive feedback about usability. And if you’re in my workshop tomorrow, we’ll cover this in more detail. We’ll cover kind of, like, what makes things usable, what kind of UI makes things approachable, discoverable, predictable, correct, etcetera. I like to explore those things.

And I like to explore those things because when we have developers onboard onto our systems, we always have that idea of a developer, right? Developers look exactly like me, right? And they onboard and all they need is only the tools that I’ve ever needed. And they are already drinking the Kool-Aid and they know why our product is amazing. Where, realistically, if you talk about motivation and experience, developers are more likely to go a little bit more like that where they become really motivated by your product and then they actually use it.

And they’re kind of a little bit less motivated but a little bit more experienced, and then, they kind of, like, get maybe motivated at some point again. And eventually, they’ll have an integration but they’ll be somewhere there in the picture. So, that journey is a lot more kind of jagged than we think it would be. It’s not a clean flow. So, I wanna highlight some bad UX, but I also wanna kind of just show cool things that people have done. And I have a system, just three things that I look at. One is exploration, onboarding, and reference. But this is not a presentation, and these are already a lot of slides. So, we’re gonna onboard because this is a live API Teardown, not a slide deck.

### The live test

So, I will need a lovely assistant. Mike? Yes. So, I have hat here, and there’s three companies in here right now. There’s…no, no, no, don’t pull yet. There’s, in here, is Algolia, Heroku, and I put, content-fully, without asking them. Any other companies want to put their name in the hat?

**Bruce:** Bring it on.

**Cristiano:** Bruce said, “Bring it on.”

**Man 2:** SendGrid.

**Cristiano:** SendGrid.

**Man 3:** We’re going to redo SendGrid?

**Cristiano:** Okay. Any other ones we can add?

**Man 4:** Alfresco.

**Cristiano:** Alfresco, is it something I can do with my web development background skills? Because, I don’t know what Alfresco is.

**Man 4:** Yeah.

**Cristiano:** Yes? Okay, cool.

**Man 4:** Kind of did like that one.

**Man 3:** I think you just did Alfresco.

**Cristiano:** I really don’t know what it is. You volunteered. If this is gonna go really badly, you know why you did. Okay.

**Man 4:** I’m gonna leave it at that.

**Cristiano:** So, Mike, please pick a record.

Mike: Alfresco. Alfresco.

**Cristiano:** You know, I could just read out whatever I want, right?

**Man 4:** Good point.

### Exploration I: can I understand it?

**Cristiano:** Ah, SendGrid. You asked for it. SendGrid. Okay. So, you know, a good round of applause for Mike for being fabulous. So, the three things I like to look at are, I highlighted them for you already, the first one is exploration. And exploration to me means, “Does the experience help me to understand or try out their product before setting up an account?” So, quite often, companies seem to think like, you know, you already know what you want to do with a product, right? When you land on the website, which isn’t necessarily always true.

So, as a developer, I sometimes, you know, I might have heard of a company from another developer, word of mouth, you know, a lot of those are in word-of-mouth marketing. So, how easy is it for me to see how your product works without having to commit, right? At this moment, my motivation is really low and I’m really not interested in giving you my Social Security number and everything else you need to sign up. So, how hard would it be for me to understand? So, let’s see.

This is SendGrid. So, sendgrid.com, you know, I know they send emails. I’ve looked at them before. I wonder what they do. Now, they send promotional emails with confidence, shipping notifications with confidence, email newsletters with confidence. Okay. So, I wonder, what would that look like from a developer perspective? Let’s see if I scroll down to SendGrid API. Great. Ah, here we go. There’s a little bit of a code sample on the right. Great. I’m gonna copy paste this, and run this. Permission denied. Wrong credentials. Okay. So, even though, you know, there is a sample there, it’s not actually a sample I can run. It’s not something I can actually play with.

**Exploration II: can I experience it?**

I wonder if I could still get an experience of what that would look like if I did have credentials without actually signing up. So, if I start to look at their site, you know, there’s, you know, there’s some Ruby, which is interesting. You know, it’s good that they’re kind of showing these code samples side by side, but that’s nothing new for a company. But, okay. What would that actually look like?

So, you know, this starts to look a lot more like a marketing page at this point where…okay. So, there’s nothing here that allows me to, right now, really experience the product, right? This page is about the API but it’s not about the product. The product is, you know, fast e-mail delivery. But, how fast is it? I can’t judge that from this without signing up. If I go to…one of my favorite ones is Pusher, you know, you can go here, I can copy this current sample, I go to my terminal. And I wanna show you in a way that there’s visual. And, boom, the colour changed that. That was me doing that. Now, that was an interaction where now I’ve got an experience, not just about what they do, but how quickly that really goes.

Twilio does a similar thing where they have this page which, again, it’s about SMS. And on the right-hand side here, they have, you know, in different languages, let me switch it to note because everybody writes JavaScript these days, right? You know, there’s the code there. And, of course, that code won’t work unless I get an actual access. I’ll get some actual things to work with.

But, I can just type my number here on the right, type it in, and within three seconds, I get that, you know, that message that is written there in the body and that gets delivered to me. So, even though I didn’t run that code literally, I still got an experience of how good the product is by combining that code with an actual interactive code sample. So, you know, good effort on having the code there. I’d love for there to be a way for me to actually use that to get, you know, get some experience of like what the product does, not just your API, how does the product is extended by the API.

### Onboarding I: how does it guide me?

So, let’s sign up. Part two. The second step, to me, is onboarding. And onboarding, to me, means, you know, how well does the product guide me from the main site, from that landing page I landed on, which often might not be the main site, to create an account and make that first API call or integration. And it’s very important. I’m not talking necessarily about becoming a successful developer on this platform.

That is, you know, there’s a lot more about developer experience beyond, you know, that first integration. But, you know, how easy is it for me to make a valuable API call? Not just a “Hello world,” but actually do something that really matters using the API. And how difficult is that? So, let’s go and have a look. So, let’s sign up. Cool. Simple but flexible pricing. I don’t want to pay but there seems to be a really tiny, well-obscured little link here saying, “Try for free.” I am going to try that. That is probably what I want to do. Before, that was a lot more hidden. That has definitely improved.

Trial. It’s very clear they’re being upfront saying, “Look, this is a trial, but you’re not paying something.” I really like that. And, quite often, when I see certain signup forms, it’s very unclear what I’m signing up for. It’s like email address, name, that’s, you know, password, or that’s it. And then, you know, I’m not sure whether or not I’m committing to anything at that point. So, let’s pick something, DevRelCon. Like that. Really secure password, and let’s just copy this. And then the convenience of having a…owning your own domain is you can make up as many email addresses as you want.

### Onboarding II: what does it ask me?

So, one of the things I like to look at, kind of, signup forms and the idea of kind of cognitive load. And, like, are these questions easy to answer? And are they potential restrictions on me actually signing up? The questions like that would be you know, your name. Asking me for my name sounds really easy, you know, we all have a name, right? But, does that need to be my legal name? Does that need to be my company name? Does that need to be… especially, if you’ve ever changed your name for whatever reason, or if you’re, you know, say, you know, I know a lot of people from China have their Chinese name and their Western name. Which one do you want me to fill in? Those are really difficult questions.

The questions here are relatively simple. The nice thing is, this box here has kind of moved the question about what kind of pricing plan I have, they’ve just set it to a default, and going, “Look, you have the free one here.” They could have made that a question in the signup form, but then they would have to explain, at that point, what the different options were. Every other field here is pretty low on the complexity level. I’m not a robot. Not yet. We’re working on that. Okay. Let’s sign up. Okay.

Now, we get to the interesting questions. So, these questions are clearly there for, you know, research reasons, for understanding. A lot of companies do these questions to ask you, to get a profile of who you are so that they know what the developers are, and then they can do better developer relations because they can better cater the product to you. The problem with these questions is, at this moment, I don’t know what these questions are going to be used for.

I don’t know if I can change them. Like I said, with the name, if I have a different name in my password but I don’t use that publicly, right, and I don’t want to use that publicly for privacy reasons, I wouldn’t know what to fill in there. If I’m filling company name there, can I change that later? Like, if I’m just signing up as a developer to try it this out, but I might wanna use it for my company later but I’m not sure yet what the company is called, can I change this later? These are a lot of questions that are quite high.

And at this point, there is no way for me to skip this. There’s no way for me to continue without providing you with all my valuable, completely-correct data. Company websites. What is your role? Okay, I love this question. What is your role? Developer/Marketer/CEO/Other. Great. If I, you know, I run my own company, I’m also a designer, I’m also a developer. If I say CEO, do I still get API keys? I assume so, let’s do it.

Please choose one because we all only have one hat. How do you plan to send e-mail? I wanna use your API. How many emails do you send per month? Personally or as a business? How many employees? Okay, you know, again, some of these questions, you know, might be really easy for you but they’re really complicated for other people to work with. Okay.

### Onboarding III: what does it let me do?

And now, we get to the place where SendGrid, before, did a really, really bad job. They would end you up on a page where they would just drop you on the dashboard with no further instructions. It seems like this is vastly improved. We can actually look at all the different ways to use their API, send your first email, verify your account. I like this. The idea of clearly communicating to a developer what state your account is in, even if you don’t have the concept of a sandbox environment and a live environment. Quite often, you just, you know, putting on, it’s still saying, “Look, whatever you’re gonna do now, this is live,” can be really beneficial to developers. So, let’s see if I can make an API call.

Let’s choose the web API. Let’s do Ruby because I know you all do note but I do Ruby. How to create and send an email? Make sure you have the prerequisites. Yes, I do. Create an API key. Why do I need to name my API key? Best Key Ever. Excellent. Okay, that seems a bit non-standard. I think we were talking about that before. Okay. So, I wanna send my e-mail. And so, let’s see if I can do that. So, let’s say, you know, we’re all here at, you know, an event sponsored by GitHub, some I’m opening my Adam on here. Like that. Yeah, and then we Veem. And I have problems with my Veem. Why do I have problems with Veem? I don’t know. Okay…yeah.

Let’s bundle that. I’m just getting… I’m going to use…Let’s copy this. Okay. Let’s see if we can make this work. It should be easy, right? Let’s send this to cristiano@hoopy.io.

Sending with SendGrid is fun. Okay, cool. And I’m just gonna paste my actual API key in there because I’m lazy. All the best developers are lazy, right?

### Reference: what did it do for me?

Okay. Bundle Exec Ruby. Ruby. Cool. Got a 202. See if we actually got the email. Just a minute, I need to switch to my other my email account. This is the confirmation email. I’m sorry, I’m still on wrong email account. Everybody has too many email addresses, right? Sending with SendGrid is fun. That works. That was good. That is exceedingly better than it used to be. Okay. So, the last thing I like to do is to look at the reference. So, I’m now done with it, but I wonder how hard, you know, once that my first integration is in place, how hard is it to find the full reference for what I just did? I’ve just done something and I’d like to know how easy it would actually be to figure out what I just did.

So, if I go here and I go and look at SendGrid API new, and then I do try that mail, send, post, and then I post some data. So, I wanna see, like, okay, what were the inputs, the exact inputs, the exact outputs of that API call. You know things aren’t good when I start to “Mmm.” Am I missing it? No. Okay. So, somehow, the next step is to verify the integration. But that’s not really what I wanna do. So, is anybody else seeing it? No. Sendgrid.com, documentation. Oops. I saw it and then it went away. Documentation, Web API. Okay.

So, I’m assuming “mail sent” means I did post “mail sent.” Although, that is me assuming this because I’m, you know, I’m experienced to understand that that is probably how that maps. But I can probably see, “Okay, here is the request body. These are the kind of things.” So, the “To,” we used the “To” to kind of send the email, the Bcc, and there’s the full kind of response schema as well.

### What else do I need it to do?

So, not too hard, you know. I think SendGrid did pretty well there. I think there’s some interesting stuff around the onboarding that are maybe unnecessarily complicated. And, you know, especially asking for data in a mandatory form means you’re gonna end up with a lot of mandatory bogus because people will just fill it in because they don’t know what they’re gonna do with it yet. The link to the documentation, after making that first API call, could have been easier. It could have been easier to just, you know, add that extra link and say, “Look, you’ve just done this. By the way, if you wanna read more about this, here. Meanwhile, if you don’t wanna read it, we’ll take you onto the next step of what you logically should be doing.”

Thank you. I have a couple of things to add. The first thing is, if you want me to do something like this for your company and not post it online as a video, I’m available for bribes, contracting. There’s also a lot of the stuff… there’s a couple of books that I really enjoy reading. One of them was this book, which I’ve used in many of my talks. I have it with me. It’s a really cool book to kind of flip through and kind of read about different… kind of different UX principles and design principles, and they’re really interesting. A lot of the…including kind of the cognitive overload that I talked about. So, that went actually pretty well, I think. So, thank you very much.
