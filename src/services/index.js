import ENV from '../_environments'

export const configApi = {
  load() {
    const pluginId = kintone.$PLUGIN_ID
    let config = kintone.plugin.app.getConfig(pluginId)
    if (!config) config = {
      clientId: '',
      callBackUrl: '',
      clientSecret: '',
    }
    return config
  },

  save(config) {
    return new Promise(() => {
      kintone.plugin.app.setConfig({
        clientId: config.clientId,
        clientSecret: config.clientSecret,
        callBackUrl: config.callBackUrl,
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