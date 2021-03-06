module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'build/OI.tooltip.js',
        dest: 'dist/OI.tooltip.min.js'
      }
    },
    
    jshint: {
      build: {
        src: '*.js'
      }
    },
    
    sass: {
      dev: {
        options: {
          style: 'expanded'
        },
        files: {
          'dist/OI.tooltip.css' : 'build/OI.tooltip.scss'
        }
      },
      production: {
        options: {
          sourcemap: 'none',
          banner: '/*! <%= pkg.name %>/\nCompiled: <%= grunt.template.today("mm-dd-yyyy") %> */\n',
          style: 'compressed'
        },
        files: {
          'dist/OI.tooltip.min.css' : 'build/OI.tooltip.scss'
        }
      }
    },
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-sass');

  // Default task(s).
  grunt.registerTask('default', ['uglify', 'jshint', 'sass']);

};
