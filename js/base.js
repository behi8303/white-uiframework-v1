
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
            $(this).prev('.textbox').addClass('alert');
        });
        $('.show-password').mouseup(function () {
            $(this).prev('.textbox').get(0).type = 'password';
            $(this).prev('.textbox').removeClass('alert');
        });
        $('.clear-textbox').click(function () {
            var textb = $(this).prev('.textbox');
            textb.addClass('error');
            textb.val('');
            setTimeout(function () {
                textb.removeClass('error');
            }, 120);
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
            if ($(this).hasClass('collapsed')) {
                $(this).removeClass('collapsed');
                $(this).parent('.table-header').next('.table').fadeIn(250).next('.table-more').fadeOut(1);
            }
            else {
                $(this).addClass('collapsed');
                var thisTable = $(this).parent('.table-header').next('.table');
                thisTable.fadeOut(250);
                setTimeout(function () { thisTable.next('.table-more').fadeIn(1); }, 250)
            }

        });

        $('.table-more').click(function () {
            $(this).hide().prev('.table').fadeIn(250).prev('.table-header').children('.extract').removeClass('collapsed');
        });

        $('.table-container > .topic > .extract').click(function () {
            if ($(this).hasClass('collapsed')) {
                $(this).removeClass('collapsed');
                $(this).parent('.topic').next('.head').fadeIn(250).next('.table-box').fadeIn(250).next('.more').next('.tail').fadeIn(250);
                $(this).parent('.topic').parent('.table-container').children('.more').fadeOut(1);
            }
            else {
                $(this).addClass('collapsed');
                $(this).parent('.topic').next('.head').fadeOut(250).next('.table-box').fadeOut(250).next('.more').next('.tail').fadeOut(250);
                var thisTable = $(this).parent('.topic').parent('.table-container');
                setTimeout(function () { thisTable.children('.more').fadeIn(1); }, 250)
            }
        });

        $('.table-container .more').click(function () {
            var thisTable = $(this).parent('.table-container');
            thisTable.children('.topic').children('.extract').removeClass('collapsed');
            thisTable.children('.head').fadeIn(250).next('.table-box').fadeIn(250).next('.more').next('.tail').fadeIn(250);
            $(this).fadeOut(1);
        });

    })

})($)