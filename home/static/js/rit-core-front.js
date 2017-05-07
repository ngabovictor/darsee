
(function ($) {
    "use strict";
    // donate form
    $(document).ready(function(){

    $('.rit-donate-button').each(function(){
        $(this).click(function(e){
            e.preventDefault();
            var popupId = $(this).data('id');
            $(this).closest('.article-meta').find('#donate-popup-' + popupId).css('display', 'block');
        });
    });

    $('.donate-popup .icon-close, .donate-overlay').click(function(e){
        e.preventDefault();
        $(this).closest('.donate-popup').css('display', 'none')
    });

    $('.rit-paypal-form').each(function(){

        $(this).find('.rit-amount-button').click(function(e){
            var amount = $(this).attr('data-val');
            $(this).closest('.rit-paypal-amount-wrapper').find('.rit-amount-button').removeClass('rit-button-accent').addClass('rit-button-white');
            $(this).removeClass('rit-button-white').addClass('rit-button-accent');
            $(this).parent('.rit-paypal-amount-wrapper').siblings('[name="amount"]').val(amount);
        });

        $(this).find('.custom-amount').change(function(){
            var amount = parseInt($(this).val());
            $(this).siblings().removeClass('active');
            $(this).parent('.rit-paypal-amount-wrapper').siblings('[name="amount"]').val(amount);
        });

        $(this).submit(function(e){
            var valid = true;
            var rit_form = $(this);

            // check require fields
            $(this).find('.rit-require').each(function(){
                if( valid && $(this).val() == '' ){
                    rit_form.children('.rit-notice.require-field').slideDown(200)
                        .siblings('.rit-notice').slideUp(200);
                    valid = false;
                }
            });

            // check email
            $(this).find('.rit-email').each(function(){
                var re = /\S+@\S+/;
                if( valid && !re.test($(this).val()) ){
                    rit_form.children('.rit-notice.email-invalid').slideDown(200)
                        .siblings('.rit-notice').slideUp(200);
                    valid = false;
                }
            });

            if( valid ){
                rit_form.children('.rit-notice').slideUp(200);
                rit_form.children('.rit-paypal-loader').slideDown(200);

                var ajax_url = rit_form.attr('data-ajax');

                $.ajax({
                    type: 'POST',
                    url: ajax_url,
                    data: jQuery(this).serialize(),
                    dataType: 'json',
                    error: function(a, b, c){
                        console.log(a, b, c);
                    },
                    success: function(data){
                        rit_form.children('.rit-notice.alert-message')
                            .html(data.message).slideDown(200).addClass('rit-' + data.status);
                        rit_form.children('.rit-paypal-loader').slideUp(200);

                        if( data.status == 'success' ){
                            rit_form[0].submit();
                        }
                    }
                });
            }

            e.preventDefault();
            e.returnValue = false;
        });
    });
    });
})(jQuery);

