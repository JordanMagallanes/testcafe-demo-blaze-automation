/**
 * @name addToCart-Samsung.js
 * 
 * @description
 */

const { t } = require("testcafe");
const { default: BasePage } = require("../pages/base.page");
const { default: homePage } = require("../pages/home.page");
const { default: addToCartPage } = require("../pages/addToCart.page");
const { default: cartPage } = require("../pages/cart.page");
const { data } = require("../data/data");
const { default: loginPage } = require("../pages/login.page");

fixture`Add To Cart`
    .page`https://www.demoblaze.com/`

test.meta('testcase', 'addSamsung')
('Add Samsung S6', async t => {
    // Recover product name
    let productName = data['test'].test1;

    // Maximize window
    await homePage.maximizeWindow();

    // Get all the products in home page
    let products = await homePage.getAllRenderedItems();
    // Select the product
    await homePage.selectproduct(products, productName);
    // Get product title and evaluate that it is the same as the one we're looking for
    let productTitle = await addToCartPage.getProductTitle();
    await t.expect(productTitle).eql(productName);
    // Add product to the cart
    await addToCartPage.addToCart();
    await addToCartPage.clickCart();
    // Verify that the product was added to the cart
    await cartPage.verifyCartItems(1);
    // Place the order
    await cartPage.clickPlaceOrder();
    await cartPage.placeOrder();
});