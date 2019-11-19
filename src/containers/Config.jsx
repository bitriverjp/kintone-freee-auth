import * as React from 'react';
import {connect} from 'react-redux';
import {requestToSave} from '../actions/configActions';
import ConfigForm from '../components/config/ConfigForm';

class Config extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }

  handleSubmit(config) {
    if (!config.clientId) return alert('必須です。');
    if (!config.clientSecret) return alert('必須です。');

    this.props.dispatch(requestToSave(config));
  }

  handleCancel() {
    window.history.back();
  }

  render() {
    const {config} = this.props;
    return (
      <ConfigForm
        clientId={config.clientId}
        clientSecret={config.clientSecret}
        onSubmit={this.handleSubmit}
        onCancel={this.handleCancel}
      />
    );
  }
}

function mapStateToProps(state) {
  const {config} = state;
  return {
    config,
  };
}

export default connect(mapStateToProps)(Config);
