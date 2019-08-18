import { assert, expect } from 'chai';
import Register from '../pages/Register';
import registerSelectors from '../selectors/register';

const token = 'e676ea4152b2077f7e7bef634e232fff';
const queryBreast = { key: token, q: 'chicken breast', page: 2 };
const queryCookie = { key: token, q: 'cookie monster cupcakes', page: 1 };

describe('Food2Fork Search API', () => {
  before('setup', () => {
    Register.open(registerSelectors.apiUrl);
  });

  it('should search for \'cookie monster cupcakes\'', () => {
    assert.strictEqual(Register.title(), 'Recipe API | Food2Fork');

    browser.call(() => Register.searchAPI(queryCookie)
      .then((res) => validateResponse(res)));
  });

  it('should search for \'chicken breast\'', () => {
    assert.strictEqual(Register.title(), 'Recipe API | Food2Fork');

    browser.call(() => Register.searchAPI(queryBreast)
      .then((res) => validateResponse(res)));
  });

  function validateResponse(res) {
    expect(res).to.have.status(200);
    expect(res.error).to.be.false; // eslint-disable-line no-unused-expressions
    expect(res.ok).to.be.true; // eslint-disable-line no-unused-expressions
    expect(res.body).to.be.an('object');
    expect(res.text).to.be.a('string');

    const body = Register.parseJSON(res.text);

    expect(body).haveOwnProperty('count');
    expect(body).haveOwnProperty('recipes');
    expect(body).to.be.an('object');
    expect(body.recipes).to.be.an('array');
    expect(body.count).to.be.a('number');
    return true;
  }
});

