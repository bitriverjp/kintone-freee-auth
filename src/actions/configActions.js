export const LOAD = 'LOAD';
export const REQUEST_TO_SAVE = 'REQUEST_TO_SAVE';
export const SUCCESS_TO_SAVE = 'SUCCESS_TO_SAVE';

export function load(values) {
  return {
    type: LOAD,
    values,
  };
}

export function requestToSave(values) {
  return {
    type: REQUEST_TO_SAVE,
    values,
  };
}

export function successToSave() {
  return {
    type: SUCCESS_TO_SAVE,
  };
}
