import { assert } from 'chai';
import Home from '../pages/Home';
import homeSelectors from '../selectors/home';

const search = 'cookie monster cupcakes';

describe('Food2Fork Home Page Search', () => {
  before('setup', () => {
    Home.open(homeSelectors.url);
  });

  afterEach('setup', () => {
    Home.pause(0.5);
  });

  it('should have search input and icon', () => {
    assert.isTrue(Home.select(homeSelectors.searchIcon).isExisting());
    assert.isTrue(Home.select(homeSelectors.searchIcon).isDisplayed());

    assert.isTrue(Home.select(homeSelectors.searchInput).isExisting());
    assert.isTrue(Home.select(homeSelectors.searchInput).isDisplayed());
  });

  it('should have filled input and search is performed', () => {
    Home.searchList(search);

    assert.isTrue(Home.selectListItem(0).isDisplayed());
    assert.isTrue(Home.selectListItem(0).isExisting());
  });
});
