import home from '../selectors/home';
import BasePage from './Base';

class Home extends BasePage {
  constructor() {
    super();
    this.homeSelectors = home;
    this.$ = $;
  }

  hoverBrowse() {
    this.browse().moveTo();
    this.select(this.homeSelectors.browseMenu).waitForDisplayed();
  }

  browseItem(index) {
    return this.$(this.homeSelectors.browseItems).$$('li')[index].$('a');
  }

  openSortBy() {
    this.$(this.homeSelectors.sortBy).click();
    this.$(this.homeSelectors.sortByOpen).waitForDisplayed();
  }

  sortByItem(index) {
    return this.$(this.homeSelectors.sortByItems).$$('li')[index].$('a');
  }

  searchList(text) {
    this.$(this.homeSelectors.searchInput).clearValue();
    this.$(this.homeSelectors.searchInput).setValue(text);
    this.$(this.homeSelectors.searchIcon).click();
    this.$(this.homeSelectors.searchList).waitForDisplayed();
  }

  selectListItem(index) {
    return this.$(this.homeSelectors.searchList).$$('.item.masonry-brick')[index];
  }
}

module.exports = new Home();
