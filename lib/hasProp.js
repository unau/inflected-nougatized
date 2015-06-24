(this.UiApp ? nougat : require('nougat')).$(
  'hasProp', this.UiApp ? {g: this} : {g: global, m: module},
  function(glace) {
    'use strict';
    
    var hasOwnProp = Object.prototype.hasOwnProperty;
    
    function hasProp(obj, key) {
      return hasOwnProp.call(obj, key);
    }
    
    return hasProp;
  });
