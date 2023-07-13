import { expect , Locator , Page } from "@playwright/test";
import Wrapper from "../base/Wrapper";

export default class MainPage extends Wrapper {

    readonly usernameInput: Locator; //locator('[data-test="username"]')
    readonly passwordInput: Locator; //locator('[data-test="password"]')
    readonly loginButton: Locator; //locator('[data-test="login-button"]')
    readonly errorMessage: Locator; //locator('[data-test="error"]')
    readonly productsCategory: Locator; //getByText('Products')

    constructor(public page: Page){
        super(page);
        this.usernameInput = this.page.locator('[data-test="username"]');
        this.passwordInput = this.page.locator('[data-test="password"]');
        this.loginButton = this.page.locator('[data-test="login-button"]');
        this.productsCategory = this.page.getByText('Products');
    }

    async loginAsUser(username: string){
        await this.usernameInput.fill(username);
        await this.passwordInput.fill('secret_sauce');
        await this.loginButton.click();
        expect(await this.productsCategory.isVisible()).toBeTruthy();
        const pageURL = await this.page.url();
        expect(pageURL).toContain('inventory.html');
    }

}