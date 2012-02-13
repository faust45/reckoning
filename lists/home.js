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

    if (article._id == req.query.id) {
      article.isCurrent = true; 
      dataToRender.current = article;
    }
  }


  if (!dataToRender.current) {
    var article = dataToRender.articles[0];
    article.isCurrent = true; 
    dataToRender.current = article;
  }

  var page = Mustache.to_html(ddoc.templates.home, dataToRender, {});
    
  send(page);
}
