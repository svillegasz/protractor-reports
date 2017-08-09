function Select(locator) {
    this.webElement = element(locator);

    this.selectByValue = (value)=>{
        return this.webElement.all(by.css('option[value="' + value + '"]'));
    }

    this.click = () => {
        this.webElement.click();
    }
}

module.exports = Select;