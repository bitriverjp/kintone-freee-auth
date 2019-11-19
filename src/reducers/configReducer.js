import {combineReducers} from 'redux';
import * as actions from '../actions/configActions';

function config(state, action) {
  const newState = !state ? {
    isSaving: false,
    values: {},
  } : state;
  switch (action.type) {
    case actions.LOAD:
      return {isSaving: false, ...action.values};
    case actions.REQUEST_TO_SAVE:
      return {isSaving: true, ...action.values};
    case actions.SUCCESS_TO_SAVE:
      return {isSaving: false, ...newState.values};
    default:
      return newState;
  }
}

const configReducer = combineReducers({
  config,
});

export default configReducer;
