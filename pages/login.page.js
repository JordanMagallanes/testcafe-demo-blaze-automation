import { Selector, t } from "testcafe";
import BasePage from "./base.page";

class LoginPage extends BasePage{
    constructor(){
        super();

        this.userName = Selector('#loginusername');
        this.password = Selector('#loginpassword');
        this.btnCancel = Selector('');
        this.btnLogIn = Selector('.btn-primary').nth(2);
    }

    async setUsername(userName){
        await t.typeText(this.userName, userName);
    }

    async setPassword(password){
        await t.typeText(this.password, password);
    }

    async fillLogin(userName, password){
        await this.setUsername(userName);
        await this.setPassword(password);
    }

    async clickLoginbtn(){
        await t.click(this.btnLogIn);
    }

    async setLogin(userName, password){
        await this.fillLogin(userName, password);
        await this.clickLoginbtn();
    }
}export default new LoginPage();