function(doc, req) {
    var ddoc = this;
    var Mustache = require("lib/mustache");

    var page = Mustache.to_html(ddoc.templates.layout, doc, {content: ddoc.templates.show});

    return {
        body: page,
        headers: {
            "Content-Type": "text/html; charset=UTF-8;" 
        }
    }
}
