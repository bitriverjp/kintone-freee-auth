import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import ConfigForm from './components/config/ConfigForm'

class Config extends Component {
  constructor(props) {
    super(props)
    this.state = {
      pluginId: kintone.$PLUGIN_ID,
      clientKey: '',
      clientSecret: '',
      callBackUrl: '',
    }
  }

  componentDidMount() {
    const config = kintone.plugin.app.getConfig(this.state.pluginId)
    if (!config) return
    this.setState({
      clientKey: config.clientKey,
      clientSecret: config.clientSecret,
      callBackUrl: config.callBackUrl,  
    })
  }

  handleSubmit(config) {
    alert(config.clientKey)
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
