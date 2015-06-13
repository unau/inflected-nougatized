(typeof nougat !== 'undefined'  ? nougat : require('nougat')).$(
  typeof global !== 'undefined' ? global : this,
  typeof module !== 'undefined' ? module : null,
  function(global, nougat) {
    'use strict';
    
    var Inflections     = global.Inflections || require('./Inflections');
    var Transliterator  = global.Transliterator || require('./Transliterator');
    var Methods         = global.Methods || require('./Methods');
    var defaults        = global.defaults || require('./defaults');
    var isFunc          = global.isFunc || require('./isFunc');
    
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
