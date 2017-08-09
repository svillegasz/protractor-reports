var Select = require('./components/select.page.js');

function CalculatorPage() {
    var firstElement = element(by.model('first'));
    var secondElement = element(by.model('second'));
    var operators = new Select(by.model('operator'));
    var history = element.all(by.repeater('result in memory'));
    var result = element(by.css('h2.ng-binding'));
    var goButton = element(by.id('gobutton'));

    var EC = protractor.ExpectedConditions;

    this.get = async () => {
        await browser.get('http://juliemr.github.io/protractor-demo/');
    }

    this.getResult = async () => {
        return await result.getText();
    }

    this.add = async (a, b) => {
        await firstElement.sendKeys(a);
        await secondElement.sendKeys(b);
        await this.selectAddOperator();
        await goButton.click();
    }

    this.sub = async (a, b) => {
        await firstElement.sendKeys(a);
        await secondElement.sendKeys(b);
        await this.selectSubOperator();
        await goButton.click();
    }

    this.mul = async (a, b) => {
        await firstElement.sendKeys(a);
        await secondElement.sendKeys(b);
        await this.selectMulOperator();
        await goButton.click();
    }

    this.div = async (a, b) => {
        await firstElement.sendKeys(a);
        await secondElement.sendKeys(b);
        await this.selectDivOperator();
        await goButton.click();
    }

    this.mod = async (a, b) => {
        await firstElement.sendKeys(a);
        await secondElement.sendKeys(b);
        await this.selectModOperator();
        await goButton.click();
    }


    this.selectAddOperator = async() => {
        await operators.click();        
        await operators.selectByValue('ADDITION').click();
    }

    this.selectSubOperator = async() => {
        await operators.click();
        await operators.selectByValue('SUBTRACTION').click();
        // await browser.wait(EC.presenceOf(element(by.css('.ng-touched')), 3000));
    }

    this.selectMulOperator = async() => {
        await operators.click();
        await operators.selectByValue('MULTIPLICATION').click();
        // await browser.wait(EC.textToBePresentInElementValue(operators, 'MULTIPLICATION'), 1000);
    }

    this.selectDivOperator = async() => {
        await operators.click();
        await operators.selectByValue('DIVISION').click();
    }

    this.selectModOperator = async() => {
        await operators.click();
        await operators.selectByValue('MODULO').click();
    }
}

module.exports = CalculatorPage;