module.exports = function(grunt){
	//all tasks
	require('load-grunt-tasks')(grunt);

	//project configuration
	grunt.initConfig({
		
		less: {
			dev: {
				files: {
					"src/css/styles.css": [
						"src/less/master.less"
					]
				},
				options: {
					compress: false,
					//source maps
					strictMath: true,
					sourceMap: true,
					outputSourceFiles: true,
					sourceMapURL: 'styles.css.map',
					sourceMapFilename: 'src/css/styles.css.map'
				}
			},
			build: {
				files: {
					"src/css/styles.css": [
						"src/less/master.less"
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
					'src/less/**.less',
					'src/less/*/**.less',
					'src/less/*/*/**.less'
				],
				tasks: ['less:dev']
			}
		}
	});

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