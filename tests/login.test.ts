import { driverInstance } from "../src/core/driver";
import { LoginPage } from "../src/pages/login.page";

describe('Feature Login SauceDemo', () => {
    let loginPage: LoginPage;

    beforeAll(async () => {
        //loginPage = new LoginPage();
        await driverInstance.start();
        loginPage = new LoginPage();
    });

    afterAll(async () => {
        await driverInstance.closeDriver();
    });

    it('Go To Page', async () => {
        await loginPage.navigateTo('https://www.saucedemo.com/');
    });

    it('Sets Username', async () => {
        await loginPage.Login('standard_user', 'secret_sauce');
    });
});
