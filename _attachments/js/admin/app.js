
$(function() {
    new App(myApp);
});


function myApp(app) {
    routes({
        "logout": logout,
        "type/:type": by_type,
        "edit/:id": edit 
    });

    var templates = app.templates;

    initFroms(app.db)

        function edit(params) {
            app.db.get(params.id, renderEditForm);

            function renderEditForm(doc) {
                var page = Mustache.render(templates.forms.article, doc);
                $('#edit-form-block').html(page);
                    var Dom = YAHOO.util.Dom,
                        Event = YAHOO.util.Event;
                    var myConfig = {
                        height: '300px',
                        width: '600px',
                        dompath: true,
                        focusAtStart: true
                    };
                    YAHOO.log('Create the Editor..', 'info', 'example');
                    var myEditor = new YAHOO.widget.Editor('content-editor', myConfig);
                    myEditor._defaultToolbar.buttonType = 'basic';
                    myEditor.render();
            }
        }

    function by_type(params) {
        app.db.collection('by_type', params.type, renderList);

        function renderList(collection) {
            var page = Mustache.render(templates.list, collection);
            $('#list-block').html(page);
        }
    }

    $('#edit-form-block').bind('ajaxSend', function() {
        $(this).find('.load-ico').addClass('in');
    });

    $('#edit-form-block').bind('ajax:success', function(e, data) {
        edit(data);
    });

    function logout() {
        $.couch.logout({
            success: function() {
                window.location = "/admin";
            }
        });
    }
};
