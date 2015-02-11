var scripts;

scripts = {};

window.requireOnce = function(path, cb) {
  if (typeof scripts[path] === 'undefined') {
    scripts[path] = [];
    if (cb != null) {
      scripts[path].push(cb);
    }
    return $.getScript(path, function() {
      var _i, _len, _ref;

      _ref = scripts[path];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        cb = _ref[_i];
        cb();
      }
      return scripts[path] = true;
    });
  } else if (scripts[path] === true) {
    return typeof cb === "function" ? cb() : void 0;
  } else {
    if (cb != null) {
      return scripts[path].push(cb);
    }
  }
};
