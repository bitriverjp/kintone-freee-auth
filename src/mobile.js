import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class Mobile extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
        <div/>
    )
  }
}

kintone.events.on("app.record.index.show", (event) => {
    const kintoneSpaceElement = kintone.app.getHeaderSpaceElement()
    ReactDOM.render(<Mobile />, kintoneSpaceElement)
    return event
})
