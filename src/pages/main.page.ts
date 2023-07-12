import { expect , Locator , Page } from "@playwright/test";
import Wrapper from "../base/Wrapper";

export default class MainPage extends Wrapper {

    constructor(public page: Page){
        super(page);
    }

    async checkURL(){
        const pageURL = await this.page.url();

        expect(pageURL).toBe('https://www.google.com/');
    }
}