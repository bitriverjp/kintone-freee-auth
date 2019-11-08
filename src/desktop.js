((PLUGIN_ID) => {
    'use strict';

    // 設定値読み込み用変数
    var CONFIG = kintone.plugin.app.getConfig(PLUGIN_ID);
    // 設定値読み込み
    if (!CONFIG) {
        return false;
    }

})(kintone.$PLUGIN_ID);