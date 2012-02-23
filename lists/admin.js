function(head, req) {
  var ddoc = this,
      Mustache = require("lib/mustache"),
      v = require("lib/validate").init(req.userCtx);

  var headers = {
    "Content-Type": "text/html; charset=UTF-8;"
  };
  var partials = {}, data = {}, layout;

  start({"headers": headers});


  if (v.isAdmin()) {
      layout = ddoc.templates.admin.layout;
      partials = ddoc.templates.admin; 
      data.types = [];
      while (row = getRow()) {
          data.types.push(row);
      }
  } else {
    layout = ddoc.templates.admin.login_form;
  }

  

  var page = Mustache.to_html(layout, data, partials);

  send(page);
}
