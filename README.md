# Universal Header/Footer Template

This project provides a front-end template for the header and footer
for USPTO web apps or sites.

* Source: [https://github.com/USPTO/USPTO-Global-Header-Footer]
          (https://github.com/USPTO/USPTO-Global-Header-Footer)

## Quick start

Choose one of the following options:
1. Download the latest stable release from
   [USPTO-Global-Header-Footer](https://github.com/USPTO/USPTO-Global-Header-Footer) or create a
   custom build using [Initializr](http://www.initializr.com).
2. Clone the git repo — `git clone
   https://github.com/USPTO/USPTO-Global-Header-Footer` - and checkout the
   [tagged release](https://github.com/USPTO/USPTO-Global-Header-Footer/releases)
   you'd like to use.

You will also need to install [Node.js](https://nodejs.org/en/).
Node.js powers the front-end build and dependency management tools
[Grunt](http://gruntjs.com/) and [Bower](http://bower.io/).

```
npm install -g grunt-cli
npm install grunt grunt-contrib-jshint grunt-contrib-less --save-dev
```

Install the project's dependencies with:
```
npm install
bower install
```
Tweak the path in
bower_components/USPTOPatternLibrary/usptostrap/less/usptostrap.less. Change
```
@bootstrap-path: "bootstrap/";
```
to
```
@bootstrap-path: "../../../bootstrap/";
```
Build the front-end assets (LESS/CSS/JS) with:
```
grunt build
```

## Features

* HTML5 ready. Use the new elements with confidence.
* Designed with progressive enhancement in mind.
* Includes:
  * [`Normalize.css`](https://necolas.github.com/normalize.css/)
    for CSS normalizations and common bug fixes
  * [`jQuery`](https://jquery.com/) via CDN, with a local fallback
  * [`Apache Server Configs`](https://github.com/h5bp/server-configs-apache)
    that, among other, improve the web site's performance and security
* Placeholder CSS Media Queries.
* Useful CSS helper classes.
* Default print styles, performance optimized.
* An optimized version of the Google Universal Analytics snippet.
* Protection against any stray `console` statements causing JavaScript
  errors in older browsers.
* "Delete-key friendly." Easy to strip out parts you don't need.
* Extensive inline and accompanying documentation.


## Browser support

* Chrome *(latest 2)*
* Edge *(latest 2)*
* Firefox *(latest 2)*
* Internet Explorer 8+
* Opera *(latest 2)*
* Safari *(latest 2)*

*This doesn't mean that HTML5 Boilerplate cannot be used in older browsers,
just that we'll ensure compatibility with the ones mentioned above.*

If you need legacy browser support (IE 6+, Firefox 3.6+, Safari 4+) you
can use [HTML5 Boilerplate v4](https://github.com/h5bp/html5-boilerplate/tree/v4),
but is no longer actively developed.


## Documentation

Take a look at the [documentation table of contents](dist/doc/TOC.md).
This documentation is bundled with the project, which makes it readily
available for offline reading and provides a useful starting point for
any documentation you want to write about your project.


## License

The code is available under the [MIT license](LICENSE.txt).
