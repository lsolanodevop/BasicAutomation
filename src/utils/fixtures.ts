import {test as baseTest} from '@playwright/test';

import mainPage from '../pages/main.page';

const test = baseTest.extend<{
    mainPage: mainPage;
}>({
mainPage: async({page}, use) => {
    await use(new mainPage(page));
}
});

export default test;
export const expect = test.expect;