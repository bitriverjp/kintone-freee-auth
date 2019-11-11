import ENV from '../_environments'

class kintoneFreeeAuthUtility {
  constructor(accessToken, companyId) {
    this.accessToken = accessToken
    this.companyId = companyId
  }

  getCompanyId() {
    return Number(this.companyId)
  }

  proxy(path, method, body) {
    const header = {
      'Authorization': 'Bearer ' + this.accessToken,
      'Content-Type': 'application/json',
    }
    if (path.substr(0, 1) !== '/') path = '/' + path
    return kintone.proxy(ENV.endPointUrl + path, method, header, body)
  }
}

export default kintoneFreeeAuthUtility