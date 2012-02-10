(function() {
  var __slice = Array.prototype.slice;
  (function() {
    return jQuery.fn["try"] = function() {
      var args, method;
      method = arguments[0], args = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
      try {
        return this[method].apply(this, args);
      } catch (e) {
        return this;
      }
    };
  })();
}).call(this);
