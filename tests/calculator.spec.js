var CalculatorPage = require('./pages/calculator.page.js');

describe('Protractor dema calculator', () => {
    let page = new CalculatorPage();

    beforeEach( async () => {
        await page.get();
    });

    it('Should add properly', async () => {
        await page.add(3, 4);
        expect(await page.getResult()).toEqual('7');
    });

    it('Should substract properly', async () => {
        await page.sub(10, 7);
        expect(await page.getResult()).toEqual('3');
    });

    it('Should multiplicate properly', async () => {
        await page.mul(3, 4);
        expect(await page.getResult()).toEqual('12');
    });

    it('Should divide properly', async () => {
        await page.div(8, 2);
        expect(await page.getResult()).toEqual('4');
    });

    it('Should modulo properly', async () => {
        await page.mod(10, 3);
        expect(await page.getResult()).toEqual('1');
    });
});