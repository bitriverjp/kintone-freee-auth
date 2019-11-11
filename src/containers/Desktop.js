import * as React from 'react'
import { connect } from 'react-redux'

class Desktop extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { freee } = this.props
    return <div>{freee.companyId}</div>
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
  