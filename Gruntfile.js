module.exports = function(grunt) {
 
  grunt.registerTask('watch', [ 'watch' ]);
 
  grunt.initConfig({
   
    watch: {
      js: {
        files: ['js/*.js'],
        options: {
          livereload: true,
        }
      },
      css: {
        files: ['css/*.css'],
        options: {
          livereload: true,
        }
      },
      html: {
      	files: ['index.html'],
      	options: {
      		livereload: true,
      	}
      }
    }
  });
 
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
 
};
