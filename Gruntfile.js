"use strict";

module.exports = function (grunt) {

    // global variables
    var globals = {
        source: ".",           // path of source directory
        dist: "dist"           // path for distribution directory
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

        less: {
            development: {
                options: {
                    compress: true
                },
                files: {
                    // to file : from file
                    "<%= globals.source %>/css/headerfooter.css": "<%= globals.source %>/css/headerfooter.less"
                } // files
            } // development
        }, // less

        // copy files to the distribution directory
        copy: {
            dist: {
                files: [{
                    expand: true,
                    dot: true,
                    cwd: '<%= globals.source %>',
                    dest: '<%= globals.dist %>',
                    src: [
                        '*.{ico,png,txt,md}',
                        '*.html',
                        'images/{,*/}*.{png,gif}',
                        'scripts/*.{js}'
                    ]
                }, {
                    expand: true,
                    cwd: '<%= globals.source %>',
                    dest: '<%= globals.dist %>',
                    src: [
                        'bower_components/jquery/dist/jquery.min.js',
                        'bower_components/bootstrap/dist/js/bootstrap.min.js'
                    ]
                }]
            },
            css: {
                expand: true,
                cwd: '<%= globals.source %>',
                dest: '<%= globals.dist %>',
                src: 'css/{,*/}*.css'
            },
            // copy icons from design pattern library in bower components to images/icons
            icons: {
                files: [{
                    expand: true,
                    dot: true,
                    cwd: 'bower_components/USPTOPatternLibrary/usptostrap/images/icons/',
                    dest: '<%= globals.source %>/images/icons/',
                    src: [
                        '*.{webp,png,jpg,gif,svg}'
                    ]
                }]
            }
        } // copy

    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-copy');

    // default grunt task
    grunt.registerTask('default', [
        'build' // Run grunt.registerTask('build')
    ]);

    // build the application
    grunt.registerTask('build', [
        'jshint:all',
        'less',
        'copy:dist',
        'copy:css'
    ]);

};