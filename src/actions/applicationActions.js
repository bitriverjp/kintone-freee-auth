export const LOAD_CONFIG = 'LOAD_CONFIG'
export const LOAD_STRAGE = 'LOAD_STRAGE'
export const REDIRECT_TO_FREEE = 'REDIRECT_TO_FREEE'
export const REDIRECT_TO_ROOT = 'REDIRECT_TO_ROOT'
export const RECEIVE_ACCESS_TOKEN = 'RECEIVE_ACCESS_TOKEN'
export const RECEIVE_COMPANY_ID = 'RECEIVE_COMPANY_ID'

export function loadConfig(values) {
  return {
    type: LOAD_CONFIG,
    values,
  }
}

export function loadStrage(values) {
  return {
    type: LOAD_STRAGE,
    values,
  }
}

export function redirectToFreee() {
  return {
    type: REDIRECT_TO_FREEE,
  }
}

export function redirectToRoot() {
  return {
    type: REDIRECT_TO_ROOT,
  }
}

export function receiveAccessToken(token) {
  return {
    type: RECEIVE_ACCESS_TOKEN,
    token,
  }
}

export function receiveCompayId(companyId) {
  return {
    type: RECEIVE_COMPANY_ID,
    companyId,
  }
}