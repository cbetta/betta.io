---
title: "On PhoneGap/Cordova and cross platform mobile development"
date: 2012-06-04
comments: true
tags: mobile, hackdays
icon: MessageSquare
---

So last weekend I was at [Over The Air 2012](http://overtheair.org/) - on of my favorite regular Hack days - and for the first time I decided to actually try and make a "native" mobile app.

Seeing as I don't want to have to redo the app for every platform I decided to try out one of the more famous cross platform development frameworks: [PhoneGap](http://phonegap.com/).



Here are some of the things I discovered during the weekend:

* PhoneGap isn't really a framework. It's really nothing more than a wrapper around a local HTML page with an extra JS library to access native features like the camera, local storage, etc.
* Although [jQuery Mobile](http://jquerymobile.com/) looks very nice, it seems to emulate iOS, making it look out of place on any Android or Windows device.
* PhoneGap in combination with jQuery Mobile allows you to very quickly make a static native app, but as soon as you want to add any dynamics it seems to become quite hard. You will need some kind of JS MVC to tie it all together.
* I had a play with [KnockoutJS](http://knockoutjs.com/) - which we already use at [EmberAds](http://emberads.com) - but it had its issues:
  * Good tutorials on how to integrate with jQuery Mobile were missing, and I was encountering rendering issues.
  * It's not really a MVC, and tying it to template partials seemed harder than it should.
  * Automatic storage of models to local storage/server was missing.

So although I'm happy with the work we did on the first version of our app it clearly will need a rewrite in time to be viable. Here's some of the research I've done so far:

  * I will probably replace Knockout with [BackboneJS](http://backbonejs.org/) which seems to be more flexible and actually support storing to server and/or local storage.
  * Alternatively I might look at [Sensa Touch 2.0](http://docs.sencha.com/touch/2-0/) which seems to be more than just a UI framework but actually also include a full MVC framework.
  * I found some tutorial describing how to integrate PhoneGap, jQuery Mobile, and Backbone, [including a bootstrapped app](https://github.com/ccoenraets/backbone-directory/tree/master/jquerymobile) that integrates them all in a way I might be able to re-use.
