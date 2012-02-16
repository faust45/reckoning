function l() {
  console.log.apply(this, arguments);
}

function cond() {
  var match = arguments[0], cases = arguments[1];

  $.each(cases, function(k, fun) {
    if(match == k) {
      fun();
    }
  });
}

function prepareTimes(times) {
  return $.map(times, function(el) {
    el.match(/(\d+):(\d+):?(\d+)?/);
    var h = toInt(RegExp.$1), m = toInt(RegExp.$2), s = toInt(RegExp.$3);

    function toInt(v) {
      var value = parseInt(v, 10);

      if(value == NaN) {
        value = 0;
      }

      return value;
    }

    var totalMinutes = (h * 60 + m),
        totalSeconds = totalMinutes * 60 + parseInt(s);

    return totalSeconds;
  });
}

function readNotes(el) {
    var items = el.find('p');
    items = $.map(items, function(el) {
      return $(el).html();
    });

    return items;
}

String.prototype.re = function(values) {
  var str =  this;
  $.each(values, function(k, v) {
    str = str.replace(new RegExp("{{" + k + "}}", 'g'), v);
  });

  return str;
}

Array.prototype.findFirst = function(fun) {
  for(var i = 0; i < this.length; i=i+1) {
    if(fun(this[i])) {
      return this[i];
    }
  }
}
