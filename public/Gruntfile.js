module.exports = function(grunt) {
    // cargamos todas las tareas
    require('load-grunt-tasks')(grunt);

    // Configuracion del proyecto.
    grunt.initConfig({
        less: {
            dev: {
                files: {
                    "app.css": [
                        "app/master.less"
                    ]
                },
                options: {
                    compress: false,
                    //source maps
                    strictMath: true,
                    sourceMap: true,
                    outputSourceFiles: true,
                    sourceMapURL: 'app.css.map',
                    sourceMapFilename: 'app.css.map'
                }
            },
            build: {
                files: {
                    "app.css": [
                        "app/master.less"
                    ]
                },
                options: {
                    compress: true
                }
            }
        },
        watch: {
            less: {
                files: [
                    'app/*/**.less',
                    'app/*/less/**.less',
                    'app/less/*/**.less'
                ],
                tasks: ['less:dev']
            }
        }
    });

    // resgistrar las tareas
    grunt.registerTask('default', [
        'dev'
    ]);

    grunt.registerTask('dev', [
        'less:dev'
    ]);

    grunt.registerTask('build', [
        'less:build'
    ]);
};