"use strict";

module.exports = function (grunt) {

    // global variables
    var globals = {
        source: "src"           // path of source directory
    };

    // Define the configuration for all the tasks
    grunt.initConfig({

        globals: globals,

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
                    '<%= globals.source %>/js/**/}*.js'
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
        } // less

    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-less');

    // default grunt task
    grunt.registerTask('default', [
        'build' // Run grunt.registerTask('build')
    ]);

    // build the application
    grunt.registerTask('build', [
        'jshint:all',
        'less'
    ]);

};