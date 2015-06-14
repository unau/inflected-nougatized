(typeof nougat !== 'undefined'  ? nougat : require('nougat')).$(
  typeof global !== 'undefined' ? global : this,
  typeof module !== 'undefined' ? module : null,
  'icPart', function(global, nougat) {
    'use strict';
    
    function icPart(str) {
      return str.split('').map(function(c) { return '(?:' + [c.toUpperCase(), c.toLowerCase()].join('|') + ')'; }).join('')
    }
    
    return icPart;
  });

