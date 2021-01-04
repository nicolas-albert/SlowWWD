exports.config = {  
    capabilities: {
        'browserName': 'firefox'
        
    },
    baseUrl: 'https://test-convertigo.convertigo.net/convertigo/projects/C8Oforms/DisplayObjects/mobile/index.html',
    specs: [
        'src/**/*.tests.js'
    ],
    seleniumAddress: 'http://localhost:4444/wd/hub',
    jasmineNodeOpts: {
        isVerbose: true,
    }
};