exports.config = {
    seleniumAddress: 'http://hub-cloud.browserstack.com/wd/hub',
    // seleniumAddress: 'http://ondemand.saucelabs.com:80/wd/hub',
    // seleniumAddress: 'http://localhost:4444/wd/hub',
    multiCapabilities: [
        {
            'browserstack.user': 'sebastianvillega1',
            'browserstack.key': 'HtxpWSuyMozywmFGzMFr',
            // sauceUser:'svillegasz',
            // sauceKey: '55265330-a8e0-4888-9ada-43fb70b39fef',
            browserName: 'chrome',
            version: '60.0.3112',
            platform: 'WINDOWS',
            shardTestFiles: true,
            maxInstances: 4,
        },
        {
            'browserstack.user': 'sebastianvillega1',
            'browserstack.key': 'HtxpWSuyMozywmFGzMFr',
            // sauceUser:'svillegasz',
            // sauceKey: '55265330-a8e0-4888-9ada-43fb70b39fef',
            browserName: 'firefox',
            platform: 'WIN8'
        }
    ],
    specs: [
        './tests/**/*.spec.js',
    ],
    SELENIUM_PROMISE_MANAGER: false,
}