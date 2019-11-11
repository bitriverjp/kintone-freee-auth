import * as React from 'react'
import { connect } from 'react-redux'

class Desktop extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    const { config, freee } = this.props
    console.log(config)
    console.log(freee)
  }

  render() {
    const { config } = this.props
    return <div>{config.clientId}</div>
  }
}

function mapStateToProps(state) {
  const { config, freee } = state
  return {
    config,
    freee
  }
}
  
export default connect(mapStateToProps)(Desktop)
  