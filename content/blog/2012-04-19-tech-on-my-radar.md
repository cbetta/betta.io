---
title: "Tech on my radar"
date: 2012-04-19
comments: true
tags: information, ruby
icon: HardDrive
migrated: true
---

Here are just some interesting gems and other software that have caught my attention recently:

* [oh-my-zsh](https://github.com/robbyrussell/oh-my-zsh) makes it easy to use zshell as a replacement for bash on OS X. It is very easy to install and comes with a whole bunch of useful plugins. I've only really dived half into it but already feel like it's been making my console better. I personally love how it shows the Git branch I'm working on at the moment.



* [Bloom Filters](http://en.wikipedia.org/wiki/Bloom_filter) are a very cool way of doing a quick and space efficient lookup if an item exists in a set. It's used by databases and caches, and Google uses it for their Save Browsing service. There's some cool [ruby gems](https://github.com/igrigorik/bloomfilter-rb) that make it easy to use them and I already have an idea where to deploy them next.
* [How Github uses Github](http://zachholman.com/talk/how-github-uses-github-to-build-github) is pretty much how we use Github at EmberAds. The more we do it the more I see the benefits especially:
  * We work asynchronously
  * We use the hell out of Campfire
  * Master is always deployable
  * Pull Requests are our code reviews, requests for comments, and discussion boards.
  * Other apps have great features like prioritising stuff. But honestly, we have barely touched BaseCamp in weeks.
* [Fast UUID generation](https://github.com/EmberAds/cuuid) is something we needed at EmberAds seeing as we use UUIDs everywhere and most of the Ruby gems were rather slow. 	[Caius](http://caius.name) cooked up a Ruby gem that uses a native C library which in our simple benchmarks spit out UUIDs about 6x faster.
* On that note, [acts_as_uuid](https://github.com/EmberAds/acts_as_uuid) is what we use to store UUIDs on our models in Postgres.
* [Rake progressbar](https://github.com/ondrejbartas/rake-progressbar) makes it easier for me to understand if I can go and make a brew or not when some of my rake tasks are running.
* And finally, static site generators like [Nanoc](http://nanoc.stoneship.org/), [Jekyll](https://github.com/mojombo/jekyll), and [Octopress](http://octopress.org/) (used on this site) have been really catching my eye lately. Mainly because of the security and scaling implications. I've been working on a blog post on this, mainly to inspire regular bloggers that you don't need a big server and a massive database to render a Wordpress site that will load slow as hell regardless.
