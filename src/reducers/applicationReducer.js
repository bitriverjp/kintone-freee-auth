import { combineReducers } from 'redux'
import * as actions from '../actions/applicationActions'

function config(state = {}, action) {
  switch (action.type) {
    case actions.LOAD_CONFIG:
      return { ...action.values }
    default:
      return state
  }
}

function freee(state = {}, action) {
  switch (action.type) {
    case actions.LOAD_STRAGE:
      return { ...action.values }
    case actions.RECEIVE_ACCESS_TOKEN:
      return {
        ...state,
        accessToken: action.token,
      }
    case actions.RECEIVE_COMPANY_ID:
      return {
        ...state,
        companyId: action.companyId,
      }
    default:
      return state
  }
}

const applicationReducer = combineReducers({
  config,
  freee
})

export default applicationReducer
