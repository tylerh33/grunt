module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({

    // include node config
    pkg: grunt.file.readJSON( 'package.json' ),

    // cleanup
    clean: [ "dist/" ],

    // concatenate
    concat: {
      dist: {
        src: [ 'dev/index.js', 'dev/poop.js' ],
        dest: 'dist/scripts/index.js'
      }
    },

    // check code
    jshint: {
      myFiles: [ 'dist/**/*.js' ],
      options: {
	    curly: true,
	    eqeqeq: true,
	    eqnull: true,
	    browser: true,
	    globals: {
	      jQuery: true
	    },
	  },
    },

    // zip
    compress: {
      target: {
        files: {
          'dist/<%= pkg.name %>.v<%= pkg.version %>.zip': [ 'dist/**' ]
        }
      }
    }

  });

  // plugins
  grunt.loadNpmTasks( 'grunt-contrib-clean' );
  grunt.loadNpmTasks( 'grunt-contrib-concat' );
  grunt.loadNpmTasks( 'grunt-contrib-jshint' );
  grunt.loadNpmTasks( 'grunt-contrib-compress' );

  // tasks
  grunt.registerTask( 'default', [ 'clean', 'concat', 'jshint:myFiles', 'compress' ] );

};