(typeof nougat !== 'undefined'  ? nougat : require('nougat')).$(
  typeof global !== 'undefined' ? global : this,
  typeof module !== 'undefined' ? module : null,
  function(global, nougat) {
    "use strict";
    return { Inflector: global.Inflector || require('./lib/Inflector') };
  });
