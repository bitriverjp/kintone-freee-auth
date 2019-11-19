import ENV from '../_environments';

class KintoneFreeeAuthUtility {
  constructor(accessToken, companyId) {
    this.accessToken = accessToken;
    this.companyId = companyId;
  }

  getCompanyId() {
    return Number(this.companyId);
  }

  proxy(path, method, body) {
    const header = {
      'Authorization': 'Bearer ' + this.accessToken,
      'Content-Type': 'application/json',
    };
    const url = (path.substr(0, 1) !== '/')
      ? ENV.endPointUrl + '/' + path
      : ENV.endPointUrl + path;
    return kintone.proxy(url, method, header, body);
  }
}

export default KintoneFreeeAuthUtility;