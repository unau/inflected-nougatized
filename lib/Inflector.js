(this.UiApp ? nougat : require('nougat')).$(
  'Inflector', this.UiApp ? {g: this} : {g: global, m: module},
  function(glace) {
    'use strict';
    
    var Inflections     = glace.require('./Inflections');
    var Transliterator  = glace.require('./Transliterator');
    var Methods         = glace.require('./Methods');
    var defaults        = glace.require('./defaults');
    var isFunc          = glace.require('./isFunc');
    
    var Inflector = Methods;
    
    Inflector.inflections = function(locale, fn) {
      if (isFunc(locale)) {
	fn = locale;
	locale = null;
      }
      
      locale = locale || 'en';
      
      if (fn) {
	fn(Inflections.getInstance(locale));
      } else {
	return Inflections.getInstance(locale);
      }
    };
    
    Inflector.transliterations = function(locale, fn) {
      if (isFunc(locale)) {
	fn = locale;
	locale = null;
      }
      
      locale = locale || 'en';
      
      if (fn) {
	fn(Transliterator.getInstance(locale));
      } else {
	return Transliterator.getInstance(locale);
      }
    }
    
    for (var locale in defaults) {
      Inflector.inflections(locale, defaults[locale]);
    }
    
    return Inflector;
  });
