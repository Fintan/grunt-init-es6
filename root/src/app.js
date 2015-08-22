import * as foo from "./hello/foo";
import SampleView from "./hello/SampleView";
import * as $ from 'jquery'; 

console.log(foo.bar());
$(function() {
  $('body').append(new SampleView().render().el);
});
