import { Label, Text, Button } from '@kintone/kintone-ui-component'
import React from 'react'

export default class ConfigForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      clientKey: '',
      clientSecret: '',
      callBackUrl: '',
    };
  }

  render() {
    return (
      <div>
        <div>
          <Label isRequired={true} text="Client Key:"/>
          <Text
            value={this.state.clientKey}
            onChange={value => this.setState({ clientKey: value })}
          />
        </div>
        <div>
          <Label isRequired={true} text="Client Secret:"/>
          <Text
            value={this.state.clientSecret}
            onChange={value => this.setState({ clientSecret: value })}
          />
        </div>
        <div>
          <Label isRequired={true} text="CallBack URL:"/>
          <Text
            value={this.state.callBackUrl}
            onChange={value => this.setState({ callBackUrl: value })}
          />
        </div>
        <div className="kintone-freee-auth-toolbox">
          <Button
            text="保存する"
            type="submit"
            onClick={() => this.props.onSubmit(this.state)}
          />
          <Button
            text="キャンセル"
            onClick={() => this.props.onCancel(this.state)}
          />
        </div>
      </div>
    )
  }
}
