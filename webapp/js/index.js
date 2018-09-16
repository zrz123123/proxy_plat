// sidebar toggle
$(function() {
        function responsiveView() {
            var wSize = $(window).width();
            if (wSize <= 768) {
                $('#container').addClass('sidebar-close');
                $('#sidebar > ul').hide();
            }

            if (wSize > 768) {
                $('#container').removeClass('sidebar-close');
                $('#sidebar > ul').show();
            }
        }
        $(window).on('load', responsiveView);
        $(window).on('resize', responsiveView);
   });
   
 $('#sidebar-toggle-fa').click(function () {
        if ($('#sidebar-collapse >ul').is(":visible") === true) {
			$('#main-content').css({
                'margin-left': '130px'
            });
            //$('#sidebar-collapse').css({
              //  'margin-left': '-246.83px'
            //});
            $('#sidebar-collapse').hide();
			//$("#container").attr('margin-left','50px');
        } else {
            $('#main-content').css({
                'margin-left': '263.83px'
            });
            $('#sidebar-collapse').show();
            $('#sidebar-collapse').css({
                'margin-left': '0'
            });
        }
    });