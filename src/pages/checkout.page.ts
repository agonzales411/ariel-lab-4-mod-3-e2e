import { BasePage } from "./base.page";

export class CheckoutPage extends BasePage {
    //checkout information Locator
    private firstName: string = '#first-name';
    private lastName: string = '#last-name';
    private postalCode: string = '#postal-code';
    private continueButton: string = '#continue';

    //Checkout Overview
    private finish: string = '#finish';

    //Checkout Complete
    private completeMessage: string = '.complete-header';

    constructor() {
        super();
    }

    async checkoutInformation(firstName: string, lastName: string, postalCode: string) {
        await this.driver.Page.fill(this.firstName, firstName);
        await this.driver.Page.fill(this.lastName, lastName);
        await this.driver.Page.fill(this.postalCode, postalCode);
        await this.driver.Page.click(this.continueButton);
    }

    async clickFinishOrderButton() {
        await this.driver.Page.click(this.finish);
    }

    async getCompleteOrderMessage() {
        return await this.driver.Page.innerText(this.completeMessage);
    }
}
