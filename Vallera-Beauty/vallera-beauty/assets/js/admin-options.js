/* ==========================================================================
   VALLERA BEAUTY — ADMIN HOME PAGE EDITOR JAVASCRIPT
   Handles section tab switching & WordPress Media Library image/video picker
   ========================================================================== */

jQuery(document).ready(function ($) {
    'use strict';

    // 1. Tab Switching
    $(document).on('click', '.vh-tab-btn', function (e) {
        e.preventDefault();
        var targetTab = $(this).attr('data-tab');
        if (!targetTab) return;

        $('.vh-tab-btn').removeClass('is-active');
        $(this).addClass('is-active');

        $('.vh-tab-panel').removeClass('is-active');
        $('#' + targetTab).addClass('is-active');
    });

    // 2. WordPress Media Library Picker for Images & Video
    $(document).on('click', '.vh-media-upload-btn', function (e) {
        e.preventDefault();

        var $btn = $(this);
        var targetSelector = $btn.attr('data-target');
        var previewSelector = $btn.attr('data-preview');
        var mediaType = $btn.attr('data-type') || 'image';

        if (typeof wp === 'undefined' || !wp.media) {
            return;
        }

        var frame = wp.media({
            title: mediaType === 'video' ? 'Select or Upload Video' : 'Select or Upload Image',
            button: {
                text: 'Use this file'
            },
            library: {
                type: mediaType
            },
            multiple: false
        });

        frame.on('select', function () {
            var attachment = frame.state().get('selection').first().toJSON();
            if (attachment && attachment.url) {
                $(targetSelector).val(attachment.url);
                if (previewSelector && mediaType === 'image') {
                    $(previewSelector).html('<img src="' + attachment.url + '" alt="" class="vh-preview-img">');
                }
            }
        });

        frame.open();
    });
});

