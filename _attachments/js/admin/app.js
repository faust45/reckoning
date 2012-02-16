$(function() {
    routes({
        "logout": logout
    });

    function logout() {
      $.couch.logout({
        success: function() {
          window.location = "/admin";
        }
      });
    }

    $('#login-form').bind('ajax:complete', function(e, xhr, status) {
        if (status == 'success') {
            window.location.reload();
        } else {
            $('#notice').addClass('in');
        }
    });
});
