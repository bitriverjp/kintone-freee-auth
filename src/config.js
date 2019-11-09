import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Button } from '@kintone/kintone-ui-component';

class Config extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
        <Button text='Submit' type='submit' onClick={function() { alert('This is my customization') }}/>
    )
  }
}

const element = document.getElementById("kintone_freee_auth_config")
if (element) ReactDOM.render(<Config />, element)
