/*
 * kintone-freee-auth Plug-in
 * Copyright (c) 2019 bitRiver Inc.
 *
 * Licensed under the MIT License
 */
jQuery.noConflict();

(($, PLUGIN_ID) => {
    'use strict';

    // プラグインIDの設定
    const KEY = PLUGIN_ID;
    const CONF = kintone.plugin.app.getConfig(KEY);
    const fields = [];

    function escapeHtml(htmlstr) {
        return htmlstr.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
            .replace(/'/g, '&quot;').replace(/'/g, '&#39;');
    };

})(jQuery, kintone.$PLUGIN_ID);