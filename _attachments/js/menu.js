l = console.log;

$(function() {
    $('#menu ul li').each(function() {
        var li = $(this),
            a  = li.find('a');

        if(a.attr('href') == window.location.pathname) {
          li.addClass('current');
        }
    });
});
