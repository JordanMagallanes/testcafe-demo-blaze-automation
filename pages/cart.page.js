import { Selector, t } from "testcafe";
import BasePage from "./base.page";
import { data } from "../data/data";

class CartPage extends BasePage{
    constructor(){
        super();

        this.data = data['paymentInfo'];
        this.productList = Selector('#tbodyid tr');
        this.productsContainer = Selector('.col-lg-8');
        this.btnPlaceOrder = Selector('[data-target="#orderModal"]');
        this.placeOrderModal = Selector('#orderModal .modal-content');
        this.btnPurchase = Selector('#orderModal button.btn-primary');
        this.confirmAlert = Selector('.sweet-alert');
        this.btnConfirm = Selector('.sa-confirm-button-container button');
        this.lblDelete = Selector('#tbodyid a');

        this.buyerName = Selector('#name');
        this.buyerCountry = Selector('#country');
        this.buyerCity = Selector('#city');
        this.creditCardNumber = Selector('#card');
        this.creditCardMoth = Selector('#month');
        this.creditCardYear = Selector('#year');
    }

    /**
     * @description Method to verify that products have been added to the cart
     * @param {Number} quantity Number of objects to be verified
     */
    async verifyCartItems(quantity){
        await t.wait(1500);
        await t.expect(this.productsContainer.visible).ok({timeout:5000})

        let addedProduct = await this.productList.count;
        
        await t.expect(addedProduct).eql(quantity);
    }

    /**
     * @description Method to click the place to order button
     */
    async clickPlaceOrder(){
        await t.click(this.btnPlaceOrder);
    }

    /**
     * @description Method to place the order
     */
    async placeOrder(){
        await t.wait(1000);
        await this.placeOrderModal.visible;
        await this.fillOutModalPurchase();

        await t.click(this.btnPurchase);
        await t.expect(this.confirmAlert.visible).ok({timeout:5000});
        await t.wait(1000);
        await t.click(this.btnConfirm);

    }

    /**
     * @description Method to fill out the purchase form
     */
    async fillOutModalPurchase(){
        await t.typeText(this.buyerName, this.data.name);
        await t.typeText(this.buyerCountry, this.data.country);
        await t.typeText(this.buyerCity, this.data.city);
        await t.typeText(this.creditCardNumber, this.data.creditCard);
        await t.typeText(this.creditCardMoth, this.data.month);
        await t.typeText(this.creditCardYear, this.data.year);
    }

    /**
     * @description Method to remove a product from the cart
     */
    async removeItem(){
        await t.click(this.lblDelete);
        await t.wait(1000);

        let addedProduct = await this.productList.count;
        await t.expect(addedProduct).eql(0);
    }
}export default new CartPage();