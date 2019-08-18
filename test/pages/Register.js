import chai from 'chai';
import BasePage from './Base';

class Register extends BasePage {
  constructor() {
    super();
    this.$ = $;
    this.browser = browser;
  }

  clearSet(label, text) {
    this.$(label).clearValue();
    this.$(label).setValue(text);
  }

  // eslint-disable-next-line class-methods-use-this
  parseJSON(text) {
    try {
      return JSON.parse(text);
    }
    catch (e) {
      return {};
    }
  }

  searchAPI(query) {
    return chai.request(this.browser.options.baseUrl)
      .get('/api/search')
      .query(query);
  }
}

module.exports = new Register();
