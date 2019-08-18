import home from '../selectors/home';

class BasePage {
  constructor() {
    this.homeSelectors = home;
    this.browser = browser;
    this.$ = $;
  }

  open(path) {
    this.browser.url(path);
  }

  url() {
    return this.browser.getUrl();
  }

  title() {
    return this.browser.getTitle();
  }

  pause(sec) {
    this.browser.pause(sec * 1000);
  }

  logo() {
    return this.$(this.homeSelectors.logo);
  }

  footer() {
    return $(this.homeSelectors.footer);
  }

  browse() {
    return this.$(this.homeSelectors.browse);
  }

  debug() {
    this.browser.debug();
  }

  select(selector) {
    return this.$(selector);
  }
}

module.exports = BasePage;
