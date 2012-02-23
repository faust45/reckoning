
App = function(app) {
    var db = new initDB();
    db.get('_design/main', init);

    var exports = {
        logout: $.couch.logout
    };

    function init(ddoc) {
      exports.templates = ddoc.templates.admin;
      exports.db = db;

      app(exports);
    }
}

initDB = (function() {
    var exports = {
        collection: collection,
        get:  get,
        save: save
    };

    var db = $.couch.db();
    db.uri = "db/";

    function collection(name, key, fun) {
        var options = {
           key:          key,
           reduce:       false,
           include_docs: true,
           success: function(data) {
              fun(new Collection(data));
           }
        };

        db.view(name, options);
    };

    function get(id, fun) {
        db.openDoc(id, {success: fun});
    }

    function save(data, options) {
        db.saveDoc(data, options);
    }


    return exports;
});

Collection = function(coll) {
    var exports = {
        each: each,
        rows: docs()
    };

    function each(fun) {
      $.each(coll.rows, function(i){
          fun(this);
      });
    }

    function docs() {
        return $.map(coll.rows, function(item) {
            return item.doc;
        });
    }


    return exports;
}




