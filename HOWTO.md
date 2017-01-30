How to use the Universal Header/Footer Template
==============
## Prerequisites
You must use the [USPTO UI Design Library](http://uspto.github.io/designpatterns/index.html) in order to get the styles and assets used by the Universal Header/Footer.  This is based on Bootstrap and uses jQuery.

## Project Structure
```
.
├── app
│   ├── images
│   └── scripts
│   └── styles
│   └── templates
│   └── views
│   └── index.html
├── dist
│   ├── images
│   └── scripts
│   └── styles
│   └── views
│   └── index.html
```
This is the source folder for the application.
##### templates
This folder has the template used to build the distribution code.  It should only be used if you want to use the Grunt build.
##### views
This has the template code for the header and footer.  This code can be used to copy and paste into your site or included if you are running some type of front-end build.
##### styles
This has both the CSS and LESS files used to style the header and footer.
##### dist
This is the distribution folder that has all the generated code from the front-end build.

## How to use
There are various ways to implement the project.  It is designed to be flexible so it can be downloaded as a zip and copy and pasted into your site, used within a front-end builder or grab pieces of it from the GitHub site.  
##### Basic implementation:
* Copy the code from the `dist/views` folder and paste it into your HTML. 
* Copy the `header-footer.min.css` file from the `dist/styles` folder and place it in your site.  Then add the link reference inside header element after the USPTO Pattern Library's CSS reference.  Make sure the CSS references are placed in the order as shown in the example.
* Copy the `header-footer.min.js` file from the `dist/scripts` folder and place it in your site.  Add the reference to it in the HTML. This provides the collapse functionality of the gray bar in the header when the user scrolls to a certain point.
* See full example in the file `dist/index.html`.
``` html
<!doctype html>
<html>
<head>
<title>Universal Header/Footer</title>
<!-- USPTO Pattern Library CSS -->
<link rel="stylesheet" type="text/css" href="styles/usptostrap.min.css">
<!-- Universal Header/Footer CSS -->
<link rel="stylesheet" type="text/css" href="styles/header-footer.min.css">
</head>
<body>
<!-- header.html -->
<header>....</header>

<main>
    <h1>Welcome to USPTO</h1>
</main>

<!-- footer.html -->
<footer>...</footer>

<!-- jQuery library -->
<script src="scripts/jquery.min.js"></script>
<!-- Latest compiled JavaScript -->
<script src="scripts/bootstrap.min.js"></script>
<!-- header-footer.min.js -->
<script src="scripts/header-footer.min.js"></script>
</body>
</html>
```
##### LESS implementation:
The project uses LESS to build the styles and CSS file.  This allows projects to import the LESS file into their styles.
Example:
``` less
// ****  Your LESS file  ****

// Global header footer
@import "@{bower-path}/bower_components/USPTO-Global-Header-Footer/app/styles/less/_header-footer.less";

```

##### JavaScript implementation:
The JavaScript file, `header-footer.min.js`, provides the collapse functionality of the gray bar in the header when the user scrolls to a certain point.  This is an optional feature.  The functionality uses the `<main>` element as the bases for the scroll point for collapsing the gray bar. If your site does not have a `<main>` element, then you may use the CSS class `.uhf-main` on your 'main' element that wraps your content.  However, it is highly recommended to use the `<main>` element to represent the main content of the body of a document or application.  This will help screen readers and other assistive technologies understand where the main content begins.
