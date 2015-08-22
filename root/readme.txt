This is a project structure to help with learning ES6.

Sample files are included that demonstrate how Backbone can be written in ES6.

Dependencies:

Nodejs (https://nodejs.org/)
Grunt task runner  (npm install grunt-cli -g)
Bower package manager (npm install bower -g)
Http Server (npm install http-server -g)

Then run:

npm install && bower install

To compile the ES6 code, simply run the default command:

grunt

To compile the ES6 code and also run through the Requirejs optimiser, run:

grunt production

The project is built to the 'public' folder.  View it by running on a http server:

http-server ./

Then go to 'http://0.0.0.0:8080/public/' in a web browser
