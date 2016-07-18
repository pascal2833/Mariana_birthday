/*
		 After you have changed the settings at "Your code goes here",
		 run this with one of these options:
			"grunt" alone creates a new, completed images directory
			"grunt clean" removes the images directory
			"grunt responsive_images" re-processes images without removing the old ones
		*/

module.exports = function (grunt) {
	grunt.initConfig({
		responsive_images: {
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
				/*files: [{
					expand: true,
					src: ['*.{gif,jpg,png}'],
					cwd: 'img/',
					dest: 'image'
				}]*/
				files: {
					'img/familia14.jpg': 'img/familia14.jpg',
					'img/familia15.jpg': 'img/familia15.jpg',
					'img/familia16.jpg': 'img/familia16.jpg',
					'img/nous1.jpg': 'img/nous1.jpg',
					'img/nous14.jpg': 'img/nous14.jpg',
					'img/nous15.jpg': 'img/nous15.jpg',
					'img/nous16.jpg': 'img/nous16.jpg',
					'img/nous17.jpg': 'img/nous17.jpg',
					'img/nous18.jpg': 'img/nous18.jpg',
					'img/nous19.jpg': 'img/nous19.jpg',
					'img/nous22.jpg': 'img/nous22.jpg',
					'img/pollitos20.jpg': 'img/pollitos20.jpg',
					'img/pollitos25.jpg': 'img/pollitos25.jpg',
					'img/pollitos27.jpg': 'img/pollitos27.jpg',
					'img/pollitos29.jpg': 'img/pollitos29.jpg',
					'img/pollitos31.jpg': 'img/pollitos31.jpg',
					'img/pollitos32.jpg': 'img/pollitos32.jpg',
					'img/pollitos33.jpg': 'img/pollitos33.jpg',
					'img/pollitos34.jpg': 'img/pollitos34.jpg',
					'img/pollitos35.jpg': 'img/pollitos35.jpg'
				}
			}
		},
	});

	grunt.loadNpmTasks('grunt-responsive-images');
	grunt.registerTask('default', ['responsive_images']);

};
