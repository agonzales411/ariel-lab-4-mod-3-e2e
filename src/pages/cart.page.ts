import { ElementActions } from "../core/element-actions";
import { BasePage } from "./base.page";

class CartPage extends BasePage {
    //locators
    private checkoutButton: string = '#checkout';
    
    constructor() {
        super();
    }

    async clickCheckoutButton() {
        //await this.driver.Page.click(this.checkoutButton);
        await ElementActions.clickElement(this.checkoutButton);
    }
}

export const cartPage = new CartPage();
