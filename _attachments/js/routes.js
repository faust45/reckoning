function routes(map) {
  window.onhashchange = onPathChange;
  var paths = [];

  $.each(map, function(k, v) {
    paths.push(new Path(k, v));
  });

  onPathChange();

  function onPathChange() {
    var path = window.location.hash.replace(/^#/, '')

    var route = paths.findFirst(function(el) {
      return el.match(path)
    });

    if (route) {
      route.open(path);
    }
  }
}

function Path(exp, fun) {
  var keys = [];

  analize();
  function analize() {
    keys = exp.match(/\:\w+/g);
    if (keys) {
      $.each(keys, function() {
        exp = exp.replace(this, '(.+)');
      });

      keys = $.map(keys, function(el) {
        return el.replace(':', '');
      });
    }

    exp = "^" + exp + "$";
  }
  
  function match(path) {
    return path.match(new RegExp(exp));
  }

  function open(path) {
    var params = {};
    var m = path.match(new RegExp(exp));

    if (keys) {
      $.each(keys, function(i) {
        params[this] = m[i+1]
      });
    }
    fun(params);
  }

  return {
    match: match,
    open: open
  }
}
