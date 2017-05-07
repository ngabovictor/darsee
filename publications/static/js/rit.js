/**
 * Created by chinhbeo on 5/11/15.
 */

var window_height = (jQuery(window).height()),
    window_width = (jQuery(window).width()),
    header_height = (jQuery('.site-header').width());

jQuery(document).ready(function(){

    //-----------------------------------------//
    /* Payment fix bug */
    jQuery('.donate-form-primary .charitable-gateway-fields').hide();
    jQuery('.donate-form-primary .charitable-radio-list input').on('click',function(){
        var target=jQuery(this).attr('value');
        var item=jQuery(this).parents('.donate-form-primary').find('.charitable-gateway-fields[data-gateway='+target+']');
        if(!item.is(":visible")){
            jQuery('.donate-form-primary .charitable-gateway-fields').slideUp();
            item.slideDown();
        }    
    });
    
     // form donate label to placehoder ////
    jQuery(".charitable-form-field label").each(function() {
    var label = jQuery(this);
    var placeholder = label.text();
    label.closest(".charitable-form-field").find("input").attr("placeholder", placeholder).val("").focus().blur();
     jQuery(label).remove();
    });

    //---Login form donate-----------------------//
    jQuery('.charitable-login-form').hide();
    jQuery('.donate-form-primary .login-prompt a').on('click',function(){
        var login = jQuery(this).parents('.donate-form-primary').find('.charitable-login-form');
        jQuery('.donate-form-primary .charitable-login-form').slideToggle();   
    });

    // ---------------------------------------- //
    // SLIDER OWL ----------------------------- //
    // ---------------------------------------- //
    jQuery('.rit-owl-carousel').each(function(){
        var number = jQuery(this).data('number'),
            pager = jQuery(this).data('pager'),
            nav = jQuery(this).data('nav'),
            smalldes = jQuery(this).data('smalldes'),
            tablet = jQuery(this).data('tablet'),
            mobile = jQuery(this).data('mobile'),
            transition = jQuery(this).data('transition');

        jQuery(this).owlCarousel({
            items: number,
            navigation: nav,
            navigationText: ["<i class='fa-long-arrow-left fa'></i>","<i class='fa fa-long-arrow-right'></i>"],
            autoPlay: false,
            pagination: pager,
            loop: true,
            singleItem: false,
            itemsDesktop: [1199,number],
            itemsDesktopSmall: [980,smalldes],
            itemsTablet: [768,tablet],
            itemsMobile: [479,mobile]
        });
    });

    // ---------------------------------------- //
    // SLIDER BX ------------------------------ //
    // ---------------------------------------- //
    jQuery('.bxslider').each(function(){
        jQuery(this).bxSlider({
            pager : false,
            nextText: '<i class="fa fa-angle-right"></i>',
            prevText: '<i class="fa fa-angle-left"></i>'
        });
    });


    // ---------------------------------------- //
    // SCROLLER TOP --------------------------- //
    // ---------------------------------------- //
    jQuery('.arrow-down a').click(function(){
        var element = jQuery(this).attr('href');
        jQuery('html, body').animate({
            scrollTop: jQuery(element).offset().top
        }, 1000);
        return false;
    });

    // ---------------------------------------- //
    // SEARCH --------------------------------- //
    // ---------------------------------------- //
    var wapSearch = jQuery('body').find('#page');
    jQuery('.rit-button-search').click(function(e){
        e.preventDefault();
        jQuery(wapSearch).addClass('open-search');
    });
    jQuery('.search-wrap .icon-close').click(function(){
        jQuery(wapSearch).removeClass('open-search');
    });

    // ---------------------------------------- //
    // BACK TO TOP --------------------------- //
    // ---------------------------------------- //
    jQuery(window).scroll(function () {
        if (jQuery(this).scrollTop() > 400) {
            jQuery('#back-to-top').fadeIn();
        } else {
            jQuery('#back-to-top').fadeOut();
        }
    });
    jQuery('#back-to-top').click(function(e){
        e.preventDefault();
        jQuery('html, body').animate({
            scrollTop: 0
        }, 1000);
        return false;
    });

    // ---------------------------------------- //
    // CANVAS MENU ---------------------------- //
    // ---------------------------------------- //
    jQuery('#main-navigation-mobile').slicknav({
        prependTo:'.menu-mobile',
        label:'',
        closedSymbol: "<i class='fa fa-angle-down'></i>",
        openedSymbol: "<i class='fa fa-angle-up'></i>"
    });

    //// ---------------------------------------- //
    //// ACCORDION MENU ------------------------- //
    //// ---------------------------------------- //
    //var iconAcc = '<span class="menu-arrow fa fa-plus"></span>',
    //    subMenu = jQuery('#main-navigation').find('.sub-menu');
    //
    //// Append Arrow Menu
    //jQuery(subMenu).closest('.menu-item').append(iconAcc);
    //
    //// Toggle Menu
    //jQuery('#main-navigation .menu-arrow').click(function(){
    //    jQuery(this).closest('ul').find('.sub-menu').slideUp();
    //    jQuery(this).prev().slideDown();
    //    jQuery('#main-navigation .menu-arrow').removeClass('fa-minus').addClass('fa-plus');
    //    if((jQuery(this).prev()).is(":visible")){
    //        jQuery(this).removeClass('fa-plus').addClass('fa-minus');
    //    } else {
    //        jQuery(this).removeClass('fa-minus').addClass('fa-plus');
    //    }
    //});

    // ---------------------------------------- //
    // BOX TOGGLE ----------------------------- //
    // ---------------------------------------- //
    jQuery('.box-toggle').each(function(){
        // variable
        var linkToggle = jQuery(this).find('.link-toggle'),
            contentToggle = jQuery(this).find('.content-toggle');

        // click function
        linkToggle.click(function(e){
            e.preventDefault();
            if(contentToggle.is(':visible')){
                contentToggle.slideUp();
            } else {
                contentToggle.slideDown();
            }
        });
    });

    // ---------------------------------------- //
    // Progress Bar --------------------------- //
    // ---------------------------------------- //
    jQuery().waypoint && jQuery(".rit-progress").waypoint(function () {
        jQuery(this).css("visibility", "visible");
        jQuery(".rit-progress").each(function () {
            var e = jQuery(this).find(".progress-bar").data("percent");
            jQuery(this).find(".progress-bar").css("width", "0%");
            jQuery(this).find(".progress-bar").css("width", e + "%");
        })
    }, {triggerOnce: !0, offset: "bottom-in-view"});

    // ---------------------------------------- //
    // Icon Menu ------------------------------ //
    // ---------------------------------------- //
    jQuery('.menu-toggle').click(function(){
        var header = jQuery(this).closest('.site-header');
        header.toggleClass('open-menu');
    });

    // ---------------------------------------- //
    // Sticky Menu ---------------------------- //
    // ---------------------------------------- //
    jQuery("#sticker").sticky({topSpacing:0});
    var sticky_wrapper = jQuery('body').find('.sticky-wrapper');
    if(sticky_wrapper.length > 0){
        jQuery(window).scroll(function () {
            if(sticky_wrapper.hasClass('is-sticky')){
                jQuery('body').addClass('adminbar-hidden');
            } else {
                jQuery('body').removeClass('adminbar-hidden');
            }
        });
    }
    jQuery('[data-toggle="tooltip"]').tooltip()

    // ---------------------------------------- //
    // RIT TAB -------------------------------- //
    // ---------------------------------------- //
    jQuery('.rit-element-tabs').each(function(){
        var title = jQuery(this).find('.tab-title-item').find('a'),
            content = jQuery(this).find('.rit-tab-content-item');
        jQuery(title).click(function(e){
            e.preventDefault();
            jQuery(title).removeClass('active');
            jQuery(this).addClass('active');
            jQuery(content).removeClass('active');
            jQuery(this).closest('.rit-element-tabs').find('#' + jQuery(this).data('content')).addClass('active');
        });
    });

    // ---------------------------------------- //
    // PRODUCT CATEGORY MENU ------------------ //
    // ---------------------------------------- //
    var iconAcc = '<span class="category-carret icon_plus"></span>',
        subMenu = jQuery('.product-categories').find('.children');

    // Append Arrow Menu
    jQuery(subMenu).prev().append(iconAcc);

    // Toggle Menu
    jQuery('.product-categories .category-carret').click(function(e){
        e.preventDefault();
        jQuery(this).closest('ul').find('.children').slideUp();
        jQuery(this).parent().next().slideDown();
        jQuery(this).closest('ul').find('.category-carret').removeClass('icon_minus-06').addClass('icon_plus');
        if((jQuery(this).parent().next()).is(":visible")){
            jQuery(this).removeClass('icon_plus').addClass('icon_minus-06');
        } else {
            jQuery(this).removeClass('icon_minus-06').addClass('icon_plus');
        }
    });

    // ---------------------------------------- //
    // QUICK VIEW ----------------------------- //
    // ---------------------------------------- //
    jQuery("#rit-quickview-button").click(function(){
        var label_html = jQuery("#yith-quick-view-content").find('.product-label').html();
        alert(label_html);
        jQuery("#yith-quick-view-content").find('.images').append(label_html);
        jQuery(label_html).remove();
    });

    // ---------------------------------------- //
    // QUICK VIEW ----------------------------- //
    // ---------------------------------------- //
    function resize_slider_scroller(){
        var boxed_image = jQuery('.slider-boxed-scroller').find('.boxed-image');
        jQuery('.slider-boxed-scroller .boxed-content, .slider-boxed-scroller .boxed-image').css('height', window_height);
        jQuery(boxed_image).each(function(){
            jQuery(this).css('background-color', jQuery(this).data('bg'));
        })
    }
    resize_slider_scroller();
    jQuery(window).resize(function(){
        resize_slider_scroller();
    });

    // ---------------------------------------- //
    // SLIDER BOXED PADDING ------------------- //
    // ---------------------------------------- //
    function resize_slider_padding(){
        var header_height = jQuery('#masthead').height(),
            footer_height = jQuery('#colophon').height();
        boxed_image = jQuery('.slider-boxed-padding').find('.boxed-image img');
        jQuery(boxed_image).css('height', window_height - header_height - footer_height);
    }
    resize_slider_padding();
    jQuery(window).resize(function(){
        resize_slider_padding();
    });

    // ---------------------------------------- //
    // CONTENT BOX ALIGNMENT ------------------ //
    // ---------------------------------------- //
    function rit_charitable_content_padding(){
        var rit_charitable_content_height = jQuery('.al-vertical').height(),
            rit_charitable_content_width = jQuery('.al-horizontal').width(),
            rit_charitable_content_wrap_height = jQuery('.al-horizontal').closest('.vc_row-no-padding').height(),
            rit_charitable_content_left = ((window_width - 1170) / 2) + 15,
            rit_charitable_content_top = (rit_charitable_content_wrap_height - rit_charitable_content_height) / 2;
            jQuery('.al-vertical').css('top', rit_charitable_content_top);
            if(jQuery('.al-horizontal').hasClass('position-right')){
                jQuery('.al-horizontal').css({"right": rit_charitable_content_left});
            } else {
                jQuery('.al-horizontal').css({"left": rit_charitable_content_left});
            }

    }
    rit_charitable_content_padding();
    jQuery(window).resize(function(){
        rit_charitable_content_padding();
    });

    // ---------------------------------------- //
    // TOGGLE FOOTER -------------------------- //
    // ---------------------------------------- //
    var arrow_toggle = jQuery("body").find('#toggle_arrow_footer'),
        footer_select = jQuery("body").find('.footer-6');
    jQuery(arrow_toggle).click(function(){
        if(jQuery(footer_select).hasClass('open-footer')){
            jQuery(footer_select).removeClass('open-footer');
            jQuery(this).removeClass('open-footer').find('i').addClass('arrow_up').removeClass('arrow_down');
        } else {
            jQuery(footer_select).addClass('open-footer');
            jQuery(this).addClass('open-footer').find('i').removeClass('arrow_up').addClass('arrow_down');
        }
    });

    // ---------------------------------------- //
    // FOOTER RESPONSIVE ---------------------- //
    // ---------------------------------------- //
    var $footer_width = jQuery("#colophon").width();
    if($footer_width < 767){
        function footerAccordion(){
            var footertitle = jQuery("#colophon, .widget-area, .widget").find('.widget-title'),
                footercontent = jQuery(".site-footer .widget > div, .widget-area .widget > *:not(.widget-title), .widget > *:not(.widget-title)");

            jQuery(footertitle).click(function () {
                jQuery(footercontent).slideUp();
                jQuery(footertitle).removeClass('open');
                jQuery(this).closest('.widget').find('*:not(.widget-title)').slideDown();
                jQuery(this).addClass('open');
            });
        }
        footerAccordion();
    }

    // ---------------------------------------- //
    // ONE PAGE ------------------------------- //
    // ---------------------------------------- //
    if(jQuery('body').hasClass('one-page')){
        var onePageItem = jQuery("body").find('.entry-content > .vc_row'),
            onePager = jQuery("body").find('.rit-one-page .one-pager');
        jQuery(onePageItem).each(function(){
            var id = jQuery(this).attr('id'),
                title = id.replace('parallax', '');
            jQuery(onePager).append('<li><a href="#' + id + '"><span class="text">'+ title +'</span><span class="icon"></span></a></li>');
        });

        jQuery('.one-pager a').click(function(){
            var element = jQuery(this).attr('href');
            jQuery('html, body').animate({
                scrollTop: jQuery(element).offset().top
            }, 1000);
            return false;
        });
    }

    // ---------------------------------------- //
    // PARALLAX ------------------------------- //
    // ---------------------------------------- //
    if(jQuery('body').find('.rit-element-builder').hasClass('parralax-size-large')){
        function resizeParallax(){
            var parallaxItem = jQuery('.parralax-size-large').find('.rit-parallax-wrap');
            jQuery(parallaxItem).css('min-height', window_height);
        }
        resizeParallax();
        jQuery(window).resize(function(){
            resizeParallax();
        });
    }

    // ---------------------------------------- //
    // MEGA MENU ------------------------------ //
    // ---------------------------------------- //
    var megaItems = jQuery('#mega-menu-primary > li');
    if(jQuery(megaItems).hasClass('mega-menu-megamenu')){
        jQuery(megaItems).closest('.mega-menu-wrap').addClass('has-megamenu');
    }

    // ---------------------------------------- //
    // MULTI SCROLLER ------------------------- //
    // ---------------------------------------- //
    var myContainer = jQuery('body').find('#myContainer');
    if(jQuery(myContainer).hasClass('slider-boxed-scroller')){
        jQuery('#myContainer').multiscroll({
            sectionsColor: ['#FEFF99', '#F49AC0', '#BDE471', '#468CFE'],
            anchors: ['first', 'second', 'third', 'four'],
            menu: '#menu',
            navigation: true,
            loopBottom: true,
            loopTop: true
        });
    }

    // ---------------------------------------- //
    // Pie Chart ------------------------------ //
    // ---------------------------------------- //
    jQuery('.chart').each(function(){
        var chartbarColor       = jQuery(this).data('barcolor'),
            charttrackColor     = jQuery(this).data('trackcolor'),
            chartscaleLength    = jQuery(this).data('scalelength'),
            chartpercent        = jQuery(this).data('percent'),
            chartlineCap        = jQuery(this).data('linecap'),
            chartlineWidth      = jQuery(this).data('linewidth'),
            chartsize           = jQuery(this).data('size'),
            chartduration       = jQuery(this).data('duration')

        jQuery(this).easyPieChart({
            barColor: chartbarColor,
            trackColor: charttrackColor,
            scaleLength: chartscaleLength,
            percent: chartpercent,
            lineCap: chartlineCap,
            lineWidth: chartlineWidth,
            size: chartsize,
            animate: {duration: 1e3, enabled: true}
        });
    });

    // ---------------------------------------- //
    // COUNTER ===----------------------------- //
    jQuery('.rit-counter').each(function(){
       jQuery(this).counterUp({
           delay: 20,
           time: 2000
       });
    });

    // ---------------------------------------- //
    // PROGRESS ===----------------------------- //
    jQuery('.course-percent-progress').each(function(){
        jQuery().waypoint && jQuery(this).waypoint(function () {
            jQuery(this).animate({
                width: jQuery(this).data('percent') + "%",
            }, 500 );
        }, {triggerOnce: !0, offset: "bottom-in-view"});
    });
    // ---------------------------------------- //
    // ---------------------------------------- //
    // SOCIAL TOP ----------------------------- //
    // ---------------------------------------- //
    var social_width = jQuery('.header-action-2 .rit-social ul.social-share').width();
    jQuery('.header-action-2 .rit-social ul.social-share').css('margin-right', -1*(social_width - 70));
});

