---

title: "Some notes on Puppet"
date: 2012-11-12
comments: true
tags: puppet, servers
icon: MessageSquare
migrated: true
---

I've been playing with [Puppet](http://puppetlabs.com/) recently in order to finally teach myself a bit about server management. I decided for Puppet because... well... I didn't have time to play with [Chef](http://www.opscode.com/chef/) yet.

I can't show any of my code because it contains some stuff I'd rather not open up, but here are some of my global notes on Puppet that I wanted to share.

## The good

* **It did the job.** I now have a few scripts that I can use to quickly setup a server for Rails, including NGINX, PostgreSQL, Unicorn, Monit, and much more.
* **Quick deployment.** I can now deploy a new Rails app to a server within minutes!
* **[The Learning Puppet series](http://docs.puppetlabs.com/learning/)** is a good starting point and explains most of the basics
* **Low tech.** Running a puppet script really doesn't involve much more than running: `puppet apply path/to/puppet/file.pp`

## The bad

* **No single server deployment solution.** There doesn't seem to be a best practice on how to use puppet with just one server. I know that the serious people will have to manage many many servers, but I think that they could make Puppet more accessible to newcomers by having a good solid solution for their own server. Many of us learn new things by trying them out for our own hobby projects before using them in big-business contexts. I have resorted to using Capistrano for deployment, but it just feels wrong somehow.
* **Not many great modules.** Puppet has a modules system which allows anyone to package their solutions and share them with the community. Sadly most of the modules are old, unmaintained, and often broken. Additionally the modules often don't solve the problems in a way that I'd like them to, forcing me to write my own.
* **Convoluted language.** Puppet requires Ruby to run, but the DSL is not Ruby, nor is it Javascript, or JSON,or YAML, or anything else that so many developers already know. The architecture for defining classes, types, and modules is convoluted, backwards, and feels very awkward. I think one of the reasons why there aren't many well written modules is very much related to this.
* **Compiling from source.** One of the biggest missing features seems to be some good architecture for installing anything that isn't packaged up. I often want to run a different Ruby, Nginx, Apache, PHP version than is in the package repositories. I know this is a hard problem, but again I wish there was some kind of best practice.
* **Ordering from hell.** Puppet does not run your actions in order as specified in your `.pp` file. Instead you can tell it if something has a requirement. In my experience almost everything has a requirement and specifying the orders is becoming a nightmare and a real frustration.
* **Missing features.** There are a few features that are still missing. One of the most important ones (in my eyes) is the ability to generate a folder recursively (e.g. `mkdir -p path/with/multiple/folders`). Instead you are now forced to create every layer as a new statement.

## Conclusion

Puppet will do for now, but I wish it was a bit more opinionated in how it thought it should be used. The language is not pretty and very verbose, and its lack of best practices for single server deployment is a real omission.

Does anyone know how Chef performs in these regards?
