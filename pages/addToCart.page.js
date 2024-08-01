import { Selector, t } from "testcafe";
import BasePage from "./base.page";

class addToCartPage extends BasePage{
    constructor(){
        super();

        this.productTitle = Selector('h2.name');
        this.productPrice = Selector('h3.price-container');
        this.productDescription = Selector('#more-information p');
        this.btnAddToCart = Selector('.btn-success');
    }

    /**
     * @description Method to add products to cart
     */
    async addToCart(){

        // Handle the native alert
        await t.setNativeDialogHandler((type) => {
            if (type === 'confirm') {
                return true; 
            }
        });
        
        await this.btnAddToCart.visible;
        await t.click(this.btnAddToCart);

    }

    /**
     * @description Method to get the name of the selected product
     * @returns {string} A string with the name of the product
     */
    async getProductTitle(){
        await this.productTitle.visible;

        return await this.productTitle.textContent;
    }
} export default new addToCartPage();