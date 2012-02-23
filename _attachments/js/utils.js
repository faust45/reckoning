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
