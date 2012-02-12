function(head, req) {
  var ddoc = this;
  var dataToRender = {};
  var Mustache = require("lib/mustache");
  var headers = { 
    "Content-Type": "text/html; charset=UTF-8;" 
  };

  start({"headers": headers});

  dataToRender.articles = [];
  while (row = getRow()) {
    dataToRender.articles.push(row.value);
  }

  var page = Mustache.to_html(ddoc.templates.home, dataToRender, {});
    
  send(page);
}
