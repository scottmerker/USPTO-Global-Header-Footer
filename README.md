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

To install Grunt and Bower:
```
npm install -g grunt-cli bower
npm install grunt grunt-contrib-jshint grunt-contrib-less
npm install grunt-contrib-copy grunt-contrib-cssmin
npm install grint-contrib-uglify grunt-contrib-concat
npm install grunt-replace grunt-contrib-compress
```

Install the project's dependencies with:
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
│   ├── _styles.css
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

## Browser support

* Chrome
* Internet Explorer 9+
* Firefox
* Safari

*This doesn't mean that the template can't be used in older browsers,
just that we'll ensure compatibility with the ones mentioned above.*

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