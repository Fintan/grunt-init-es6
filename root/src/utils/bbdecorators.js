import _ from 'underscore';  

/*
 * http://benmccormick.org/2015/07/06/backbone-and-es6-classes-revisited/
 */
export function tagName(value) {  
    return function decorator(target) {
        target.prototype.tagName = value;
    }
}

export function template(value) {  
    return function decorator(target) {
        target.prototype.template = _.template(value);
    }
}

export function on(eventName){  
  return function(target, name, descriptor){
    if(!target.events) {
        target.events = {};
    }
    if(_.isFunction(target.events)) {
        throw new Error('The on decorator is not compatible with an events method');
        return;
    }
    if(!eventName) {
        throw new Error('The on decorator requires an eventName argument');
    }
    target.events[eventName] = name;
    return descriptor;
  }
}