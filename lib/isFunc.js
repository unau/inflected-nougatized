(typeof nougat !== 'undefined'  ? nougat : require('nougat')).$(
  typeof global !== 'undefined' ? global : this,
  typeof module !== 'undefined' ? module : null,
  'isFunc', function(global, nougat) {
    'use strict';
    
    var toString = Object.prototype.toString;
    
    function isFunc(obj) {
      return toString.call(obj) === '[object Function]';
    }
    
    return isFunc;
  });

    
