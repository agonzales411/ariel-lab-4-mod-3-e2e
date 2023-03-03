import { driverInstance } from "./driver";

export class ElementActions {
    static async clickElement(locator: string) {
        
        //await driverInstance.Page.waitForSelector(locator);
        await driverInstance.Page.click(locator);
    }
}