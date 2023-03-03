import { driverInstance } from "../src/core/driver";
import { cartPage } from "../src/pages/cart.page";
//import cartPage from "../src/pages/cart.page";
import { CheckoutPage } from "../src/pages/checkout.page";
import { InventoryPage } from "../src/pages/inventory.page";
import { LoginPage } from "../src/pages/login.page";
import { userData } from "../user-data";

describe('Feature Perform an Order', () => {
    let loginPage: LoginPage = new LoginPage();
    let invetoryPage: InventoryPage =  new InventoryPage();
    //let cartPage: CartPage =  new CartPage();
    let checkoutPage: CheckoutPage = new CheckoutPage();

    beforeAll( async () => {
        await driverInstance.start(userData.browser);
        await loginPage.navigateTo(userData.url);
        await loginPage.Login(userData.username, userData.password);        
    }, 20000);

    afterAll(async () => {
        await driverInstance.closeDriver();

    });

    test('Perform an Order', async () => {
        await invetoryPage.addToCartItem('Sauce Labs Backpack');
        await invetoryPage.addToCartItem('Sauce Labs Bike Light');

        await invetoryPage.clickShoppingCartBadge();
        await cartPage.clickCheckoutButton();
        //await driverInstance.Page.click(invetoryPage.shoppingCartBadge);
        //await driverInstance.Page.click(cartPage.checkoutButton);

        await checkoutPage.checkoutInformation('Ariel', 'Gonzales', '00000');
        await checkoutPage.clickFinishOrderButton();
        const actualCompleteMessage = await checkoutPage.getCompleteOrderMessage();
        expect(actualCompleteMessage).toBe('Thank you for your order!');

    });
});