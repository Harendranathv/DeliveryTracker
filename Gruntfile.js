'use strict';
module.exports = function(grunt) {

    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-jshint');

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        less: {
            development: {
                options: {
                    cleancss: true
                },
                files: {
                    'src/resource-css/style.css': 'src/**/*.less'// destination to source
                }
            }
        },

        connect: {
            server: {
                options: {
                    port: 9000,
                    base: 'build/',
                    keepalive: false,
                    hostname: '*'
                }
            }
        },

        jshint: {
            all: [
                'src/modules/**/*.js'
            ]
        },


        copy: {
            npmLib: {
                expand: true,
                cwd: 'node_modules/bootstrap/dist/css/',
                src: ['bootstrap-theme.min.css', 'bootstrap.min.css'],
                dest: 'src/css/'
            },
            fontNdate: {
                expand: true,
                cwd: 'src/resource-css/',
                src: ['font-awesome.min.css', 'bootstrap-datetimepicker.min.css', 'bootstrap-datepicker.min.css', 'style.css'],
                dest: 'src/css/'
            },
            lib: {
                expand: true,
                cwd: 'src',
                src: 'lib/*',
                dest: 'build/'
            },
            index: {
                src: 'index.html',
                dest: 'build/'
            },
            appJS: {
                expand: true,
                cwd: 'src',
                src: 'app.js',
                dest: 'build/'
            },
            modules: {
                expand: true,
                cwd: 'src',
                src: 'modules/**',
                dest: 'build/'
            },
            model: {
                expand: true,
                cwd: 'src',
                src: 'model/**',
                dest: 'build/'
            },
            imgs: {
                expand: true,
                cwd: 'src',
                src: 'images/*',
                dest: 'build/'
            },
            css: {
                expand: true,
                cwd: 'src',
                src: 'css/*',
                dest: 'build/'
            },
            jsons: {
                expand: true,
                cwd: 'src',
                src: 'json/*',
                dest: 'build/'
            },
            fonts: {
                expand: true,
                cwd: 'src',
                src: 'fonts/*',
                dest: 'build/'
            }
        },


        clean: {
            all: {
                src: ['build/']
            },
            srcCSS: {
                src: ['src/css/']
            }
        },


        watch: {
              files: ['src/**/*.less', 'src/**/*.js', '*.js', 'src/**/*html', '*.html'],
              tasks: ['clean', 'less', 'jshint', 'copy']
        }

    });
    grunt.registerTask('default', ['connect:server']);
    grunt.registerTask('server', ['clean', 'jshint', 'less', 'copy', 'watch']);
};