---
title: Namespacing and scoping your Rails monolith
date: 2016-02-14
tags: ruby, rails, tutorial
icon: Terminal
---

It can be overkill to start every new Rails project as a bunch of microservices. Instead I tend to use this design pattern to separate concerns within my app into specific namespaces and scopes.

## Routes

A simple example is to split functionality for regular users and admins:

~~~ruby
# /config/routes.rb

# routes regular users
scope :app do
  ...
end

# routes for admin users
namespace :admin do
  ...
end

root "app/pages#index"
~~~



Notice that the admin user has its own controller namespace (e.g. `Admin::UsersController`) and route subpath (e.g. `/admin/users`), while the regular users are scoped to their own namespaced controllers (e.g. `App::UsersController`) but their path remains the same (e.g. `/users`).

## Controller and Layouts

The next step is to assign a specific (base) controller and layout that all resources in a scope/namespace will use.

~~~ruby
# /app/controllers/admin/base_controller.rb
class Admin::BaseController < ApplicationController
  include AdminHelper
  layout "admin"
end
~~~

~~~erb
<!-- /app/views/layouts/admin.html.erb -->
<!DOCTYPE html>
<html lang='en'>
  <head>

  ...

  <%= stylesheet_link_tag    "admin", media: "all" %>
  <%= javascript_include_tag "admin" %>
  <%= csrf_meta_tags %>

  ...

  </head>
  <body>
    <%= yield %>
  </body>
</html>
~~~

A few things to note here:

- All controllers in the admin namespace inherit from `Admin::BaseController`.
- The base controller specifies the layout to use, and explicitly includes the necessary helpers (more on helpers below).
- Each layout has its own assets.

## CSS & JS

The reason why each layout includes its own asset tags is so that we can be more explicit about what styles and JS to include in each namespace. By default the Rails manifest looks something like this:

~~~css
/* /app/assets/stylesheets/application.css */

/*
 *= require_self
 *= require_tree .
 */
~~~

Here the `require_tree` statement loads in all CSS in the root folder. This isn't very useful for separating concern and instead I prefer my manifests to only load explicitly defined folders:

~~~
- app/
  - assets/
    - stylesheets/
      admin.css
      app.css
      - app/
      - admin/
      - shared/
    - javascripts/
      admin.js
      app.js
      - app/
      - admin/
      - shared/
~~~

With this setup we can change the manifests to:

~~~css
/* /app/assets/stylesheets/admin.css */

/*
 *= require_self
 *= require_tree ./shared
 *= require_tree ./admin
 */
~~~

~~~js
// /app/assets/javascripts/admin.js */

//= require_self
//= require_tree ./shared
//= require_tree ./admin
~~~

In the past this would work great in development but give you headaches in production. Luckily since about Rails 4 you will be warned to add these new manifest files to your list of precompiled assets:

~~~ruby
# /config/application.rb

config.assets.precompile += ['app.css', 'app.js', 'admin.css', 'admin.js']
~~~

## Helpers

Lastly, by default Rails auto includes all helpers in every controller. This behaviour is nice in a simple app but does not help to separate functionality in this new setup. The following line disables this behaviour:

~~~ruby
# /config/application.rb

config.action_controller.include_all_helpers = false
~~~

Now you can simply include all helpers for each namespace in their respective base controller.
