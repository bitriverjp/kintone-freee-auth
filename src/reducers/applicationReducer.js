import {combineReducers} from 'redux';
import * as actions from '../actions/applicationActions';

function config(state, action) {
  const newState = !state ? {} : state;
  switch (action.type) {
    case actions.LOAD_CONFIG:
      return {...action.values};
    default:
      return newState;
  }
}

function freee(state, action) {
  const newState = !state ? {} : state;
  switch (action.type) {
    case actions.LOAD_STRAGE:
      return {...action.values};
    case actions.RECEIVE_ACCESS_TOKEN:
      return {
        ...newState,
        accessToken: action.token,
      };
    case actions.RECEIVE_COMPANY_ID:
      return {
        ...newState,
        companyId: action.companyId,
      };
    default:
      return newState;
  }
}

const applicationReducer = combineReducers({
  config,
  freee
});

export default applicationReducer;
