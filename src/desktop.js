import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import ENV from './_environments'

class Desktop extends Component {
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
    ReactDOM.render(<Desktop />, kintoneSpaceElement)
    return event
})
