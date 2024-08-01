/**
 * @name addToCart-Remove-Nokia.js
 * 
 * @description
 */

import { data } from "../data/data";
import addToCartPage from "../pages/addToCart.page";
import cartPage from "../pages/cart.page";
import homePage from "../pages/home.page";

fixture`Remove to Cart`
    .page`https://www.demoblaze.com/`

test.meta('testcase','removeNokia')
('Remove Nokia lumia 1520', async t=> {
    // Recover product name
    let productName = data['test'].test2;

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
    // Remove product to the cart
    await cartPage.removeItem();
});