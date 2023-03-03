import { BasePage } from "./base.page";

export class InventoryPage extends BasePage {
    // Locators
    private inventoryHeader: string = 'div.header_secondary_container';
    private shoppingCartBadge: string = 'span.shopping_cart_badge';    
    
    // ClickImage
    // Click Item Title
    // Click Add to Cart button

    //  //div[@class="inventory_item_name"][text()="Sauce Labs Bolt T-Shirt"]//ancestor::div[@class="inventory_item"]//button[contains(@id, "add-to-cart")]
    //  //div[@class="inventory_item_name"][text()="Sauce Labs Bolt T-Shirt"]//ancestor::div[@class="inventory_item"]//button[contains(@id, "remove")]

    constructor() {
        super();
    }

    private itemAddCartButton = (itemName: string) => `//div[@class="inventory_item_name"][text()="${itemName}"]//ancestor::div[@class="inventory_item"]//button[contains(@id, "add-to-cart")]`;
    private itemRemoveCartButton = (itemName: string) => `//div[@class="inventory_item_name"][text()="${itemName}"]//ancestor::div[@class="inventory_item"]//button[contains(@id, "remove")]`;

    async addToCartItem(itemName: string) {
        await this.driver.Page.click(this.itemAddCartButton(itemName));
    }

    async validateRemoveButton(itemName: string) {
        //await this.driver.Page.waitForTimeout(5000);
        return this.driver.isElementDisplayed(this.itemRemoveCartButton(itemName));
    }

    async getShoppingCartBadge() {
        return await this.driver.Page.innerText(this.shoppingCartBadge);
    }

    async clickShoppingCartBadge() {
        return await this.driver.Page.click(this.shoppingCartBadge);
    }

    async validateInventoryHeader() {
        return await this.driver.Page.isVisible(this.inventoryHeader);
    }
}
