Changelog
=========
### v1.0.19
* Updated code to pull top navigation dynamically from shared JSON resource
* Updated header.html view to support fall back mechanism to standard links (no dropdowns)
* Added navigation JSON for local (internal) project user
* Updated Grintfile for **assets** folder inclusion 

### v1.0.18
* Updated links in black banner for **File patents** and **Check private filing status**.

### v1.0.17
* Added Google Tag Manager attributes to the menu.

### v1.0.16
* Updated to use [USPTO UI Design Library](http://uspto.github.io/designpatterns/index.html) v1.6.3.

### v1.0.15
* Release 2017-09-19
* Updated linking for background images and logos.

-----
### v1.0.14
* Release 2017-07-13
* Updated spacing between menu items and the MyUSPTO link in the top navigation bar.
* Updated MyUSPTO link font color.
* Updated to use [USPTO UI Design Library](http://uspto.github.io/designpatterns/index.html) v1.5.4.
* Updated the path for the variable `@image-root` in `_header-footer.less`.

-----
### v1.0.13
* Release 2017-05-11
* Updated link for 'File Patents' under the Patent's menu.

-----
### v1.0.12
* Release 2017-03-23
* Updated link for 'Check private filing status' under the Patent's menu.

-----
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
