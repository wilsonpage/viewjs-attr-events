umd(function(define) {
define(function(require, exports, module) {
'use strict';

/**
 * Locals
 */

var each = [].forEach;

/**
 * Events supported.
 */

var events = [
  'change',
  'click',
  'dblclick',
  'mousedown',
  'mouseup',
  'blur',
  'focus',
  'input',
  'submit',
  'keydown',
  'keypress',
  'keyup'
];

function bind(el, name, fn) {
  el.addEventListener(name, fn, false);
}

function query(el, q) {
  return el.querySelectorAll(q);
}

module.exports = function(view) {
  view.onRender = methods.onRender;
  view.on('render', view.onRender);
};

var methods = {
  onRender: function() {
    var self = this;
    events.forEach(function(name) {
      var attr = 'on-' + name;
      var els = query(self.el, '[' + attr + ']');
      each.call(els, function(el) {
        var method = el.getAttribute(attr);
        var fn = self[method];
        if (fn) bind(el, name, fn);
      });
    });
  }
};

});},'viewjs-attr-events');function umd(fn,n){
if(typeof define=='function')return fn(define);
if(typeof module=='object')return fn(function(c){c(require,exports,module);});
var m={exports:{}},r=function(n){return window[n];};fn(function(c){window[n]=c(r,m.exports,m)||m.exports;});}