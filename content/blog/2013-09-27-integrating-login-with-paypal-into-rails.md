---
title: "Integrating Log In With PayPal into Rails"
date: 2013-09-27
comments: true
tags: ruby, paypal, login, tutorial
published: true
icon: CreditCard
migrated: true
---

Earlier this year PayPal launched the new [Log In with PayPal](https://developer.paypal.com/webapps/developer/docs/integration/direct/log-in-with-paypal/) experience worldwide. Integrating it into Rails is very straightforward with the help of [Omniauth](https://github.com/intridea/omniauth) so I thought I'd show how with a little tutorial.

**Log In With PayPal** is much like **Log In with Twitter** or **Log In with Facebook** but it has the cool benefit of being able to provide you some extra user information like:

* A full street address
* Gender
* Account verification status

All the code for this tutorial is available on [Github](https://github.com/cbetta/login-with-paypal-demo-rails).

## Acquiring credentials

**Log In With PayPal** uses OAuth 2.0/OpenID Connect 1.0 and the full documentation can be found on the [PayPal developer portal](https://developer.paypal.com/). Because it's based on OAuth 2.0 we're going to have to get some OAuth credentials that we can use in our app.

### Creating an application profile

The developer portal doubles as the sandbox and application control panel. Head over and login to get yourself some fresh credentials.

1. Go to [developer.paypal.com](http://developer.paypal.com)
1. Login or signup and then login
1. Go to [Applications](https://developer.paypal.com/webapps/developer/applications/myapps)
1. Hit the **Create application** button
1. Choose a name, leave the **Integration type** set to **Web**

Your app is now created and you can find your credentials under **Application Details**. Please note that there are 2 sets of credentials. Your live credentials can be used for actual payments and actual logins with real PayPal accounts. Your test credentials are there for using **sandbox accounts** (read fake/mock accounts) when in development.

### Enabling Log In With PayPal

We are going to have to enable Log In With PayPal for our app.

1. Scroll down to the bottom of your app details
1. Flip the switch to turn **Log In With PayPal** to **ON**
1. Set the **Return URL** to `http://127.0.0.1:3000/auth/paypal/callback` (or something else if you don't run your Rails app like this)
1. Click on **Add a different return URL for test** and also set that return URL.
1. Set the privacy policy and agreement URLs to anything you want for now
1. Scroll a bit back up and hit **Save**

Optionally you can now toggle **Accept Payments** to off if you don't intend to take payments with this app.

### Test accounts

If you want to run Log In With PayPal in sandbox (a.k.a. test) mode you will need to create some fake test accounts.

1. Go to [developer.paypal.com](https://developer.paypal.com/) and login
1. Go to [Applications](https://developer.paypal.com/webapps/developer/applications/myapps)
1. On the left click on [Sandbox accounts](https://developer.paypal.com/webapps/developer/applications/accounts)
1. Hit the **Create Account** button
1. Unless you have any specific needs I advice you only fill in the following:
    1. Fill in an **email address**. It has to be unique and not match any other live or sandbox email address. I generally pick one of my domains and do **something@mydomain.com**.
    1. Fill in a **password**. Pick something easy.
    1. Skip everything else and hit **Create Account** at the bottom of the page

Using sandbox account for Log In With PayPal is very useful as it allows you to login as different users. At no point should you be sharing your live PayPal username and password with other developers for testing.

## Integration

Assuming a plain Rails app adding Log In With PayPal is now pretty straightforward.

### Add omniauth

Add the omniauth gem to your `Gemfile` and bundle.

```ruby
gem "omniauth-paypal"
```

Now add the following snippet into `config/initializers/omniauth.rb`.

```ruby
Rails.application.config.middleware.use OmniAuth::Builder do
  provider :paypal, "AZj...yjx", "EL4...Q3s", sandbox: true, scope: "openid"
end
```

Replace the `"AZj...yjx"` and `"EL4...Q3s"` with own API Client ID and Secret respectively. Also make sure to set the sandbox value to `false` when using your Live API credentials.

### Handle login

Now that your app is setup and running visit `http://127.0.0.1:3000/auth/paypal` to start the login. Go try it and use that test account you just set up!

You may notice that after the login the app will return back to your app on the `/auth/paypal/callback` path and then fail. This is because we still need to implement this functionality.

We need to do 2 things. First we add a catch for this route in `config/routes.rb`.

```ruby
LoginWithPaypalDemo::Application.routes.draw do
  ...
  get "/auth/paypal/callback", to: "sessions#create"
  ..
end
```

We then need to implement this action in `app/controllers/sessions_controller.rb` much like this:

```ruby
class SessionsController < ApplicationController
  def create
    uid = request.env['omniauth.auth'].uid
    user = User.where(uid: uid).first_or_create
    session[:user_id] = user.id
    redirect_to :root
  end
end
```

The magic here is in the `request.env['omniauth.auth']` object, which is generated by Omniauth and will look something like this:

```ruby
{
  "provider"    => "paypal",
  "uid"         => "VE..Yk",
  "info"        => #<OmniAuth::AuthHash::InfoHash>,
  "credentials" => #<OmniAuth::AuthHash>,
  "extra"       => #<OmniAuth::AuthHash>
}
```

You can use the `uid` to identify the user. I used it to find or create a `User` record, but you could also tie it to a different model. In my case I can then use the following to find the user:

```ruby
class SessionsController < ApplicationController
  ...

  def show
    @user = User.find_by_id(session[:user_id])
  end

  ...
end
```

## Advanced

That's it! Most of my code can be seen on [Github](https://github.com/cbetta/login-with-paypal-demo-rails) and it includes a full login and logout. I want to highlight a few extra things though that are available to you that are pretty useful.

### More user details

Getting the user's UID is fun but rather limiting. Luckily Log In With PayPal allows for a whole lot of [extra attributes](https://developer.paypal.com/webapps/developer/docs/integration/direct/log-in-with-paypal/detailed/#attributes) to be requested. By default you have access to all attributes in the `openid` [scope](https://developer.paypal.com/webapps/developer/docs/integration/direct/log-in-with-paypal/detailed/#attributes).

Let's change our code to also request the user's **name** and **email address**. If we look at the table we see that for this we need to add the `email` and `profile` scopes to our Omniauth configuration.

The first step is to add these scopes to Omniauth:

```ruby
Rails.application.config.middleware.use OmniAuth::Builder do
  provider :paypal, ... scope: "openid email profile"
end
```

Please make sure **not to comma seperate the scopes** as this will cause issues later.

Secondly we need to update our application settings.

1. Go back to our application details on [developer.paypal.com](http://developer.paypal.com)
1. Scroll to the **Log In With PayPal** settings at the bottom
1. Click **Customize** next to **Personal Information** and tick **Full name**
1. Click **Customize** next to **Address Information** and tick **Email address**
1. Scroll up a bit and save

Now if we try to login again we can access the user's extra details as follows:

```ruby
class SessionsController < ApplicationController
  def create
    auth_hash = request.env['omniauth.auth']

    uid = auth_hash.uid
    name = auth_hash.info.name
    name = auth_hash.info.email

    user = User.where(uid: uid).first_or_create!(name: name, email: email)
    session[:user_id] = user.id
    redirect_to :root
  end
end
```

### Omniauth test mode

Omniauth can be slow and especially in tests this can be frustrating. Luckily Omniauth has a **test mode** that allows you to skip the PayPal flow and just "pretend" like a user has logged in.

Add the following to your `config/initializes/omniauth.rb`:

```ruby
OmniAuth.config.test_mode = true

OmniAuth.config.mock_auth[:paypal] =  OmniAuth::AuthHash.new({
  provider: "paypal",
  uid: "1234",
  info: {
    name: "John Doe",
    email: "john@example.com"
  }
})
```

Your app will now skip the PayPal servers and login with the details from above. I use this a lot in my automatic tests.

## Next

That's it for now but I will soon be doing a few more of these. I'm planning at least an overview of how to do this in Sinatra and I also want to demo how to use [Seamless Checkout](https://developer.paypal.com/webapps/developer/docs/integration/direct/log-in-with-paypal/detailed/#seamlesscheckout) on top of this tutorial.
