import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import ConfigForm from './components/config/ConfigForm'
import ENV from './_environments'

class Config extends Component {
  constructor(props) {
    super(props)
    const pluginId = kintone.$PLUGIN_ID
    let config = kintone.plugin.app.getConfig(pluginId)
    if (!config) config = {
      clientId: '',
      callBackUrl: '',
    }
    let proxyConfig = kintone.plugin.app.getProxyConfig(ENV.tokenUrl, 'POST')
    console.log(proxyConfig)
    this.state = {
      pluginId: pluginId,
      ...config,
      clientSecret: proxyConfig.data.client_secret
    }
  }

  handleSubmit(config) {
    if (!config.clientId) return alert('必須です。')
    if (!config.clientSecret) return alert('必須です。')
    if (!config.callBackUrl) return alert('必須です。')

    const header = {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
    const data = {
      'client_secret': config.clientSecret,
    }
    kintone.plugin.app.setProxyConfig(ENV.tokenUrl, 'POST', header, data, () => {
      kintone.plugin.app.setConfig({
        clientId: config.clientId,
        callBackUrl: config.callBackUrl,
      })
    })  
  }

  handleCancel() {
    window.history.back()
  }

  render() {
    return (
      <ConfigForm
        clientId={this.state.clientId}
        clientSecret={this.state.clientSecret}
        callBackUrl={this.state.callBackUrl}
        onSubmit={this.handleSubmit.bind(this)}
        onCancel={this.handleCancel.bind(this)}
      />
    )
  }
}

const element = document.getElementById("kintone_freee_auth_config")
if (element) ReactDOM.render(<Config />, element)
