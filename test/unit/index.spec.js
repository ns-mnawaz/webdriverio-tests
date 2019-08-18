import { expect, assert } from 'chai';
import word from '../../src/index';

describe('Challenge unit tests ', () => {
  it('should say \'my\'', () => {
    const str = word.getMyWord(3);
    expect(str).to.equal('my');
  });

  it('should say \'theresa\'', () => {
    const str = word.getMyWord(10);
    expect(str).to.equal('theresa');
  });

  it('should say \'clothes\'', () => {
    const str = word.getMyWord(14);
    expect(str).to.equal('clothes');
  });

  it('should say \'mytheresa\'', () => {
    const str = word.getMyWord(15);
    expect(str).to.equal('mytheresa');
  });

  it('should say \'myclothes\'', () => {
    const str = word.getMyWord(21);
    expect(str).to.equal('myclothes');
  });

  it('should say \'8\'', () => {
    const str = word.getMyWord(8);
    expect(str).to.equal(8);
  });

  it('should say \'43\'', () => {
    const str = word.getMyWord(43);
    expect(str).to.equal(43);
  });

  it('should add 2 and say \'shopmyclothes\'', () => {
    const status = word.updateDictionary(2, 'shop');
    assert.isTrue(status);
    expect(status).to.be.true; // eslint-disable-line no-unused-expressions

    const str = word.getMyWord(42);
    expect(str).to.equal('shopmyclothes');
  });

  it('should not add same key to dictionary', () => {
    const status = word.updateDictionary(3, 'shop');
    assert.isFalse(status);
    expect(status).to.be.false; // eslint-disable-line no-unused-expressions
  });
});
