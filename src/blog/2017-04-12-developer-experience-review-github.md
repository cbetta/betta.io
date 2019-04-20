---
title: "Developer Onboarding: GitHub"
date: 2017-04-12
tags: developer experience, developer onboarding
icon: Instagram
---

<Message> This is the fifth in a series of articles focussing on reviewing [Developer API Onboarding](https://betta.io/blog/categories/developer-onboarding/). In this post I'm looking at the API onboarding offered by [GitHub](https://github.com/). </Message>

## Criteria

I will be looking at 3 aspects of the onboarding experience:

1. **Exploration**: Does the experience help me to understand or try out their product before signing up for an account?
2. **Onboarding &amp; Integration:** How well does the product guide me from their main site to create an account and to make that first API call or integration?
3. **Reference:** Once I have my first integration in place, how hard is it to find the full reference documentation for the API call I made?

Additionally I will look at the **emails** sent by GitHub after I sign up.

## GitHub

#### _A better way to work together_

<Youtube id="N1XnG2dG9iE"></Youtbe>

> GitHub is a web-based Git or version control repository and Internet hosting service. It offers all of the distributed version control and source code management (SCM) functionality of Git as well as adding its own features. It provides access control and several collaboration features such as bug tracking, feature requests, task management, and wikis for every project. - [Wikipedia](https://en.wikipedia.org/wiki/GitHub)

GitHub is an interesting company as it's the first one that I will be reviewing that has a "end-user" side of people using GitHub on a daily basis for developing their own projects, and a "API developer" side of people building integrations into and on top of the GitHub API, for other developers to use. In other words, both the end-users and the API developers are mostly developers, making GitHub a pretty unique product to look at.

## Exploration

Let's start by exploring what we can do with the GitHub API. In this case, what I am interested in is knowing how API calls are made, what they can and can't do, and why I might want to use them.

[`https://github.com`](https://github.com)

![Landing page](../images/dx/github/github-1.png)

As is to be expected, the main site for GitHub is mostly designed around the "regular" user, the one who is there to use GitHub as a tool, not as an API.

When I scroll down I find some mentions to the API.

![Landing page (2)](../images/dx/github/github-2.png)

When I click on `Learn more about the integrations` I don't quite end up on any API documentation.

[`https://github.com/features#integrations`](https://github.com/features#integrations)

![Integrations](../images/dx/github/github-3.png)

This page seems to be mostly about what integrations I can use as an end user, not about what I can do as an API developer.

![Integrations (2)](../images/dx/github/github-4.png)

After some more creative on-page searching, I do find a link to `Developers` in the footer.

[`https://developer.github.com`](https://developer.github.com)


![GitHub Developers (1)](../images/dx/github/github-5.png)

Ah, great! A developer portal! I scroll down and find some very nicely organised links.

![GitHub Developers (2)](../images/dx/github/github-6.png)

I love how there is a clear `Getting Started` guide, and links to the more popular API libraries. Clearly the left hand documentation is focussed on different levels of users, in my case I am going to look at the first guide.

But first, let's scroll down a bit further.

![GitHub Developers (3)](../images/dx/github/github-7.png)

It's good to see some familiar names like [CircleCI](https://circleci.com/) and [Gitter](https://gitter.im/) that have integrated with GitHub through their API. I wonder if I can see how they integrated on their pages, let's look at Gitter.

[`https://github.com/integrations/gitter`](https://github.com/integrations/gitter)

![Gitter Integration](../images/dx/github/github-8.png)

Sadly, this seems rather useless from an API discovery point of view. This page allows me to add Gitter to my GitHub, and therefore is more focussed on the GitHub end user than the API developer.

Let's go back and visit that `Getting Started` guide.

![Getting Started](../images/dx/github/github-10.png)

A little introduction, admitting that most people would use an API library, and then a little "Hello World" sample.

![Getting Started (2)](../images/dx/github/github-11.png)

I copy paste the cURL command into my terminal and low and behold I've made my first API call.

```sh
curl https://api.github.com/zen
```

![Getting Started (3)](../images/dx/github/github-13.png)

Or have I?

I mean, yes technically I've made an API call here, but not one I would actually ever use. So far this exercise has tought me more about cURL than it has about GitHub.

When I actually run the next command I can see something more useful.

```sh
curl https://api.github.com/users/defunkt
```

![Getting Started (4)](../images/dx/github/github-49.png)

Ok, now that is a lot more useful. Here I can actually see some data that I can get out of the API. I have to admit it's failry simple and has done little to inspire or inform me so far about __what__ I can do with the API, but at least I've seen it's easy to use.

Let's move on and sign up for some API credentials so we can start cracking on.

At this point I'd like to highlight that there is no __Sign Up__ or __Log In__ links on the developer portal. There isn't even a link to the main `github.com` site!

![GitHub Developers](../images/dx/github/github-5.png)

So yeah, I go back to the main site and click to sign up.

## Integration

The signup to GitHub has little information for API developers, which is probably fine. I love how it provides clear hints for each field, and a clear description about what you will get for this initial free signup.

![Signup](../images/dx/github/github-15.png)

On the second page we get to choose if we want a paid plan.

![Signup (2)](../images/dx/github/github-16.png)

I love how they make it clear that this is not super important as you "can upgrade at any time".

A little skip button or link would have made this even clearer.

Now, the 3rd page did confuse me.

![Signup (3)](../images/dx/github/github-18.png)

I assume this is some survey that will let GitHub better understand their users, but the questions are very loaded. It's hard to understand if the answers I give here will have any effect on the rest of my experience of GitHub.com. I also don't know if I can change this later or not.

I choose to be a student interested in Android.

![First use experience](../images/dx/github/github-19.png)

After signup I get given some basic options for a new GitHub user. In my case though, I am interested to see if I can find my API keys for making more powerful API calls.

I head over to the settings page and find a __Developer settings__ section. I click on the __Personal access tokens__.

[`https://github.com/settings/tokens`](https://github.com/settings/tokens)

![Personal access tokens](../images/dx/github/github-21.png)

I am not sure if this is what I need. Somehow I am expecting an API key and secret and this doesn't seem to be it. Maybe __Integrations__?

[`https://github.com/settings/integrations`](https://github.com/settings/integrations)

![Integrations](../images/dx/github/github-22.png)

Hmmm, this seems to be more about something that integrates into GitHub. I am still not 100% sure what that means as I wasn't given a great example of the power of this feature. Does this use different API credentials? Not sure.

What about `OAuth applicatons`?

[`https://github.com/settings/developers`](https://github.com/settings/developers)

![OAuth Applications](../images/dx/github/github-23.png)

This might be what I need, but again, I am not sure. Non of the wording around these different panels is helping me to understand what I need.

To be fair, I don't even know what I want to do yet, so maybe let's go back to the docs and explore a bit further what I can do.

[`https://developer.github.com/`](https://developer.github.com/)

![GitHub Developers](../images/dx/github/github-5.png)

I decide it might be a good idea to maybe look at the reference API to see what basic actions I could perform.

[`https://developer.github.com/v3`](https://developer.github.com/v3)


![GitHub API](../images/dx/github/github-26.png)

I have to say I don't really enjoy the layout of these documents. Every page I seem to land on has a long list at the top (table of content for the page?) and a long list on the side (table of content for the site?).

The first thing I keep doing is to scroll past it to get to any content. In this case I do spot the authentication link and scroll on to that.

![GitHub API (v2)](../images/dx/github/github-30.png)

So yeah there are different ways to authenticate and the simplest way seems to be with a username and password, which seems pretty problematic for so many reasons.

What's interesting is that this document doesn't try to educate me at all on what authentication method to use at which point. Clearly there are certain security ramifications to each one.

Ok let's expore a bit more what I could do with the API once I have the right credentials. Maybe create a repository?

[`https://developer.github.com/v3/repos`](https://developer.github.com/v3/repos)

![GitHub API - Create Repositories](../images/dx/github/github-32.png)

Ok, this is more useful. So, yes, I can create repositories with the API. What's interesting here is that they seem to have switched to HTTP methods, not cURL (or SDK calls) as examples.

I don't really fancy writing manual cURL commands, so let's look at the SDKs.

[`https://developer.github.com/libraries`](https://developer.github.com/libraries)

![Libraries](../images/dx/github/github-33.png)

It seems GitHub has 3 libraries of their own: Ruby, Objective-C and .NET. There's a lot of community libraries as well apparently, but the Ruby one will do for me.

I click through to the library and look at the quick start.

[`https://github.com/octokit/octokit.rb`](`https://github.com/octokit/octokit.rb`)

![Octokit Ruby Library](../images/dx/github/github-34.png)

The instructions are pretty clear: a few lines on installing the library, and another one on initializing the library with a username and password.

I still don't know what authentication method I need, so I just proceed by using my username and password.

![First API call](../images/dx/github/github-36.png)

That worked! Ok now the next step is to create a repository.

I search for `create` and `repository` on the GitHub README but nothing useful comes up. I'm stuck.

![Method search](../images/dx/github/github-39.png)

I do a quick search in the issues and the code and eventually find a method called `create_repository`. I eventually realise though that there was a link to the RubyDocs in the header of the repository.

[`http://octokit.github.io/octokit.rb`](http://octokit.github.io/octokit.rb)

![API method Search](../images/dx/github/github-42.png)

The search box on the RubyDoc is a lot more useful and so I finally find the documentation I need.

![create_repository documentation](../images/dx/github/github-43.png)

After some messing around I finally manage to make the API call I need. A repository has been created!

![Code: Repository created](../images/dx/github/github-44.png)

## Reference

In my finally effort I want to know what the exact API request parameters are, and what the response parameters look like. I'm more specifically trying to understand what params are required, what types and ranges they have, and what they mean.

[`https://developer.github.com/v3/repos/#create`](https://developer.github.com/v3/repos/#create)

![Repository - Create](../images/dx/github/github-45.png)

When it comes to the request parameters the documentation has it covered. Lots of information about each argument, their type, and what they mean.

Sadly close to nothing is provided about response parameters.

![Repository - Create (2)](../images/dx/github/github-46.png)

Instead the response here is just a sample, with no context as to the meaning of each field, their expected ranges, if they're always there even if the field does not exist, and much more.

I searched for more but could not find anything.

## Emails

On a last note, I want to highlight the emails I eventually received from GitHub.

![Confirmation email](../images/dx/github/github-47.png)

The first email I received was one to verify my email address. A simple email with nothing else.

![Welcome email](../images/dx/github/github-48.png)

The second email arrived a bit later and had a nice link in it to get me started on my first project. Nothing about any APIs or anything, which is probably right.

## Conclusions

> ★★★
>
> *Harder than it should be*

GitHub is an example of a product where the API is very much a product that is not their core product. As a result, the onboarding, activation, and even documentation for developers is very much geared around users already familiar with their main product. Sadly, this makes it rather hard for a developer to find a clearly signposted flow from API novice to API hero.

### The good

* It's good to see GitHub have developed their own API libraries. I do wish there were a few more of them in other languages as well, and I wish some of the API docs would show how to make the various API calls both in HTTP, cURL and using the libraries.
* It's great to see that the API, and the product, are mostly free to use. It is noticable though that GitHub does not make most of their money through their API (like other companies I've reviewed, like Twilio) and as a result the onboarding and UX around getting started with the API has clearly suffered.

### The bad

* Finding the API and its documentation from GitHub.com proved to be a real challenge. Once I found it, finding the right documentation was rather challenging as well. Most of the developer site feels like a wiki with little thought having gone into the information architecture and the followup steps that people need to take to get going.
* It was really hard for me to understand what I could do with the API without digging deep into the docs. There was little overview or guidance, and a lot of the information was too complicated, too early, leading to a vast information overload at certain occassions. Splitting the docs into more focussed steps, with better call to actions, signage to next steps, and headers would make a big difference.
* There is no clear flow that takes someone from discovery to onboarding to first API call. As a result I spent a lot of time clicking back and forward to find the right page, often re-evaluating pages I had been on before to see if I had missed something amongst the copy.
* Because there are different ways to integrate with GitHub there are also many different ways to authenticate. Sadly none of this was explained to me at the times when I needed it. As a result I still don't understand the power of GitHub integrations, or what the security implications are of a personal access token over OAuth credentials.
* Finally, there is close to no reference documentation on responses. Often all that has been provided is a sample response. This is not sufficient.


## Next

That's it for this fifth [Developer Onboarding](/blog/categories/developer-onboarding/) review. Let me know in the comments below what you think of this post and if I should continue. I'd also love to know what company you think I should review next.




