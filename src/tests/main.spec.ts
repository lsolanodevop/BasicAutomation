import test from '../utils/fixtures';

test.describe('Sauce Demo Tests', async () => {
    test.beforeEach(async ({page}) => {
        await page.goto('https://www.saucedemo.com/');
    });

    test.only('Should be able to login with a standard user', async ({mainPage}) => {
        await mainPage.loginAsUser('standard_user');
    });
    test('Should be able to login with a locked_out_user user', async ({mainPage}) => {
        await mainPage.loginAsUser('locked_out_user');
    });
    test('Should be able to login with a problem_user', async ({mainPage}) => {
        await mainPage.loginAsUser('problem_user');
    });
    test('Should be able to login with a performance_glitch_user', async ({mainPage}) => {
        await mainPage.loginAsUser('performance_glitch_user');
    });
});