jQuery(window).load(function() {
    // Animate loader off screen
    jQuery(".se-pre-con").fadeOut("slow");

    // Select Box
    jQuery('.woocommerce-ordering .orderby').selectbox();

    // ---------------------------------------- //
    // CONTENT BOX ALIGNMENT ------------------ //
    // ---------------------------------------- //
    function rit_charitable_content_padding(){
        var bodyWidth = jQuery('body').width();
            rit_charitable_content_height = jQuery('.al-vertical').height(),
            rit_charitable_content_width = jQuery('.al-horizontal').width(),
            rit_charitable_content_wrap_height = jQuery('.al-horizontal').closest('.vc_row-no-padding').height(),
            rit_charitable_content_left = ((bodyWidth - 1170) / 2) + 15,
            rit_charitable_content_top = (rit_charitable_content_wrap_height - rit_charitable_content_height) / 2;
        jQuery('.al-vertical').css('top', rit_charitable_content_top);
        if(jQuery('.al-horizontal').hasClass('position-right')){
            jQuery('.al-horizontal').css({"right": rit_charitable_content_left});
        } else {
            jQuery('.al-horizontal').css({"left": rit_charitable_content_left});
        }

    }
    rit_charitable_content_padding();
    jQuery(window).resize(function(){
        rit_charitable_content_padding();
    });

    // Product
    var arrow = jQuery('body').find('.tp-leftarrow');


});