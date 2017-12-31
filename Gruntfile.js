module.exports = function(grunt) {
  grunt.initConfig({
    responsive_images: {
      images: {
        options: {
          engine: 'gm',
          sizes: [{
            width: 270,
            suffix: '',
            quality: 20
          },
          {
            width: 400,
            suffix: '',
            quality: 20
          },
          {
            width: 575,
            suffix: '',
            quality: 20
          },
          {
            width: 875,
            suffix: '',
            quality: 20
          }]
        },
        files: [{
          expand: true,
          src: ['*.{gif,jpg,png}'],
          cwd: 'img/',
          dest: 'images/'
        }]
      }
    },
    clean: {
      dev: {
        src: ['images'],
      },
    },

    mkdir: {
      dev: {
        options: {
          create: ['images']
        },
      },
    },
  });
  grunt.loadNpmTasks('grunt-responsive-images');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-mkdir');
  grunt.registerTask('default', ['clean', 'mkdir', 'responsive_images']);
};
