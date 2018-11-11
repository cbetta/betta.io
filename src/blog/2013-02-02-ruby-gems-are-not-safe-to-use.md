---

title: "Ruby gems are still not safe to use"
date: 2013-02-02
comments: true
tags: ruby, gems
icon: ShieldOff
---

In the light of the recent [Rubygems.org](http://rubygems.org) security compromise the community has been looking at ways to make Rubygems.org and Ruby gems in general more secure. The project is still ongoing and feel free to help them out on #rubygems on Freenode, but here is a highlight of what I think are some of the main issues.

Some of the issues highlighted here are taken from [Ben Smith's enlightening (but scary) talk at Aloha Ruby Conference](http://www.youtube.com/watch?v=z-5bO0Q1J9s).



## Disclaimer

I am not a security expert. I am just a Ruby developer and a gem author that is worried about the current state of the Ruby gems ecosystem. I also am worried that the next negative news around Ruby will involve the problems described below.

## What are Ruby gems and what is Rubygems.org?

For those not familiar, [Rubygems.org](http://rubygems.org) is the most popular repository of "gems" for the [Ruby language](http://rubylang.org). Gems are libraries made up out of Ruby (and optionally C) code and can be uploaded by anyone who registered for an account. Rubygems.org currently hosts 50,685 gems which have been downloaded 1,259,533,358 times since July 2009. Ruby gems are not only hosted on Rubygems.org, anyone can run their own repository but Rubygems.org is definitely the most used one.

## Current state

Some parts of the current infrastructure are worrying.

* **Hard to tell if gems were changed on the repo.** It took the Rubygems.org volunteers more than 24 hours to verify every gem's checksum against external mirrors.

* **Impossible to tell if gems were uploaded by gem owner.** It is currently very hard to know if a gem was actually uploaded by it's owner. Developer machines can be compromised and a users API credentials for Rubygems.org are kept unencrypted in `~/gem/credentials`.

* **Gem owner isn't notified of new gem uploads.** When a gem developer's credentials are compromised a new version of the gem can be uploaded without the gem owner ever knowing.

* **Impossible to notify a gem user of compromised gems.** When a gem developer's credentials are compromised it is hard to notify anyone who uses any of the gems published by the developer of the situation.

* **Gems can run code on install.** This is probably the most interesting attack vector in the foreseeable future. It seems this feature was relatively unintentional as it involves tying into the fact that Ruby gems can contain C code. Running code on install will mean that gems can steal the unencrypted Rubygems.org credentials which can then be used to modify the compromised user's gems and spread the malicious code further.

## Proposals for change

* **Notify gem owners of newly published gems.** Adding a simple email notification to the gem owner will at least allow for easier detection of compromised gems. Sadly at this point the gem is already compromised and possibly already spread over any mirrors and downloaded by users.

* **Secure developer's Rubygems.org credentials.** This is pretty simple. My ssh key has a passphrase on it and so should my Rubygems.org credentials. Stealing a rubygems.org API key is easy, using one that requires a passphrase a lot harder.

* **Stop running code on gem install.** I totally see the need for having C extensions in a Ruby gems, and those extensions need to be compiled, but we seriously need to find a way to compile C code without allowing for the arbitrary execution of code on install of a gem.

* **Automatically mirror gems and checksums.**  A system involving the automatic mirroring of gems and their checksums to other servers would definitely have made the verification of gems a lot easier in the last few days.

* **Force signing of gems.** Yes, [you can sign your gems](http://docs.rubygems.org/read/chapter/21) but almost nobody does (and neither do I). Additionally it's a pain to force the usage of signed keys on the gem user's side, not to mention the futility as most gems aren't signed. Signing is the way to go though and work on this has started. It's a difficult topic though and work is being done to make it as painless as possible for users and developers.

* **Notify gem users of unsigned/insecure gems.** The rubygem binary (together with tools like [Bundler](http://gembundler.com/)) should be updated to allow for verification of signatures which will allow it to notify gem users of unsigned or compromised gems.

## How can I help?

* **Code:** [rubygems](https://github.com/rubygems), [rubygems-trust](https://github.com/rubygems-trust)(fork for implementing a signed approach)
* **Discussion:** #rubygems and #rubygems-trust on Freenode

## Did I miss anything?

Please let me know and I'll add it to the list.
