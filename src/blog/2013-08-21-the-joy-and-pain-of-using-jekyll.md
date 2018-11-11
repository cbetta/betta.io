---

title: "The joy and pain of using Jekyll"
date: 2013-08-21
comments: true
tags: jekyll
icon: MessageCircle
---

I've been tempted to write a bit about Static Site Generators (SSGs) for a while now, mainly because I love them. I've been using [Jekyll](http://jekyllrb.com/) for various projects for a while now and I love it. The simplified hosting, higher security, and general hackability are just a few pros that make it worth it.

But they have also pained me, and after reading ["The joy and pain of using a static site generator for private and client work"](http://screamingatmyscreen.com/2013/8/the-joy-and-pain-of-using-a-static-site-generator-for-private-and-client-work/) I thought I'd add in my own few observations from a Jekyll perspective.



## The joys

Why would I talk about Jekyll specifically? It has a lot of pros that make it
one of the most popular SSGs out there, and hence worth dicussing. Here are just a few:

* It's extremely simple, has no predefined structure, just write HTML or Markdown and go
* No server side code is a big pro to me, easier deployment, easier security, simpler hosting.
* It's the default recommended SSG for [Github Pages](http://pages.github.com/), allowing you to use them as free hosting!
* Github even compiles Jekyll for you server side meaning you can use [Github.com](http://github.com) to edit your site.

## Pain points

Sadly not all is perfect and here are some of my main observations of working on a few Jekyll sites in small teams.

### Forget about I18n

Most of you might not ever need any internationalisation but the day a client turns around to you and asks "Can we translate this one page to Spanish?" you will hate yourself for using Jekyll. Internationalisation is not standard supported and therefore a royal pain in the *** to do nice.

Not to mention that you can't serve the same content in different languages under the same URL depending on the user's cookie or locale. Forget about it, ain't gonna happen.

### No plugins on Github

There are a lot of plugins for Jekyll and they're awesome. There's even a few for I18n, though I never tried them. Sadly non of them are supported by Github. Sure, you can compile your code client side, then push the compiled code (including the plugin generated code) to the server. This stops you from quickly pushing any mayor changes without using a laptop.

### No predefined structure

Jekyll is ridiculously simple. I think all you need is a config file and some HTML or Markdown and **boom** your site is there.  But when your site extends beyond a few files you quickly start adding some folders: images go into `/images/`, stylesheets into `/stylesheets/`, etc. But what about pages? Use `foo.html` or `foo/index.html`? Store the images for that pages in `/images/foo/` or `/foo/images/`?

All of these decisions are easily made, but it does mean you need to explain every new decision to your colleagues, and it increases the technical debt when bringing onboard new developers.

### Markdown is limited

I love Markdown but sometimes it can be such a pain. Especially when you want to go outside of the standard "headers, paragraphs, links" it can just be upsetting. Getting HTML inside Markdown to work in Jekyll used to (and probably still) require switching to a different Markdown parser, which wasn't supported on Github, etc.

To be honest this is a bit of a pet peeve with Markdown, not Jekyll. Often all I want to do is just add a class to something, either a header or a link. I often wished Markdown supported something like this:

~~~markdown
This is a H2 with classname of foo
------------------------------.foo

## This is a H3 with an index of foo ### #foo
~~~

## Suggestions

In short, I think a few suggestions for the further improvements of Jekyll, Github Pages, and Markdown are at hand:

1. Standard I18n support in Jekyll would be nice
2. Support for some default "safe" plugins on Github would be amazing
3. A generator to generate a "default" site structure would be nice and could help promote best practices.
4. Markdown should support some basic classes and indexes, allowing easier application of CSS and JS.

Alternatively I highly recommend using [Middleman](http://middlemanapp.com/), another SSG that seems to solve some of the pain points described above.
