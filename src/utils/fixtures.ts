import {test as baseTest} from '@playwright/test';

import mainPage from '../pages/main.page';
import loginPage from '../pages/login.page';
import categoryPage from '../pages/category.page';

const test = baseTest.extend<{
    mainPage: mainPage;
    loginPage: loginPage;
    categoryPage: categoryPage;
}>({
mainPage: async({page}, use) => {
    await use(new mainPage(page));

},
loginPage: async({page}, use) => {
    await use(new loginPage(page));
},
categoryPage: async({page}, use) =>{
    await use(new categoryPage(page));
}
});

export default test;
export const expect = test.expect;