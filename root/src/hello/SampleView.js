import * as $ from 'jquery';  
import * as Backbone from 'backbone';  
import * as _ from 'underscore';  
import {on, template} from '../utils/bbdecorators';
import tpl from 'text!tpl/sampleView.html';

@template(tpl)
class SampleView extends Backbone.View {

  initialize() {
    console.log('SampleView:initialize');
  }

  @on('click')
  toggleCompleted() {
    console.log('clicked!');
  }

  render() {
    this.$el.html(this.template({}));
    return this;
  }

};

export default SampleView;