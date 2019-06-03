---
title: "Graceful Errors in Ruby SDKs"
date: 2018-03-30
tags: developer experience
icon: Terminal
migrated: true
---

When setting out to create a great developer experience, a large part of your
success will depend on how your product handles the **"failure path"** of a
developers user story.

In a usual login form, this would be something like a user typing in an
incorrect username and password, but in a client library or SDK this is often
when the user is providing the wrong credentials or incomplete parameters to an
 API call.

In this post, I will be looking at the SDKs from
[SendGrid](https://sendgrid.com/), [Twilio](https://www.twilio.com/),
[Stripe](https://stripe.com/), and [Contentful](https://www.contentful.com/)
to see how they handle two common errors: **invalid credentials** and **an
invalid request**.

## Authentication Error

One of the most common errors is the authentication error. A developer can
copy the wrong credentials, or copy them partially, leading to a failure
in authentication.

### The Bad - SendGrid

Let's start off with an example of how a developer experience can go wrong
using SendGrid's Ruby library.

```ruby
require 'sendgrid-ruby'

# We initialize with an invalid API key
sendgrid = SendGrid::API.new(api_key: 'not_my_api_key')

# We then make an API call
response = sendgrid.client.alerts.get()
# this should return something like:
#=> [{"id":393762,"type":"usage_limit","percentage":90,
#     "email_to":"work@betta.io","created_at":1472239122,
#     "updated_at":1472221122}]

# Finally, let's grab the ID for the first alert
response.parsed_body[0]['id']
```

When we run this, we might be surprised to see the following surprising result.

```bash
Traceback (most recent call last):
script.rb:8:in `<main>': undefined method `[]' for nil:NilClass (NoMethodError)
```

At this point, the error is being thrown on a different line than where the
problem occurred, making it hard for the developer to figure out what caused the
issue.

It turns out, that our invalid API call returned the following.

```ruby
puts response.status_code
#=> 403
puts response.body
#=> {"errors":[{"field":null,"message":"access forbidden"}]}
```

In other words, the developer needs to remember to check for a valid status
code before they can continue.

### The Good - Twilio

Twilio does things considerably better, though not perfect.

```ruby
require 'twilio-ruby'

# We'll use a valid SID
account_sid = 'my_actual_sid'

# But we'll use an invalid auth token
client = Twilio::REST::Client.new account_sid, "not_my_auth_token"

# We finally make an API call
client.api.account.messages.list
```

When we run this code a `Twilio::REST::TwilioError` is thrown.

```bash
Traceback (most recent call last):
  7: from twilio.rb:8:in `<main>'
  6: from /twilio-ruby-5.7.2/lib/twilio-ruby/rest/api/v2010/account/message.rb:97:in `list'
  5: from /twilio-ruby-5.7.2/lib/twilio-ruby/rest/api/v2010/account/message.rb:127:in `stream'
  4: from /twilio-ruby-5.7.2/lib/twilio-ruby/rest/api/v2010/account/message.rb:181:in `page'
  3: from /twilio-ruby-5.7.2/lib/twilio-ruby/rest/api/v2010/account/message.rb:181:in `new'
  2: from /twilio-ruby-5.7.2/lib/twilio-ruby/rest/api/v2010/account/message.rb:212:in `initialize'
  1: from /twilio-ruby-5.7.2/lib/twilio-ruby/framework/page.rb:22:in `initialize'
/twilio-ruby-5.7.2/lib/twilio-ruby/framework/page.rb:32:in `process_response': Unable to fetch page (Twilio::REST::TwilioError)
```

This is a lot more info that we need, so let's shorten the last line to get the bit we need. I'll shorten all future examples like this as well for our convenience.

```bash
page.rb:32:in `process_response': Unable to fetch page \
(Twilio::REST::TwilioError)
```

Although an error was thrown, the error has a pretty generic name (`Twilio::REST::TwilioError`) and neither it nor it's
message explain what just happened.

If we actually catch the error and print it out we get a lot more information.

```ruby
begin
  client.api.account.messages.list
rescue Twilio::REST::TwilioError => error
  puts error
end
```

```bash
Unable to fetch page: [401] {"code"=>20003, "detail"=>"Your AccountSid 
or AuthToken was incorrect.", "message"=>"Authenticate", 
"more_info"=>"https://www.twilio.com/docs/errors/20003", "status"=>401}
```

What's really cool here is that the API returns a link to the docs, in this case
the documentation for the [20003 error](https://www.twilio.com/docs/errors/20003)
which explains all the reasons why this error might be thrown.

### The Great - Contentful

Contentful is a relatively new company yet their SDK does a pretty good job in
this scenario.

```ruby
require 'contentful'

# Let's initialize with something strings that are
# definitely not my credentials
client = Contentful::Client.new(
  access_token: 'not_my_token',
  space: 'not_my_space'
)

# Now let's make an API call
client.content_types
```

Contentful, unlike Twilio, actually returns an error with a self-descriptive
name, `Contentful::Unauthorized`. It also parses out the description from the
API response and puts it right here in the error message.

```bash
client.rb:321:in `fail_response': HTTP status code: 401 Unauthorized (Contentful::Unauthorized)
Message: The access token you sent could not be found or is invalid.
Request ID: 420e900ce606953c660fe28899b14bb0
```

What I love especially is that the error uses line breaks to put the important information
on the next line. As a result, the important message is not somewhere at the right end of the terminal.


## Invalid Request Error

Invalid requests often happen because developers don't know what parameters to
provide to an API call, or because they provide them in the wrong format. I admit even
I often play with APIs by just making API calls until I get it right, omitting to read the documentation.

### The Bad - SendGrid

As we saw earlier, SendGrid's SDK errors quietly even with these kinds of errors.

```ruby
# Let's try to create a new API key without any parameters
response = sendgrid.client.api_keys.post()

# The class does not give away that this is an error
puts response.class
#=> SendGrid::Response

# Yet, the status code again does.
puts response.status_code
#=> 400

# The body contains some useful information
puts response.body
#=> {"errors":[{"field":"name","message":"missing required argument"}]}

# Yet, as the body is a String, not a Hash, we can't
# access any of the data directly
puts response.body['errors'][0]['field']
#=> "errors"
```

On the upside, the response does include some details as to which parameter is missing.

### The good

Stripe does a much better job, providing instructions in the message of the error
as to which fields are missing.

```ruby
require "stripe"

# Let's use my actual API key this time
Stripe.api_key = "my_api_key"

# Let's create a charge with only an amount.
Stripe::Charge.create(amount: 2000)
```

The resulting `Stripe::InvalidRequestError` has a clear error name, and the
description does describe what fields are missing in plain English.

```bash
stripe_client.rb:277:in `handle_error_response': Must provide source or \
customer. (Stripe::InvalidRequestError)
```

### The Almost Great - Twilio

I was sad to see that Twilio dropped the ball a bit here. Let me explain why.

As we saw earlier, the error response from the Twilio API returns links to the
documentation. If I were to make an API call without its required parameters I'd
see something like this.

```bash
curl -XPOST https://api.twilio.com/2010-04-01/Accounts/MY_SID/Messages.json \
    -u 'MY_SID:MY_AUTH_TOKEN'
```
```bash
{"code": 21603, "message": "A 'From' phone number is required.", "more_info": \
"https://www.twilio.com/docs/errors/21603", "status": 400}
```

As you can see, this has a link to [https://www.twilio.com/docs/errors/21603](https://www.twilio.com/docs/errors/21603) which provides further documentation on the error.

Sadly, when we use the Ruby SDK we don't see this URL back in the error.

```ruby
client.api.account.messages.create()
```

```bash
version.rb:157:in `create': Unable to create record: A 'From' phone number \
is required. (Twilio::REST::RestError)
```

I tried inspecting the `Twilio::REST::RestError` but it really doesn't seem to have
been included. This is sad, as the previous `Twilio::REST::TwilioError` did seem
to include the full response body, including the URL.

## Conclusion

As you can see, there's a lot of different ways errors can be handles in Ruby
API client libraries, and different companies have different approaches. Which
one is your favourite?
