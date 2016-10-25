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
   [USPTO-Global-Header-Footer](https://github.com/USPTO/USPTO-Global-Header-Footer)
2. Clone the git repo — `git clone
   https://github.com/USPTO/USPTO-Global-Header-Footer` - and checkout the
   [tagged release](https://github.com/USPTO/USPTO-Global-Header-Footer/releases)
   you'd like to use.

You will also need to install [Node.js](https://nodejs.org/en/).
Node.js powers the front-end build and dependency management tools
[Grunt](http://gruntjs.com/) and [Bower](http://bower.io/). You're also
going to need the [Git](https://git-scm.com/) version control system
tools.

To install [Grunt](http://gruntjs.com/) and [Bower](http://bower.io/),
and the tools used by Grunt:
```
npm install -g grunt-cli bower
npm install grunt grunt-contrib-jshint grunt-contrib-less
npm install grunt-contrib-copy grunt-contrib-cssmin
npm install grunt-contrib-uglify grunt-contrib-concat
npm install grunt-replace grunt-contrib-compress
```

Run the following commands to install the project's dependencies:
```
npm install
bower install
```

Build the front-end assets (LESS/CSS/JS) and copy them into the dist
directory with:
```
grunt build
```

## Site Structure

The source code is arranged like this after you've installed
all of the components needed to build the site:

```
.
├── bower_components
├── css
│   ├── _styles.less
│   └── styles.css
├── dist
│   ├── bower_components
│       ├── bootstrap
│       ├── jquery
│       └── USPTOPatternLibrary
│   ├── css
│   ├── images
│   ├── scripts
│   └── other source files
├── images
├── node_modules
├── scripts
│   ├── collapseHeader.js
│   └── includeHTML.js
├── .gitattributes
├── .gitignore
├── .jshinitrc
├── bower.json
├── footer.html
├── Gruntfile.js
├── header.html
├── index.html
├── LICENSE.txt
├── package.json
├── READNE.md
└── TERMS.md
```
Below is an overview of the major directories and files.

### css

This directory contains the CSS and LESS files for the project. The styles
preserve useful defaults from the
[USPTO UI Design Library](https://uspto.github.io/designpatterns/), making
changes where needed. The style sheets include media queries to support mobile
browsers, but nothing nothing to optimize printing.

### dist

This directory contains everything you need to use or run the site. It includes
minified copies of the CSS and JavaScript files.

### images

This directory contains non-icon images used by the header and footer. Icons
are drawn from the from the standard
[USPTO UI Design Library](https://uspto.github.io/designpatterns/).

### scripts

This directory contains the JavaScript needed to run the header and footer.
It includes code used by the sample `index.html`, as well as any code needed
by the header or footer.

#### collapseHeader.js

This script provides the automation needed to collapse and expand the header
when the user scrolls the page. A minified version is available in the
`dist/scripts` directory.

#### includeHTML.js

## Browser support

This code is intended to work with the latest versions of:
* Chrome
* Internet Explorer 9+
* Firefox
* Safari

*This doesn't mean that the template can't be used in older browsers,
just that we'll work to ensure compatibility with the ones mentioned above.*

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