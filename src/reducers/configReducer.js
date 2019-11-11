import { combineReducers } from 'redux'
import * as actions from '../actions/configActions'

function config(state = {
  isSaving: false,
}, action) {
  switch (action.type) {
    case actions.LOAD:
      return { isSaving: false, ...action.values }
    case actions.REQUEST_TO_SAVE:
      return { isSaving: true, ...action.values }
    case actions.SUCCESS_TO_SAVE:
      return { isSaving: false, ...state.values }
    default:
      return state
  }
}

const configReducer = combineReducers({
  config,
})

export default configReducer
