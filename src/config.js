import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import ConfigForm from './components/config/ConfigForm'

class Config extends Component {
  constructor(props) {
    super(props)
    const pluginId = kintone.$PLUGIN_ID
    let config = kintone.plugin.app.getConfig(pluginId)
    if (!config) config = {
      clientKey: '',
      clientSecret: '',
      callBackUrl: '',
    }
    this.state = {
      pluginId: pluginId,
      ...config,
    }
  }

  handleSubmit(config) {
    console.log(config)
    if (!config.clientKey) return alert('必須です。')
    if (!config.clientSecret) return alert('必須です。')
    if (!config.callBackUrl) return alert('必須です。')
    kintone.plugin.app.setConfig(config)
  }

  handleCancel() {
    window.history.back()
  }

  render() {
    return (
      <ConfigForm
        clientKey={this.state.clientKey}
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
