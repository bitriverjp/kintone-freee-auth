import {Label, Text, Button} from '@kintone/kintone-ui-component';
import React from 'react';

export default class ConfigForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clientId: props.clientId,
      clientSecret: props.clientSecret,
    };
  }

  render() {
    return (
      <div>
        <div>
          <Label isRequired text="Client ID:" />
          <Text
            value={this.state.clientId}
            onChange={value => this.setState({clientId: value})}
          />
        </div>
        <div>
          <Label isRequired text="Client Secret:" />
          <Text
            value={this.state.clientSecret}
            onChange={value => this.setState({clientSecret: value})}
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
    );
  }
}
