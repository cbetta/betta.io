---
title: Namespacing views by subdomain in Rails
date: 2016-02-15
tags: ruby, rails, tutorial
icon: Terminal
---

Yesterday I wrote about [namespacing and scoping a Rails](/blog/2016/02/14/namespacing-and-scoping-your-rails-monolith/) app to separate concerns and today I want to extend this to subdomains.

On the BattleHack site we serve every year from the same app (e.g. [2014](https://2014.battlehack.org) and [2015](https://2015.battlehack.org)) while displaying different layouts. To do this we use the same controllers for each year (every one of them inheriting from `controllers/app/base_controller.rb`).

## Extracting the subdomain

In the base controller I first extract the current year:

~~~ruby
# /app/controllers/app/base_controller.rb

def selected_year
  @selected_year ||= begin
    if ["2014", "2015"].include?(request.subdomain)
      request.subdomain
    else
      "2015"
    end
  end
end
~~~



A few things to note here:

- I whitelist the acceptable subdomains as the alternative would allow anyone to access any view paths, potentially opening the app up to unexpected and insecure behaviour.
- When the subdomain is blank or not in the whitelist I instead return the default year. You could put this in an environment variabe instead of hardcoding it like I did here.

## Layouts and views

Next up I changed the base controllers to use the current year to load the correct layout and views.

~~~ruby
# /app/controllers/app/base_controller.rb

class App::BaseController < ApplicationController
  layout -> { selected_year }

  before_filter :set_view_path

  def set_view_path
    prepend_view_path("app/views/#{selected_year}")
  end

  ...
end
~~~

With this setup your controllers will default to:

- `/app/views/layouts/2015.html.erb` as a layout
- `/app/views/2015/app/` as their view path

## Caveats

One big caveat with this setup is that any changes in your models or controllers will require changes in every template for every year. If you remove an attribute on a model, or change the representation of an attribute, this will affect every subdomain.

There are a few solutions to this (besides good tests). One way is to use the presenter pattern (and using a separate presenter based on each subdomain) to keep your changes from breaking anything. Alternatively you can also rely on helpers per subdomain to achieve a similar effect.
