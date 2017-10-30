/*
 * Custom
 */

    $(document).ready(function() {
        $('.minus').click(function () {
            var $input = $(this).parent().find('input');
            var count = parseInt($input.val()) - 100;
            count = count < 100 ? 100 : count;
            $input.val(count);
            $input.change();
            return false;
        });
        $('.plus').click(function () {
            var $input = $(this).parent().find('input');
            $input.val(parseInt($input.val()) + 100);
            $input.change();
            return false;
        });

        $('.btn--order').click(function () {
            if ( $("#order").hasClass("show") ) {
            	$("#order").removeClass("show");
                $("#parthner").removeClass("hide");
            }else{
            	$("#order").addClass("show");
                $("#parthner").addClass("hide");
            }
        });
        $('.order__close').click(function () {
            if ( $("#order").hasClass("show") ) {
            	$("#order").removeClass("show");
                $("#parthner").removeClass("hide");
            }else{
            	$("#order").addClass("show");
                $("#parthner").addClass("hide");
            }
        });


    });