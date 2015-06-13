(typeof nougat !== 'undefined'  ? nougat : require('nougat')).$(
  typeof global !== 'undefined' ? global : this,
  typeof module !== 'undefined' ? module : null,
  function(global, nougat) {
    'use strict';
    
    var hasOwnProp = Object.prototype.hasOwnProperty;
    
    function hasProp(obj, key) {
      return hasOwnProp.call(obj, key);
    }
    
    return hasProp;
  });

