import test from '../utils/fixtures';

test.describe('Main page', async () => {
    test.beforeEach(async ({page}) => {
        await page.goto('https://www.google.com');
    });

    test('should have the correct title', async ({mainPage}) => {
        await mainPage.checkURL();
    });
});

