import ENV from '../_environments'

export const configApi = {
  load() {
    const pluginId = kintone.$PLUGIN_ID
    let config = kintone.plugin.app.getConfig(pluginId)
    if (!config) config = {
      clientId: '',
      callBackUrl: '',
    }
    let proxyConfig = kintone.plugin.app.getProxyConfig(ENV.tokenUrl, 'POST')
    return {
      ...config,
      clientSecret: proxyConfig.data.client_secret  
    }
  },

  save(config) {
    const header = {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
    const data = {
      'client_secret': config.clientSecret,
    }
    return new Promise(resolve => {
      kintone.plugin.app.setProxyConfig(ENV.tokenUrl, 'POST', header, data, () => {
        kintone.plugin.app.setConfig({
          clientId: config.clientId,
          callBackUrl: config.callBackUrl,
        })
      })  
    })
  },
}

export const applicationApi = {
  load() {
    const pluginId = kintone.$PLUGIN_ID
    let config = kintone.plugin.app.getConfig(pluginId)
    if (!config) config = {
      clientId: '',
      callBackUrl: '',
    }
    return config
  },
}