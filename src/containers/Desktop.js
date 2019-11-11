import * as React from 'react'
import { connect } from 'react-redux'

class Desktop extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    const { config } = this.props
    console.log(config)
  }

  render() {
    const { config } = this.props
    return <div>{config.clientId}</div>
  }
}

function mapStateToProps(state) {
  const { config } = state
  return {
    config,
  }
}
  
export default connect(mapStateToProps)(Desktop)
  