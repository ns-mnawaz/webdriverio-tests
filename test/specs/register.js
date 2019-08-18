import { assert } from 'chai';
import Register from '../pages/Register';
import registerSelectors from '../selectors/register';

const firstName = 'Mir';
const lastName = 'Nawaz';
const email = 'inbox.mirnawaz@gmail.com';
const password = 'topSecretPass123123';

describe('Food2Fork Register Page labels', () => {
  before('setup', () => {
    Register.open(registerSelectors.url);
  });

  it('should have Register title', () => {
    assert.strictEqual(Register.title(), 'Food2Fork - Socially Ranked Recipe Ingredient Search');
    assert.strictEqual(Register.select(registerSelectors.headingH2).getText(), 'Register');
  });

  it('should have First Name title', () => {
    assert.strictEqual(Register.select(registerSelectors.fNameLabel).getText(), 'First name:');
    assert.isTrue(Register.select(registerSelectors.fNameLabel).isExisting());
    assert.isTrue(Register.select(registerSelectors.fNameLabel).isDisplayed());
  });

  it('should have Last Name title', () => {
    assert.strictEqual(Register.select(registerSelectors.lNameLabel).getText(), 'Last name:');
    assert.isTrue(Register.select(registerSelectors.lNameLabel).isExisting());
    assert.isTrue(Register.select(registerSelectors.lNameLabel).isDisplayed());
  });

  it('should have Email title', () => {
    assert.strictEqual(Register.select(registerSelectors.emailLabel).getText(), 'E-mail:');
    assert.isTrue(Register.select(registerSelectors.emailLabel).isExisting());
    assert.isTrue(Register.select(registerSelectors.emailLabel).isDisplayed());
  });

  it('should have Password title', () => {
    assert.strictEqual(Register.select(registerSelectors.passwordLabel).getText(), 'Password:');
    assert.isTrue(Register.select(registerSelectors.passwordLabel).isExisting());
    assert.isTrue(Register.select(registerSelectors.passwordLabel).isDisplayed());
  });

  it('should have Verify Password title', () => {
    assert.strictEqual(Register.select(registerSelectors.verifyPasswordLabel).getText(), 'Verify Password:');
    assert.isTrue(Register.select(registerSelectors.verifyPasswordLabel).isExisting());
    assert.isTrue(Register.select(registerSelectors.verifyPasswordLabel).isDisplayed());
  });

  it('should have Verify title', () => {
    assert.strictEqual(Register.select(registerSelectors.captchaVerifyLabel).getText(), 'Verify:');
    assert.isTrue(Register.select(registerSelectors.captchaVerifyLabel).isExisting());
    assert.isTrue(Register.select(registerSelectors.captchaVerifyLabel).isDisplayed());
  });

  it('should have Button Register title', () => {
    assert.strictEqual(Register.select(registerSelectors.registerButton).getValue(), 'Register');
    assert.isTrue(Register.select(registerSelectors.registerButton).isExisting());
    assert.isTrue(Register.select(registerSelectors.registerButton).isDisplayed());
  });
});

describe('Food2Fork Register Page Form', () => {
  before('setup', () => {
    Register.open(registerSelectors.url);
  });

  it('should have visible and empty inputs', () => {
    Register.select(registerSelectors.fName).clearValue();
    assert.isTrue(Register.select(registerSelectors.fName).isExisting());
    assert.isTrue(Register.select(registerSelectors.fName).isDisplayed());
    assert.strictEqual(Register.select(registerSelectors.fName).getValue(), '');

    Register.select(registerSelectors.lName).clearValue();
    assert.isTrue(Register.select(registerSelectors.lName).isExisting());
    assert.isTrue(Register.select(registerSelectors.lName).isDisplayed());
    assert.strictEqual(Register.select(registerSelectors.lName).getValue(), '');

    Register.select(registerSelectors.email).clearValue();
    assert.isTrue(Register.select(registerSelectors.email).isExisting());
    assert.isTrue(Register.select(registerSelectors.email).isDisplayed());
    assert.strictEqual(Register.select(registerSelectors.email).getValue(), '');

    Register.select(registerSelectors.password).clearValue();
    assert.isTrue(Register.select(registerSelectors.password).isExisting());
    assert.isTrue(Register.select(registerSelectors.password).isDisplayed());
    assert.strictEqual(Register.select(registerSelectors.password).getValue(), '');

    Register.select(registerSelectors.verifyPassword).clearValue();
    assert.isTrue(Register.select(registerSelectors.verifyPassword).isExisting());
    assert.isTrue(Register.select(registerSelectors.verifyPassword).isDisplayed());
    assert.strictEqual(Register.select(registerSelectors.verifyPassword).getValue(), '');
  });

  it('should submit form', () => {
    Register.clearSet(registerSelectors.fName, firstName);
    assert.strictEqual(Register.select(registerSelectors.fName).getValue(), firstName);

    Register.clearSet(registerSelectors.lName, lastName);
    assert.strictEqual(Register.select(registerSelectors.lName).getValue(), lastName);

    Register.clearSet(registerSelectors.email, email);
    assert.strictEqual(Register.select(registerSelectors.email).getValue(), email);

    Register.clearSet(registerSelectors.password, password);
    assert.strictEqual(Register.select(registerSelectors.password).getValue(), password);

    Register.clearSet(registerSelectors.verifyPassword, password);
    assert.strictEqual(Register.select(registerSelectors.verifyPassword).getValue(), password);

    // Register.debug();
    // Register.button().click();
  });
});
