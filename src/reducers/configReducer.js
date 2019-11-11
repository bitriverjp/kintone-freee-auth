import { combineReducers } from 'redux'
import { LOAD, REQUEST_TO_SAVE, SUCCESS_TO_SAVE } from '../actions/configActions'

function config(state = {
  isSaving: false,
}, action) {
  switch (action.type) {
    case LOAD:
      return { isSaving: false, ...action.values }
    case REQUEST_TO_SAVE:
      return { isSaving: true, ...action.values }
    case SUCCESS_TO_SAVE:
      return { isSaving: false, ...state.values }
    default:
      return state
  }
}

const configReducer = combineReducers({
  config,
})

export default configReducer
