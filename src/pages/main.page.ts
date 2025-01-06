import { expect , Locator , Page } from "@playwright/test";
import Wrapper from "../base/Wrapper";

export default class MainPage extends Wrapper {

    readonly dashboardButton: Locator; 
    readonly contributionsButton: Locator; 
    readonly categoryButton: Locator; 

    constructor(public page: Page){
        super(page);
        this.dashboardButton = this.page.locator('a[href="#/dashboard"]');
        this.contributionsButton = this.page.locator('a[href="#/contributions"]');
        this.categoryButton = this.page.getByRole('link', { name: ' Tipos de Categorias' });
    }

    async checkUserIsLogged(){
        return  this.page.url();
    }

    async switchToCategory(){
        await this.categoryButton.click();
    }

}