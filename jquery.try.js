(function() {
  var __slice = Array.prototype.slice;
  (function() {
    jQuery.fn["try"] = function() {
      var args, method;
      method = arguments[0], args = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
      try {
        return this[method].apply(this, args);
      } catch (e) {
        return this;
      }
    };
    jQuery.fn.tryCatch = function() {
      var args, method, obj_exception, _i;
      method = arguments[0], args = 3 <= arguments.length ? __slice.call(arguments, 1, _i = arguments.length - 1) : (_i = 1, []), obj_exception = arguments[_i++];
      try {
        return this[method].apply(this, args);
      } catch (e) {
        return obj_exception;
      }
    };
    return jQuery.fn.tryTap = function(fn) {
      try {
        return fn.apply(this);
      } catch (e) {
        return this;
      }
    };
  })();
}).call(this);
