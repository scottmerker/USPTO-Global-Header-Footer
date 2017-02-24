Changelog
=========

### v1.0.11
* Release 2017-02-24
* Updated to use [USPTO UI Design Library](http://uspto.github.io/designpatterns/index.html) v1.5.3.

-----
### v1.0.10 

* Release 2017-01-30
* Updated README and other *.md files.

#### Updated Grunt build:  
* Added include package to have Grunt build the index.html file with the *.html templates.  This eliminates the use of the includeHTML.js file.  
* Created template folder to house the various views templates.

#### Updated LESS: 
* added the CSS class .uhf-main so that other projects are not restricted to use the <main> element.

-----
### v1.0.9 

#### Release 2017-01-11
#### Changed project structure
* Moved source code out of the root directory and into the folder `app`


#### Changed front-end build processes:
* Updated Grunt to have a task to create a local server to view the application.
* Added watch to Grunt to automatically update the local server when there is an edit.
* Moved from JSHint to ESLint for better ES6 support.


#### Bug Fixes:
* Fixed extra padding around the gray bar title when it is collapsed.
* Fixed background color on buttons in the black bar when they are in the focus and active state.
* Fixed gray bar title when viewed in a small viewport.  The gray bar was over laying the menu items.
* Fixed bug if viewed in iPhone 4, the icons in the header wrapped down leaving the logo and icons out of alignment.
* Fixed bug if viewed in iPhone 4, the top of the content page (about 20px which is about the size of the page title) was missing.
* Changed how we set values on some CSS properties such as margin, padding, font size, etc.  Before it was set as pixels like this 16px.  This does not scale well in different view ports.  I set them to rems  like 1.6rem.  This is new in CSS for scaling and made for responsive design.
* Updated links and link labels.  We already have this in MyUSPTO, but it was not in GitHub.
