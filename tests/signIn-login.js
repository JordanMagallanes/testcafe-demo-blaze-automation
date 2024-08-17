const { default: homePage } = require("../pages/home.page");
const { default: loginPage } = require("../pages/login.page");

fixture `Log In`
    .page`https://www.demoblaze.com/`

test.meta('testcase', 'login')
('Log in', async t => {
    let userName = 'username1995@gmail.com';
    let password = '123456';

    await homePage.maximizeWindow();

    await homePage.clickLogin();

    await loginPage.setLogin(userName, password);
    await t.expect(await loginPage.isUserLogged()).eql(true);
});