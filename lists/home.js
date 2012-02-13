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
    var article = row.value;
    dataToRender.articles.push(article);
    article.shortBody = article.body.substring(0, 450) + "...";
  }


  var page = Mustache.to_html(ddoc.templates.layout, dataToRender, {content: ddoc.templates.articles});
    
  send(page);
}
