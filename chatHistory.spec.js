// const getFieldElements = require('./getFieldElements.js');
const getTextFieldElements = require('./utils/TextField.js');
const getFileFieldElements = require('./utils/FileField.js');

const getRandom = require('./utils/GenerateRandom.js');
const t = 100;

const rand = getRandom();

describe('Register new member -> Register new Influencer -> Write as a member to Influencer', () => {
  it('1.0 Random member username', async () => {
    // await browser.url('http://localhost:3001/signup');
    await browser.url('https://-----/signup');
    const username = await getTextFieldElements('signup-field-username');
    await username.input.setValue(rand + '_test');
  });
  it('1.1 Using same value as  member email + "@member.mail"', async () => {
    const email = await getTextFieldElements('signup-field-email');
    await email.input.setValue(rand + '@member.mail');
  });
  it('1.2 Using default password "V**123!"', async () => {
    const password = await getTextFieldElements('signup-field-password');
    await password.input.setValue('----!');
  });
  it('1.3 Ticking "T&C" and creating member account', async () => {
    const box = await getTextFieldElements('signup-checkbox-accept');
    await box.tickCheckbox.click();
    const submit = await $('[data-test-id="signup-button-submit"]');
    submit.waitForExist(500);
    await submit.click();
  });
  it('1.4 Accessing burger menu and performing Logout', async () => {
    const menu = await getTextFieldElements('headerBar');
    menu.burgerMenu.waitForExist(t);
    await menu.burgerMenu.click();
    const signOut = await $('[data-test-id="menu-signout-button"]');
    await signOut.click();
    await menu.burgerMenu.click();
    menu.burgerMenu.waitForExist(t);
  });
  //   new influencer
  it('2.0 Accessing signup from burger menu side pannel', async () => {
    const signUp = await $('[data-test-id="menu-signup-button"]');
    await signUp.click();
  });
  it('2.1 Using Random influencer username', async () => {
    const username = await getTextFieldElements('signup-field-username');
    username.input.waitForExist(t);
    await username.input.setValue(rand + '_test_inf');
  });
  it('2.2 Using Random influencer email', async () => {
    const email = await getTextFieldElements('signup-field-email');
    await email.input.setValue(rand + '@influencer.mail');
  });
  it('2.3 Using "V***123!"as influencer password', async () => {
    const password = await getTextFieldElements('signup-field-password');
    await password.input.setValue('V**123!');
  });
  it('2.4 Ticking "T&C" and creating influencer account', async () => {
    const box = await getTextFieldElements('signup-checkbox-accept');
    await box.tickCheckbox.click();
    const changeType = await $('[data-test-id="BasicType"]');
    await changeType.click();
    const submit = await $('[data-test-id="signup-button-submit"]');
    await submit.click();
  });
  it('2.5 Sign out influencer account', async () => {
    const menu = await getTextFieldElements('headerBar');
    const signOut = await $('[data-test-id="menu-signout-button"]');
    await menu.burgerMenu.click();
    await signOut.click();
  });
  //   //signin as member
  it('3.0 Sign in as member account', async () => {
    const menu = await getTextFieldElements('headerBar');
    await menu.burgerMenu.click();
    const signinMenuButton = await $('[data-test-id="menu-signin-button"]');
    signinMenuButton.waitForExist(t);
    await signinMenuButton.click();
    const usernameSignin = await getTextFieldElements('signin-field-username');
    await usernameSignin.input.setValue(rand + '_test');
    const passwordSignin = await getTextFieldElements('signin-field-password');
    await passwordSignin.input.setValue('***');
    const submitButtonSignin = await $('[data-test-id="signin-button-submit"]');
    submitButtonSignin.waitForExist(t);
    await submitButtonSignin.click();
  });
  it('3.1 going to influencer profile page', async () => {
    // await browser.url('http://localhost:3001/profile/' + rand + '_test_inf');
    await browser.url('https://ui-dev.***.org/profile/' + rand + '_test_inf');
  });
  it('3.2 Clicking DM on influencer profile page', async () => {
    const startChatButton = await $('[data-test-id="directMessage"]');
    startChatButton.waitForExist(t);
    await startChatButton.click();
  });
  it('3.3 Accessing chat and sending random message', async () => {
    const chatInput = await $('[data-test-id="chatInputField"]');
    await chatInput.click();
    await browser.keys(rand);
    await browser.keys('Enter');
  });
  it('3.4 Checking that message is present in chat history', async () => {
    await browser.pause(t);
    const chatHistory = await $('[data-test-id="messageListContainer"]');
    chatHistory.waitForExist(t);
    const historyContainer = await chatHistory.getText();
    expect(historyContainer).toContain(rand);
  });
  it('3.5 Sign out member account', async () => {
    const menu = await getTextFieldElements('headerBar');
    const signinMenuButton = await $('[data-test-id="menu-signin-button"]');
    menu.burgerMenu.waitForExist(t);
    const signOut = await $('[data-test-id="menu-signout-button"]');
    await menu.burgerMenu.click();
    await signOut.click();
    signinMenuButton.waitForExist(t);
  });
});
