import { Selector, t } from "testcafe";
import BasePage from "./base.page";

export class Item{

    /**
    * @param {Selector} obj
    */
    constructor(obj){
        this.parent = obj;

        this.productImg = '.card-img-top';
        this.productTitle = '.card-title a';
        this.productPrice = '.card-block h5';
        this.productDescription = 'p#article';
    }

    /**
     * @description Method to return product image
     * @returns {Promise<string>} Returns the product image
     */
    async getProductImg(){
        return await this.parent.find(this.productImg).getAttribute('src');
    }

    /**
     * @description Method to return product title
     * @returns {Promise<string>} Returns the product title
     */
    async getProductTitle(){
        return await this.parent.find(this.productTitle).textContent;
    }

    /**
     * @description Method to click on the product
     */
    async goToProductDetails(){
        await t.click(this.parent.find(this.productImg))
    }
}

class HomePage extends BasePage{
    constructor(){
        super();
        this.productGridItems = Selector('#tbodyid');
        this.singleProduct = '#tbodyid > div';
    }

    /**
     * @description Method to return all the products in home page
     * @returns {Promise<Item[]>} List of items displayed in home page
     */
    async getAllRenderedItems(){
        let cards_selector = this.productGridItems.find(this.singleProduct);
        await cards_selector.visible;
        let cards_count = await cards_selector.count;
        let all_products = [];

        for(let i=0; i<cards_count; i++){
            let product = cards_selector.nth(i);
            all_products.push(new Item(product));
        }

        return all_products;
    }

    /**
     * @description Method to select a product
     * @param {Item[]} products product list displayed in home page
     * @param {string} productName name of the product to be selected
     */
    async selectproduct(products, productName){
        let productsCount = products.length;

        for(let i=0; i<productsCount; i++){
            if(await products[i].getProductTitle() === productName){
                await products[i].goToProductDetails();

                return 
            }
        }
    }
}
export default new HomePage();