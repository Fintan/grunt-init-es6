requirejs.config({
  baseUrl: "./js",
  paths: {
    underscore: '../../bower_components/underscore/underscore',
    backbone: '../../bower_components/backbone/backbone',
    jquery: '../../bower_components/jquery/dist/jquery',
    text: '../../bower_components/requirejs-text/text'
  },
  map: {
    '*': {
      'tpl': '../../tpl'
    }
  },
  shim: {
    backbone: {deps: ['underscore', 'jquery'], exports: 'Backbone'}
  }
});