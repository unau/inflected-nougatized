(this.UiApp ? nougat : require('nougat')).$(
  'icPart', this.UiApp ? {g: this} : {g: global, m: module},
  function(glace) {
    'use strict';
    
    function icPart(str) {
      return str.split('').map(function(c) { return '(?:' + [c.toUpperCase(), c.toLowerCase()].join('|') + ')'; }).join('')
    }
    
    return icPart;
  });
