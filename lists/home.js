function(head, req) {
  var ddoc = this;
  var dataToRender = {};
  var Mustache = require("lib/mustache");
  var partials = {};
  var headers = { 
    "Content-Type": "text/html; charset=UTF-8;" 
  };

  start({"headers": headers});

  dataToRender.data = [];
  while (row = getRow()) {
    dataToRender.data.push(row.value);
  }

  partials.content = "";
  if (req.query.view) {
    partials.content = ddoc.templates["_"+req.query.view];
    if (ddoc.helpers[req.query.view]) {
      var helpers = require("helpers/"+req.query.view);
      for (var attr in helpers) { dataToRender[attr] = helpers[attr]; }
    }
  }

  var page = Mustache.to_html(ddoc.templates.layout, dataToRender, partials);
    
  send(page);
}
