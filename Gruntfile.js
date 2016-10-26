"use strict";

module.exports = function (grunt) {

    // global variables
    var globals = {
        source: ".",           // path of source directory
        dist: "dist",          // path for distribution directory
        banner: '/* USPTO Header Footer <%= grunt.template.today("dd-mm-yyyy") %> */\n'
    };

    // Define the configuration for all the tasks
    grunt.initConfig({

        globals: globals,

        // import the configuration info from package.json
        pkg: grunt.file.readJSON('package.json'),

        // check coding style
        jshint: {
            options: {
                jshintrc: '.jshintrc',
                force: true, //show all errors but continue grunt
                reporter: require('jshint-stylish')
            },
            all: {
                src: [
                    'Gruntfile.js',
                    '<%= globals.source %>/scripts/**/*.js'
                ]
            }
        },

        // convert LESS to CSS
        less: {
            development: {
                options: {
                    compress: false,  // compress output by removing some whitespaces
                    // the banner is inserted at the top of the output
                    banner: "<%= globals.banner %>"
                },
                files: {
                    // to file : from file
                    "<%= globals.source %>/css/styles.css": "<%= globals.source %>/css/_styles.less"
                } // files
            } // development
        }, // less

        replace: {
            /*
             * Remove the use of the "dist" directory from the index.html in
             * the "dist" directory. Not used, but leaving this in just in case.
             */
            dist:{
                options: {
                    patterns: [{
                        match: /=\"dist\//g,
                        replacement: '="'
                    }]
                },
                files: [{
                    expand: true,
                    src: ['<%= globals.source %>/index.html'],
                    dest: '<%= globals.dist %>'
                }]
            }
        },

        // copy files to the distribution directory
        copy: {
            source: {
                files: [{
                    expand: true,
                    dot: true,
                    cwd: '<%= globals.source %>',
                    dest: '<%= globals.dist %>',
                    src: [
                        '*.{ico,png,txt,md}',
                        '*.html',
                        'images/{,*/}*.{png,gif,svg}',
                        'scripts/*.js'
                    ]
                }, {
                    expand: true,
                    cwd: '<%= globals.source %>',
                    dest: '<%= globals.dist %>',
                    src: [
                        'bower_components/jquery/dist/jquery.min.js',
                        'bower_components/bootstrap/dist/js/bootstrap.min.js',
                        'bower_components/USPTOPatternLibrary/generated/images/icons/*.svg'
                    ]
                }]
            },
            css: {
                expand: true,
                cwd: '<%= globals.source %>',
                dest: '<%= globals.dist %>',
                src: 'css/{,*/}*.{css,less}'
            },
            // copy icons from design pattern library in bower components to images/icons
            icons: {
                files: [{
                    expand: true,
                    dot: true,
                    cwd: 'bower_components/USPTOPatternLibrary/generated/images/icons/',
                    dest: '<%= globals.source %>/images/icons/',
                    src: [
                        '*.{webp,png,jpg,gif,svg}'
                    ]
                }]
            }
        }, // copy

        // concatenate the JavaScript files and place them in a temp directory
        concat: {
            dist: {
                src: ['<%= globals.source %>/scripts/*.js'],
                dest: '<%= globals.source %>/.tmp/headerFooter.concat.js'
            }
        }, // concat

        // minify the CSS and add a .min.css extension
        cssmin: {
            target: {
                files: [{
                    expand: true,
                    cwd: '<%= globals.source %>/css',
                    src: ['*.css', '!*.min.css'],
                    dest: '<%= globals.dist %>/css',
                    ext: '.min.css'
                }]
            }
        }, // cssmin

        // compress and uglify the JavaScript
        uglify: {
            options: {
                // the banner is inserted at the top of the output
                banner: "<%= globals.banner %>"
            },
            build: {
                files: [{
                    expand: true,
                    src: '**/*.js',
                    dest: '<%= globals.dist %>/scripts',
                    cwd: '<%= globals.source %>/scripts',
                    ext: '.min.js'
                }]
            }
        }, // uglify

        // build a ZIP file
        compress: {
            main: {
                options: {
                    mode: 'zip',
                    archive: '../USPTO-Global-Header-Footer-v1.X.X.zip'
                },
                files: [
                    {
                        expand: true,
                        cwd: '.',
                        src: [
                            '**',   // include everything
                            '.**',
                            '!archive/**',
                            '!node_modules/**',
                            '!bower_components/**',
                            '!.idea/**',
                            '!.git/**',
                            '!**.iml',
                            '!.tmp/**'
                        ]
                    }
                ]
            }
        } // compress

    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-replace');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-compress');

    // default grunt task
    grunt.registerTask('default', [
        'build' // Run grunt.registerTask('build')
    ]);

    // build a ZIP file to include with releases
    grunt.registerTask('zip', [
        'compress'
    ]);

    // build the application
    grunt.registerTask('build', [
        'jshint:all',
        'less',
        'copy:source',
        'copy:css',
        'replace',
        'cssmin',
        'uglify'
    ]);

};