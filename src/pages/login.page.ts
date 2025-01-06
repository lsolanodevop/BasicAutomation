import { expect , Locator , Page } from "@playwright/test";
import Wrapper from "../base/Wrapper";

export default class LoginPage extends Wrapper {
        readonly form:Locator
        readonly emailInput: Locator;
        readonly passwordInput: Locator;
        readonly rememberMeCheckbox: Locator;
        readonly submitButton: Locator;

        constructor(public page:Page){
            super(page);
            this.form = this.page.locator('app-login div').filter({ hasText: 'Qubika ClubPor favor ingrese' }).first();
            this.emailInput = this.page.locator('input[formcontrolname="email"]');  
            this.passwordInput = this.page.locator('input[formcontrolname="password"]');  
            this.rememberMeCheckbox = this.page.locator('#customCheckLogin');  
            this.submitButton = this.page.locator('button[type="submit"]');  
        }
        

        async setEmail(email:string){
            await this.emailInput.fill(email);
        }
        async setPassword(password:string){
            await this.passwordInput.fill(password);
        }
        async submit(){
            await this.submitButton.click();
        }
    
}