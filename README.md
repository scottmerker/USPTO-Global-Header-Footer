Universal Header/Footer Template
==============

This project provides a responsive front-end template for the header and footer
for USPTO web apps or sites.

- View the source:
[https://github.com/USPTO/USPTO-Global-Header-Footer](https://github.com/USPTO/USPTO-Global-Header-Footer)
- [Terms](TERMS.md)
- [License](LICENSE.txt)

## Quick start

Choose one of the following options:

* If you already have a web site in place and you're managing packages
using [Bower](http://bower.io/), you can download the latest
stable release by including the following in your `bower.json` file:
```
"devDependencies": {
    "USPTO-Global-Header-Footer": "https://github.com/USPTO/USPTO-Global-Header-Footer.git#master"
}
```
* Download the latest stable release from
   [USPTO-Global-Header-Footer](https://github.com/USPTO/USPTO-Global-Header-Footer)
* Clone the git repo — `git clone
   https://github.com/USPTO/USPTO-Global-Header-Footer` - and checkout the
   [tagged release](https://github.com/USPTO/USPTO-Global-Header-Footer/releases)
   you'd like to use.

You will need to install [Node.js](https://nodejs.org/en/).
Node.js powers the front-end build and dependency management tools
[Grunt](http://gruntjs.com/) and [Bower](http://bower.io/). You're also
going to need the [Git](https://git-scm.com/) version control system
tools.

To install [Grunt](http://gruntjs.com/) and [Bower](http://bower.io/),
and the tools used by Grunt, go to the project's root directory and enter:
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

Build the front-end assets (LESS/CSS/JS) and copy them into the `dist`
directory with:
```
grunt build
```
The site is now ready for use.
 
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
when the user scrolls the page. Including this file is required to achieve the
"standard" look-and-feel. A minified version is available in the
`dist/scripts` directory.

#### includeHTML.js

This script reads in HTML from an external file, and is used in `index.html`
to include the code for the header and footer. AngularJS and React provide
this functionality. If you're using one of these frameworks, use their native
toolset to include the header and footer. A minified version is available in
the `dist/scripts` directory.

### footer.html

This file contains the code for the page footer. The contents of this file
are required to achieve the "standard" look-and-feel.

### header.html

This file contains the code for the page header. The contents of this file
are required to achieve the "standard" look-and-feel.

### index.html

This file is an HTML skeleton used to demonstrate the header and footer.

## How to integrate the header/footer

To incorporate this code in your project, start with the steps shown
above in the "Quick start" section: download or clone the
[USPTO-Global-Header-Footer](https://github.com/USPTO/USPTO-Global-Header-Footer)
repository, install the tools and components, and build the project.

### bower_components

You're probably going to want to modify some of the header/footer code, but
there will also be code that remains unchanged. To simplify maintenance,
we recommend that your web site code and build system use relative references
to the portions of the header and footer code that you'll use. This code will
most likely be resident in your web sites's `bower_components` directory.

The header and footer make use of the USPTO Pattern library. If you're using
Bower, add both USPTO-Global-Header-Footer and the Pattern Library to your
`bower.json` file:
```
"devDependencies": {
    "USPTOPatternLibrary": "https://github.com/USPTO/designpatterns.git#v1.5.2",
    "USPTO-Global-Header-Footer": "https://github.com/USPTO/USPTO-Global-Header-Footer.git#master"
}
```

### css

Both USPTO-Global-Header-Footer and the Pattern Library use LESS to create
styles. If you're using LESS, you can include the styles directly from
`bower_components` using something like this:
```
@bower-path: "./bower_components";   // path to the bower components
@import "@{bower-path}/USPTO-Global-Header-Footer/css/_styles.less";
@import "@{bower-path}/USPTOPatternLibrary/usptostrap/less/usptostrap.less";
```

If you prefer CSS, you can include the header and footer styles as follows:
```
<link rel="stylesheet" type="text/css" href="dist/bower_components/USPTOPatternLibrary/generated/styles/pattern-library.css">
<link rel="stylesheet" type="text/css" href="USPTO-Global-Header-Footer/css/dist/styles.css">
```
There's also a minified version of the header and footer styles:
```
<link rel="stylesheet" type="text/css" href="USPTO-Global-Header-Footer/css/dist/styles.min.css">
```

### header.html

The contents of this file are required to achieve the "standard" look-and-feel
for the header, but you'll need to customize it for your site. Include the
contents of this file as close as practical to the top of your <body>
element. 

Likely areas of customization include:
* In `.uspto-header-top`, the menu options in the btn-group sign-in \<div>.
* In `.uspto-header-middle`, the \<span> contents.
* In `.uspto-header-bottom`, the text in \<span>s for `#headerSmallHeadingMobile`
and `#headerSmallHeading` should match the contents of the `.uspto-header-middle`
\<span>.
* In `.uspto-header-bottom`, the \<ul>s containing the menu options for both the
left and right sides of the menu bar.
* The `.uspto-header-top`, `.uspto-header-middle`, and `.uspto-header-bottom`
sections of the header are configured to dynamically resize as the viewport
changes width. For fixed-width sizing, change the `class="container-fluid"`
to `class="container"`.

### footer.html

The contents of this file are required to achieve the "standard" look-and-feel
for the footer. Include this file as close as practical to the bottom of your
\<body> element, just before including any scripts.

Likely areas of customization include:
* The footer is configured to dynamically resize as the viewport
changes width. For fixed-width sizing, change the `class="container-fluid"`
to `class="container"`.

### \<main>

The bulk of your page content should be wrapped in an HTML \<main> tag. Styling
applied to this tag ensures proper positioning of the page content and the
footer. Refer to `index.html` for an example.

Likely areas of customization include:
* The \<main> content is configured to dynamically resize as the viewport
changes width. For fixed-width sizing, change the `class="container-fluid"`
to `class="container"`.

### images

This directory is used by the styles, and is assumed to be located as in
USPTO-Global-Header-Footer, immediately below the root directory.

### scripts

The header and footer depend on jQuery, Bootstrap, and `collapseHeader.js`
to provide appearance and behaviors. You'll need to ensure that they're
included at the bottom of the \<body>.
```
<script src="bower_components/jquery/dist/jquery.min.js"></script>
<script src="bower_components/bootstrap/dist/js/bootstrap.min.js"></script>
<script src="scripts/collapseHeader.js"></script>
```
There's also a minified version of the `collapseHeader.js` script:
```
<script src="scripts/collapseHeader.min.js"></script>
```

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