(this.UiApp ? nougat : require('nougat')).$(
  'isFunc', this.UiApp ? {g: this} : {g: global, m: module},
  function(glace) {
    'use strict';
    
    var toString = Object.prototype.toString;
    
    function isFunc(obj) {
      return toString.call(obj) === '[object Function]';
    }
    
    return isFunc;
  });
