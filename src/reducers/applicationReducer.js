import { combineReducers } from 'redux'
import { LOAD } from '../actions/applicationActions'

function config(state = {}, action) {
  switch (action.type) {
    case LOAD:
      return { ...action.values }
    default:
      return state
  }
}

const applicationReducer = combineReducers({
  config,
})

export default applicationReducer
