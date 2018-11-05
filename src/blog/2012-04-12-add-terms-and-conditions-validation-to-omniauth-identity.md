---
title: Add terms & conditions validation to Omniauth Identity
date: 2012-04-12
comments: true
tags: rails, omniauth, ruby
icon: diamond
---

[Omniauth Identity](https://github.com/intridea/omniauth-identity) is a great
identity provide that shipped with Omniauth 1.0 it can be a bit simple at
times. I wanted to add a simple terms and conditions check on signup to my
registration form and this is what I came up with.

For this example I assume you already have a Omniauth Identity setup much
like explained in [this Railscast](http://railscasts.com/episodes/304-omniauth-identity).



## Step 1 - app/views/identities/new.html.erb

Add a checkbox to your form.

~~~erb
<div class="field">
  <%= label_tag :conditions %><br>
  <%= check_box_tag :conditions %>
</div>
~~~

## Step 2 - app/models/identity.rb

Add a attribute to your identity model and check for it to be set.

~~~ruby
class Identity < OmniAuth::Identity::Models::ActiveRecord
  ...

  validates :conditions, acceptance: true, allow_nil: false, on: :create
  attr_accessor :conditions

  ...
end
~~~


You should really only check this on create, otherwise this validation will
run every time the identity gets updated, unless of course you decide to store
the `conditions` value in the database.

## Step 3 - config/initializers/omniauth.rb

This is the one that took me the longest to figure out. You need to tell
Omniauth Identity what fields to look for on signup.

~~~ruby
Rails.application.config.middleware.use OmniAuth::Builder do
  provider :identity, fields: [:email, :conditions]
end
~~~

In the same way you can add a users name and other details, though I highly
recommend you dont store those on the `Identity` but on the `User` model.
