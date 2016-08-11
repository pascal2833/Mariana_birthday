/*
		 After you have changed the settings at "Your code goes here",
		 run this with one of these options:
			"grunt" alone creates a new, completed images directory
			"grunt clean" removes the images directory
			"grunt responsive_images" re-processes images without removing the old ones
		*/

module.exports = function (grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		/*responsive_images: {
			dev: {
				options: {
					//engine: 'im', // Ne rien mettre pour windows (par defaut prend gm, graphic magic)
					newFilesOnly: true,
					sizes: [{
						name: 'maxContainerWidth',
						width: '1000',
						quality: 85
					}, {
						name: '4Mobiles',
						width: '450',
						quality: 60
					}]
				},
				files: [{
					expand: true,
					src: ['*.{gif,jpg,png}'],
					cwd: 'img/',
					dest: 'image'
				}]
			}
		},*/
		/*pagespeed: {
			options: {
				nokey: true,
				url: "https://pascal-evano.org/fotos_Mariana/autresPages/los-pollitos.html"
			},
			prod: {
				options: {
					//url: "https://developers.google.com/speed/docs/insights/v1/getting_started",
					locale: "en_GB",
					strategy: "desktop",
					threshold: 80
				}
			}
		},*/
		sass: {
			dist: {
				options: {
					//trace: true,
					//check: true,
					quiet: true,
					style: 'compressed'
				},
				files: {
					'css/sass/main.css': 'css/sass/main.scss',
					'css/sass/slidesJS.css': 'css/sass/slidesJS.scss'
				}
			}
		},
		watch: {
			css: {
				files: ['css/sass/*.scss'],
				tasks: ['sass'],
				options: {
					spawn: false
				}
			}
		}
	});

	//grunt.loadNpmTasks('grunt-responsive-images');
	//grunt.loadNpmTasks('grunt-pagespeed');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	//grunt.loadNpmTasks('grunt-contrib-compass');
	grunt.registerTask('default', ['sass','watch']);
	/*grunt.registerTask('default', ['responsive_images']);*/
	//grunt.registerTask('default', ['grunt-pagespeed']);

};
