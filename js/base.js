
(function ($) {

    $(function () {

        //All
        $('html').click(function (e) {
            if (e.target.className != 'dropdown') {
                $('.dropdown > ul').hide(100);
                event.stopPropagation();
            }
        });

        //Dropdowns
        $('.dropdown').click(function (e) {
            $('.dropdown > ul').hide(100);
            if ($(this).children('ul').css('display') == 'none') {
                $(this).children('ul').show(100);
            }
            event.stopPropagation();
        });

        //Textboxes
        $('.textbox').focus(function () {
            $(this).next('.join-right').addClass('active');
            $(this).prev('.join-left').addClass('active');
        });
        $('.textbox').blur(function () {
            $(this).next('.join-right').removeClass('active');
            $(this).prev('.join-left').removeClass('active');
        });
        $('.show-password').mousedown(function () {
            $(this).prev('.textbox').get(0).type = 'text';
        });
        $('.show-password').mouseup(function () {
            $(this).prev('.textbox').get(0).type = 'password';
        });
        $('.clear-textbox').click(function () {
            $(this).prev('.textbox').val('');
        });
        $('.textbox-head.text').each(function () {
            $(this).next('.textbox.has-head').css('padding-left', $(this).width() + 20 + 'px');
        });
        $('.textbox-tail.text').each(function () {
            $(this).prev('.textbox.has-tail').css('padding-right', $(this).width() + 20 + 'px');
        });
        $('.textarea-head.text').each(function () {
            $(this).next('.textarea.has-head').css('padding-left', $(this).width() + 15 + 'px');
        });

        //Messages
        $('.message > .close').click(function () {
            $(this).parent('.message').fadeOut(200);
        });

        //Tabs
        $('.tab').click(function () {
            $(this).parent('.tabs').children('.tab').removeClass('active');
            $(this).parent('.tabs').parent('.tabsbox').children('.bodies').children('.body').removeClass('active');
            $(this).addClass('active');


            if ($(this).hasClass('tab1')) {
                $(this).parent('.tabs').parent('.tabsbox').children('.bodies').children('.body1').addClass('active');
            }
            else if ($(this).hasClass('tab2')) {
                $(this).parent('.tabs').parent('.tabsbox').children('.bodies').children('.body2').addClass('active');
            }
            else if ($(this).hasClass('tab3')) {
                $(this).parent('.tabs').parent('.tabsbox').children('.bodies').children('.body3').addClass('active');
            }
            else if ($(this).hasClass('tab4')) {
                $(this).parent('.tabs').parent('.tabsbox').children('.bodies').children('.body4').addClass('active');
            }
            else if ($(this).hasClass('tab5')) {
                $(this).parent('.tabs').parent('.tabsbox').children('.bodies').children('.body5').addClass('active');
            }
            else if ($(this).hasClass('tab6')) {
                $(this).parent('.tabs').parent('.tabsbox').children('.bodies').children('.body6').addClass('active');
            }
            else if ($(this).hasClass('tab7')) {
                $(this).parent('.tabs').parent('.tabsbox').children('.bodies').children('.body7').addClass('active');
            }
            else if ($(this).hasClass('tab8')) {
                $(this).parent('.tabs').parent('.tabsbox').children('.bodies').children('.body8').addClass('active');
            }
            else if ($(this).hasClass('tab9')) {
                $(this).parent('.tabs').parent('.tabsbox').children('.bodies').children('.body9').addClass('active');
            }
            else if ($(this).hasClass('tab10')) {
                $(this).parent('.tabs').parent('.tabsbox').children('.bodies').children('.body10').addClass('active');
            }
        });

        //Tables
        $('.table-header .extract').click(function () {
            //$(this).parent('.table-header').next('.table').hide(100);
            $(this).removeClass('extract').addClass('collapse');
        });
        $('.table-header .collapse').click(function () {
            //$(this).parent('.table-header').next('.table').show(100);
            $(this).removeClass('collapse').addClass('extract');
        });

    })

})($)