﻿/*
 * Downloaded from http://mvcdiary.com/projects/Home/Bootstrap/Confirm-Modal
 * Modified by leonardo brambilla to use button instead of anchor for confirm and cancel, so we 
 * avoid being redirected out from the current page.
 */
(function ($) {
    $.fn.extend({
        //pass the options variable to the function
        confirmModal: function (options) {
            var html = '<div class="modal" id="confirmContainer"><div class="modal-header"><a class="close" data-dismiss="modal">×</a>' +
            '<h3>#Heading#</h3></div><div class="modal-body">' +
            '#Body#</div><div class="modal-footer">' +
            '<button class="btn btn-primary" id="confirmYesBtn">Confirm</a>' +
            '<button class="btn" data-dismiss="modal">Cancel</a></div></div>';

            var defaults = {
                heading: 'Please confirm',
                body:'Body contents',
                callback : null
            };
            
            var options = $.extend(defaults, options);
            html = html.replace('#Heading#',options.heading).replace('#Body#',options.body);
            $(this).html(html);
            $(this).modal('show');
            var context = $(this); 
            $('#confirmYesBtn',this).click(function(){
                if(options.callback!=null)
                    options.callback();
                $(context).modal('hide');
            });
        }
    });

})(jQuery);