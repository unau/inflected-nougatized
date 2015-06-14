(typeof nougat !== 'undefined'  ? nougat : require('nougat')).$(
  typeof global !== 'undefined' ? global : this,
  typeof module !== 'undefined' ? module : null,
  'remove', function(global, nougat) {
    'use strict';
    
    var splice = Array.prototype.splice;
    
    function remove(arr, elem) {
      for (var i = arr.length - 1; i >= 0; i--) {
	if (arr[i] === elem) {
	  splice.call(arr, i, 1);
	}
      }
    }
    
    return remove;
  });

