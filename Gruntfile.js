module.exports = function(grunt) {
  var path = require('path');
  var exec = require('child_process').exec;
  var tasks = ['coffee', 'uglify'];

  grunt.loadNpmTasks('grunt-contrib-coffee');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.initConfig({

    pkg: '<json:package.json>',

    coffee: {
      all: {
        src: 'require_once.coffee',
        dest: 'require_once.uncompressed.js',
        options: {bare: true}
      },
    },

    uglify: {
      options: {},
      all: {
        files: {
          'require_once.js': 'require_once.uncompressed.js'
        }
      }
    },

    watch: {
      app: {
        files: ['./require_once.coffee'],
        tasks: tasks
      }
    }
  });

  grunt.registerTask('default', tasks);
};
