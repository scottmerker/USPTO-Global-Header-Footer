Universal Header/Footer Template
==============

This project provides a front-end template for the header and footer
for USPTO web apps or sites.

- View the source: [https://github.com/USPTO/USPTO-Global-Header-Footer](https://github.com/USPTO/USPTO-Global-Header-Footer)
- [Terms](TERMS.md)
- [License](LICENSE.txt)

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
npm install grunt grunt-contrib-jshint grunt-contrib-less
npm install grunt-contrib-copy grunt-replace grunt-contrib-cssmin
npm install grint-contrib-uglify grunt-contrib-concat
```

Install the project's dependencies with:
```
npm install
bower install
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
* Internet Explorer 9+
* Firefox *(latest 2)*
* Safari *(latest 2)*

*This doesn't mean that HTML5 Boilerplate cannot be used in older browsers,
just that we'll ensure compatibility with the ones mentioned above.*


## Documentation

Take a look at the [documentation table of contents](dist/doc/TOC.md).
This documentation is bundled with the project, which makes it readily
available for offline reading and provides a useful starting point for
any documentation you want to write about your project.


## License

Software code created by U.S. Government employees is not subject to copyright
in the United States (17 U.S.C. §105). The United States/Department of Commerce
reserve all rights to seek and obtain copyright protection in countries other
than the United States for Software authored in its entirety by the Department
of Commerce.  To this end, the Department of Commerce hereby grants to Recipient
a royalty-free, nonexclusive license to use, copy, and create derivative works
of the Software outside of the United States.

## Disclaimer

The United States Department of Commerce (DOC) GitHub project code is provided
on an ‘as is’ basis and the user assumes responsibility for its use. DOC has
relinquished control of the information and no longer has responsibility to
protect the integrity, confidentiality, or availability of the information.
Any claims against the Department of Commerce stemming from the use of its
GitHub project will be governed by all applicable Federal law. Any reference
to specific commercial products, processes, or services by service mark,
trademark, manufacturer, or otherwise, does not constitute or imply their
endorsement, recommendation or favoring by the Department of Commerce. The
Department of Commerce seal and logo, or the seal and logo of a DOC bureau,
shall not be used in any manner to imply endorsement of any commercial product
or activity by DOC or the United States Government.