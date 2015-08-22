module.exports = function(grunt) {
 require("load-grunt-tasks")(grunt);

 grunt.initConfig({
	  "babel": {
			options: {
				stage: 1,
				// optional: 'es7.decorators',
				// sourceMap: true,
				modules: 'amd'
			},
	    dist: {
				files: [
          { expand: true, cwd: 'src/', src: ['**/*.js'], dest: 'public/js', ext: '.js'}
	      ]
			}
     },
     clean: ['./public/*'],
     copy: {
      production: {
        files: [
          { expand: true, dot: true, cwd: './resources', dest: './public', src: ['index.html']},
          { expand: true, dot: true, cwd: './resources', dest: './public/js', src: ['index.js']},
          { expand: true, ext: '.html', cwd: './resources/tpl', dest: "public/tpl", src: ['**/*.html']},
          { expand: true, dot: true, cwd: './', dest: './public/js', src: ['requireConfig.js']}
        ]
      }
    },
    requirejs: {
      compile: {
		    options: {
		      baseUrl: "./public/js",
		      mainConfigFile: "./public/js/requireConfig.js",
		      name: "index",
		      out: "./public/js/index.js"
		    }
		  }
    }
 });

 grunt.registerTask("default", ['clean', 'copy', 'babel:dist']);
 grunt.registerTask("production", ['clean', 'copy', 'babel:dist', 'requirejs:compile']);
													 
};
