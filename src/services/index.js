import ENV from '../_environments';

export const configApi = {
  load() {
    const pluginId = kintone.$PLUGIN_ID;
    let config = kintone.plugin.app.getConfig(pluginId);
    if (!config) {
      config = {
        clientId: ''
      };
    }
    const proxyConfig = kintone.plugin.app.getProxyConfig(ENV.tokenUrl, 'POST');
    if (proxyConfig && proxyConfig.data && proxyConfig.data.client_secret) {
      config.clientSecret = proxyConfig.data.client_secret;
    }
    return config;
  },

  save(config) {
    return new Promise(() => {
      kintone.plugin.app.setProxyConfig(ENV.tokenUrl, 'POST', {}, {
        client_secret: config.clientSecret,
      }, () => {
        kintone.plugin.app.setConfig({
          clientId: config.clientId,
        });
      });
    });
  },
};

export const applicationApi = {
  loadConfig() {
    const pluginId = kintone.$PLUGIN_ID;
    let config = kintone.plugin.app.getConfig(pluginId);
    if (!config) {
      config = {
        clientId: ''
      };
    }
    return config;
  },

  getCallBackUrl() {
    const appId = kintone.app.getId();
    return location.protocol + '//' + location.hostname + '/k/' + appId + '/';
  },

  getAcceccToken(params) {
    const pluginId = kintone.$PLUGIN_ID;
    const header = {
      'Content-Type': 'application/json'
    };
    const body = {
      grant_type: 'authorization_code',
      client_id: params.clientId,
      redirect_uri: params.callBackUrl,
      code: params.authCode,
    };
    // アクセストークン取得のAPIを実行する
    return kintone.plugin.app.proxy(pluginId, ENV.tokenUrl, 'POST', header, body).then(response => {
      if (!response) return '';
      console.log(response);

      // freeeから取得した認証情報をパースする
      const credentials = JSON.parse(response[0]);
      let accessToken = credentials.access_token;

      if (!accessToken) {
        console.log('freeeの認証情報取得に失敗しました。');
        accessToken = 'FINISHED';
      }

      window.sessionStorage.kfa_plugin_freeeAccessToken = accessToken;
      window.sessionStorage.kfa_plugin_freeeCompanyId = '';

      return accessToken;
    });
  },

  getCompanyId(params) {
    const header = {
      'Authorization': 'Bearer ' + params.accessToken,
      'Content-Type': 'application/json',
    };
    return kintone.proxy(ENV.endPointUrl + '/companies', 'GET', header, {}).then(response => {
      if (!response) return '';
      console.log(response);

      // 結果をパースする
      const result = JSON.parse(response[0]);
      // 事業所一覧の配列から情報を取り出す
      if (!result.companies) return '';
      result.companies.forEach(company => {
        console.log(company);
      });

      // 1番目の事業所を利用する
      let companyId = result.companies[0].id;
      if (!companyId) {
        console.log('freeeの事業所情報取得に失敗しました。');
        companyId = 'FINISHED';
      }

      window.sessionStorage.kfa_plugin_freeeCompanyId = companyId;

      return companyId;
    });
  }
};