var SelectWrapper = function(selector) {
    this.webElement = element(selector);
};
SelectWrapper.prototype.getOptions = async function() {
    return this.webElement.all(by.tagName('option'));
};
SelectWrapper.prototype.getSelectedOptions = async function() {
    return this.webElement.all(by.css('option[selected="selected"]'));
};
SelectWrapper.prototype.selectByValue = async function(value) {
    return await this.webElement.all(by.css('option[value="' + value + '"]')).click();
};
SelectWrapper.prototype.selectByPartialText = async function(text) {
    return await this.webElement.all(by.cssContainingText('option', text)).click();   
};
SelectWrapper.prototype.selectByText = async function(text) {
    return await this.webElement.all(by.xpath('option[.="' + text + '"]')).click();   
};
SelectWrapper.prototype.selectByKey = async function(text) {
    return await this.webElement.sendKeys(text);   
};


module.exports = SelectWrapper;