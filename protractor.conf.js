exports.config = {
    // seleniumAddress: 'http://hub-cloud.browserstack.com/wd/hub',
    // seleniumAddress: 'http://ondemand.saucelabs.com:80/wd/hub',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    multiCapabilities: [
        {
            // 'browserstack.user': 'sebastianvillega1',
            // 'browserstack.key': 'HtxpWSuyMozywmFGzMFr',
            // sauceUser:'svillegasz',
            // sauceKey: '55265330-a8e0-4888-9ada-43fb70b39fef',
            browserName: 'chrome',
            shardTestFiles: true,
            maxInstances: 4,
        },
        {
            // 'browserstack.user': 'sebastianvillega1',
            // 'browserstack.key': 'HtxpWSuyMozywmFGzMFr',
            // sauceUser:'svillegasz',
            // sauceKey: '55265330-a8e0-4888-9ada-43fb70b39fef',
            browserName: 'firefox',
        }
    ],
    specs: [
        './tests/calculator.spec.js',
    ],
    plugins: [
        {
            path: 'scripts/protractor-e2e-coverage-custom.js'
        }
    ],
    SELENIUM_PROMISE_MANAGER: false,
}