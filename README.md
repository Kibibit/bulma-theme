# kibibit-bulma

this is `kibibit`'s bulma based theme for GitHub Pages. can be used in any jekyll site with the `Local Installation` section.

This was originally created to have a clean style for postmortems. Available layouts: `default` & `postmortem`

### postmortem layout

the postmortem layout requires some additional variables:
```yml
---
project: achievibit
title: Postmortem Theme for Jekyll
date: 31/31/31
incident: 465
authors:
 - Neil Kalman
 - Or Tichon
layout: postmortem
---
```

## Use on GitHub Pages

In order to use this theme with your GitHub Page, remove the `theme: <...>` line from `_config.yml` and replace it with the following:
```yml
remote_theme: Kibibit/bulma-theme
```


## Installation

Add this line to your Jekyll site's `Gemfile`:

```ruby
gem "kibibit-bulma"
```

And add this line to your Jekyll site's `_config.yml`:

```yaml
theme: kibibit-bulma
```

And then execute:

    $ bundle

Or install it yourself as:

    $ gem install kibibit-bulma

## Usage

TODO: Write usage instructions here. Describe your available layouts, includes, sass and/or assets.

## Contributing

Bug reports and pull requests are welcome on GitHub at https://github.com/[USERNAME]/hello. This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the [Contributor Covenant](http://contributor-covenant.org) code of conduct.

## Development

To set up your environment to develop this theme, run `bundle install`.

Your theme is setup just like a normal Jekyll site! To test your theme, run `bundle exec jekyll serve` and open your browser at `http://localhost:4000`. This starts a Jekyll server using your theme. Add pages, documents, data, etc. like normal to test your theme's contents. As you make modifications to your theme and to your content, your site will regenerate and you should see the changes in the browser after a refresh, just like normal.

When your theme is released, only the files in `_layouts`, `_includes`, `_sass` and `assets` tracked with Git will be bundled.
To add a custom directory to your theme-gem, please edit the regexp in `kibibit-bulma.gemspec` accordingly.

## License

The theme is available as open source under the terms of the [MIT License](https://opensource.org/licenses/MIT).

