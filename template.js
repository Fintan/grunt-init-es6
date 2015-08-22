/*
 * grunt-init-haxe
 *
 * Copyright (c) 2013 Fintan Boyle
 * Licensed under the MIT license.
 */

'use strict';

// Basic template description.
exports.description = 'Create a Javascript ES6 project.';

// Template-specific notes to be displayed before question prompts.
exports.notes = 'A sample setup intended for learning ES6 using familiar libraries/tools';

// Template-specific notes to be displayed after question prompts.
exports.after = 'You should now install project dependencies with _npm ' +
  'install_. After that, you may execute project tasks with _grunt_. For ' +
  'more information about installing and configuring Grunt, please see ' +
  'the Getting Started guide:' +
  '\n\n' +
  'http://gruntjs.com/getting-started';

// Any existing file or directory matching this wildcard will cause a warning.
exports.warnOn = '*';

// The actual init template.
exports.template = function(grunt, init, done) {

  init.process({type: 'haxe'}, [
      
    // Prompt for these values.
      init.prompt('name', 'Choose a project name'),
      init.prompt('title', 'A Javascript ES6 Project.'),
      init.prompt('version'),
      init.prompt('repository'),
      init.prompt('homepage'),
      init.prompt('bugs'),
      init.prompt('licenses'),
      init.prompt('author_name'),
      init.prompt('author_email'),
      init.prompt('author_url')
    
    ], function(err, props) {
      props.keywords = ['haxe'];
    
      props.devDependencies = {
        "grunt": "^0.4.5",
        "grunt-babel": "^5.0.1",
        "grunt-contrib-copy": "^0.8.0",
        "grunt-contrib-clean": "^0.6.0",
        "grunt-contrib-requirejs": "^0.4.4",
        "load-grunt-tasks": "^3.2.0"
      };

      // Files to copy (and process).
      var files = init.filesToCopy(props);

      // Add properly-named license files.
      init.addLicenseFiles(files, props.licenses);

      // Actually copy (and process) files.
      init.copyAndProcess(files, props);

      // Generate package.json file.
      init.writePackageJSON('package.json', props);

      // All done!
      done();

    });

};
