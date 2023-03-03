import { driverInstance } from "../src/core/driver";
import { InventoryPage } from "../src/pages/inventory.page";
import { LoginPage } from "../src/pages/login.page";

describe('Inventory Feature', () => {
    let loginPage: LoginPage;
    let invetoryPage: InventoryPage;

    beforeAll( async () => {
        await driverInstance.start();        
        loginPage = new LoginPage();
        await loginPage.navigateTo('https://www.saucedemo.com/');
        await loginPage.Login('standard_user', 'secret_sauce');
        invetoryPage =  new InventoryPage();
    });

    afterAll(async () => {
        await driverInstance.closeDriver();
    });

    test('Validate Inventory Page', async () => {        
        // const headerLocator = invetoryPage.inventoryHeader;
        // const isLocatorDisplayed = await driverInstance.isElementDisplayed(headerLocator);
        const isLocatorDisplayed = await invetoryPage.validateInventoryHeader();
        expect(isLocatorDisplayed).not.toBeFalsy();
    });

    test('Select Product Items from Inventory Table', async () => {
        const itemName = 'Sauce Labs Bolt T-Shirt';
        await invetoryPage.addToCartItem(itemName);
        const isDisplayed = await invetoryPage.validateRemoveButton(itemName);        
        expect(isDisplayed).not.toBeFalsy();
    }, 35000);

    test('Shopping Cart Badge Icon should be Updated', async () => {        
        await invetoryPage.addToCartItem('Sauce Labs Backpack');
        await invetoryPage.addToCartItem('Sauce Labs Bike Light');
        const badge = await invetoryPage.getShoppingCartBadge();
        expect(badge).toBe("3");
    }, 35000);

});