import { Selector, t } from "testcafe";

export default class BasePage{
    constructor(){
        this.btnHome = Selector('.navbar-nav li.active');
        this.btnContact = Selector('[data-target="#exampleModal"]');
        this.btnAboutUs = Selector('[data-target="#videoModal"]');
        this.btnCart = Selector('#cartur');
        this.btnLogIn = Selector('#login2');
        this.btnSignUp = Selector('#signin2');
        this.lblUsername = Selector('#nameofuser');
    }

    /**
     * @description Method to click on the home button
     */
    async clickHome(){
        await t.click(this.btnHome);
    }

    /**
     * @description Method to click on the contact button
     */
    async clickContact(){
        await t.click(this.btnContact);
    }

    /**
     * @description Method to click on the about us button
     */
    async clickAboutUs(){
        await t.click(this.btnAboutUs);
    }

    /**
     * @description Method to click on the cart button
     */
    async clickCart(){
        await t.click(this.btnCart);
    }

    /**
     * @description Method to click on the login button
     */
    async clickLogin(){
        await t.click(this.btnLogIn);
    }

    /**
     * @description Method to click on the signup button
     */
    async clickSignUp(){
        await t.click(this.btnSignUp);
    }

    /**
     * @description Method to maximize the window
     */
    async maximizeWindow(){
        await t.maximizeWindow();
    }

    async isUserLogged(){
        const welcomeMessage = this.lblUsername.innerText;

        return (await welcomeMessage).includes('Welcome');
    }
}