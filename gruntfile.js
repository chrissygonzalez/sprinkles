module.exports = function(grunt) {

  grunt.initConfig({
  	autoprefixer: {
        dist: {
            files: {
                'dist/css/style.css': 'src/css/style.css'
            }
        }
    },
  	responsive_images: {
      default: {
        options: {
        sizes: [{
          width: '50%',
          rename: false,
          suffix: '_1x'
        },{
          width: '100%',
          rename: false,
          suffix: '_2x'
        }]
      },
    files: [{
      expand: true,
      cwd: 'src/images_src',
      src: ['**.{jpg,gif,png}'],
      dest: 'src/images'
      }]
    }
  }
  });

//grunt.loadNpmTasks('grunt-responsive-images');
grunt.loadNpmTasks('grunt-autoprefixer');
//grunt.loadNpmTasks('grunt-inline');
//grunt.loadNpmTasks('grunt-contrib-htmlmin');

grunt.registerTask('default', ['autoprefixer']);

};