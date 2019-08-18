import { assert } from 'chai';
import Home from '../pages/Home';
import Register from '../pages/Register';
import homeSelectors from '../selectors/home';
import registerSelectors from '../selectors/register';

describe('Food2Fork Home Page', () => {
  before('setup', () => {
    Home.open(homeSelectors.url);
  });

  afterEach('setup', () => {
    Home.pause(0.5);
  });

  it('should have the right title', () => {
    assert.strictEqual(Home.title(), 'Top Socially Ranked Recipes - Search By Ingredients | Food2Fork');
  });

  it('should have visible logo', () => {
    assert.strictEqual(Home.logo().isDisplayed(), true);
    assert.strictEqual(Home.logo().isExisting(), true);
  });

  it('should have Browse dropdown menu on hover', () => {
    Home.hoverBrowse();

    assert.strictEqual(Home.browse().getText(), 'Browse');
    assert.strictEqual(Home.browseItem(0).getText(), 'Recipes');
    assert.strictEqual(Home.browseItem(1).getText(), 'Publishers');
    assert.strictEqual(Home.browseItem(2).getText(), 'About');
    assert.strictEqual(Home.browseItem(3).getText(), 'Recipe API');
  });

  it('should have working Recipes menu in Browse dropdown menu on hover', () => {
    Home.open(homeSelectors.url);
    Home.hoverBrowse();
    Home.browseItem(0).click();

    assert.strictEqual(Home.url(), `${browser.options.baseUrl}${homeSelectors.url}`);
  });

  it('should have working Publishers menu in Browse dropdown menu on hover', () => {
    Home.open(homeSelectors.url);
    Home.hoverBrowse();
    Home.browseItem(1).click();

    assert.strictEqual(Home.url(), `${browser.options.baseUrl}/publishers`);
  });

  it('should have working About menu in Browse dropdown menu on hover', () => {
    Home.open(homeSelectors.url);
    Home.hoverBrowse();
    Home.browseItem(2).click();

    assert.strictEqual(Home.url(), `${browser.options.baseUrl}/about`);
  });

  it('should have working Recipe API menu in Browse dropdown menu on hover', () => {
    Home.open(homeSelectors.url);
    Home.hoverBrowse();
    Home.browseItem(3).click();

    assert.strictEqual(Home.url(), `${browser.options.baseUrl}/about/api`);
  });

  it('should have Login tab', () => {
    Home.open(homeSelectors.url);

    assert.strictEqual(Home.select(homeSelectors.login).getText(), 'Login');
    Home.pause(2);
  });

  it('should have working Login tab', () => {
    Home.open(homeSelectors.url);
    Home.select(homeSelectors.login).click();
    // eslint-disable-next-line max-len
    assert.strictEqual(Home.url(), `${browser.options.baseUrl}/default/user/login?_next=http%3A%2F%2Fwww.food2fork.com%2F`);
  });

  it('should have visible heading', () => {
    Home.open(homeSelectors.url);
    // eslint-disable-next-line max-len
    assert.strictEqual(Home.select(homeSelectors.heading).getText(), 'Food2Fork makes it easy to find great recipes.\nSearch by name or ingredients. Join to save your favorites for later.');
  });

  it('should have visible join button', () => {
    Home.open(homeSelectors.url);

    assert.strictEqual(Home.select(homeSelectors.joinButton).getText(), 'Join Food2Fork');
  });

  it('should have working join button', () => {
    Home.open(homeSelectors.url);
    Home.select(homeSelectors.joinButton).click();

    assert.strictEqual(Home.url(), `${browser.options.baseUrl}/register?_next=http%3A%2F%2Fwww.food2fork.com%2F`);
    assert.strictEqual(Register.select(registerSelectors.heading).getText(), 'Register with Email');
  });

  it('should have Sort By dropdown menu on click', () => {
    Home.open(homeSelectors.url);
    Home.openSortBy();

    assert.strictEqual(Home.select(homeSelectors.sortByText).getText(), 'Sort By');
    assert.strictEqual(Home.sortByItem(0).getText(), 'Top Rated');
    assert.strictEqual(Home.sortByItem(1).getText(), 'Trending');
  });

  it('should have Sort By dropdown menu with Top Rated working on click', () => {
    Home.open(homeSelectors.url);
    Home.openSortBy();
    Home.sortByItem(0).click();

    assert.strictEqual(Home.url(), `${browser.options.baseUrl}/top`);
  });

  it('should have Sort By dropdown menu with Trending working on click', () => {
    Home.open(homeSelectors.url);
    Home.openSortBy();
    Home.sortByItem(1).click();

    assert.strictEqual(Home.url(), `${browser.options.baseUrl}/trending`);
  });

  it('should have visible footer', () => {
    Home.open(homeSelectors.url);
    assert.strictEqual(Home.footer().getText(), 'Copyright © 2019');
  });
});
