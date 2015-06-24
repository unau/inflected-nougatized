(this.UiApp ? nougat : require('nougat')).$(
  this.UiApp ? {g: this} : {g: global, m: module},
  function(glace) {
    'use strict';
    return { Inflector: glace.require('./lib/Inflector') };
  });
