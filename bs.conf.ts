import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const config = {
    
    user: process.env.BROWSERSTACK_USERNAME || 'crysthelaparicio_lwgv4M',
    key: process.env.BROWSERSTACK_ACCESS_KEY || 'ybhNhhfnroG7n58gtr7c',
    hostname: 'hub.browserstack.com',
    services: [
      [
        'browserstack',
        {
          app: 'bs://8259afec36fb9be7e5c799b5eb2bf2a5739f1174',
          autoGrantPermissions: 'true',
          buildIdentifier: "${BUILD_NUMBER}",
          browserstackLocal: true
        },
      ]
    ],
    capabilities: [{
      'bstack:options': {
        deviceName: 'Samsung Galaxy S22 Ultra',
        platformVersion: '12.0',
        platformName: 'android',
      },
    },/* {
      'bstack:options': {
        deviceName: 'Google Pixel 7 Pro',
        platformVersion: '13.0',
        platformName: 'android',
      },
    },*/
    {
      'bstack:options': {
        deviceName: 'OnePlus 9',
        platformVersion: '11.0',
        platformName: 'android',
      },
    }],

    commonCapabilities: {
      'bstack:options': {
        projectName: "BrowserStack Sample",
        buildName: "bstack-demo",
        debug: true,
        networkLogs: true
      }
    },
    maxInstances: 2,

    //other config
    specs: [
      './features/**/*.feature'
    ],
    exclude: [
    ],
    autoCompileOpts: {
      autoCompile: true,
      tsNodeOpts: {
          project: './tsconfig.json',
          transpileOnly: true
      }
    },
    logLevel: 'info',
    bail: 0,
    baseUrl: '',
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    framework: 'cucumber',
    reporters: ['spec'],
    cucumberOpts: {
        require: ['./features/step-definitions/*.ts'],
        backtrace: false,
        requireModule: [],
        dryRun: false,
        failFast: false,
        snippets: true,
        source: true,
        strict: false,
        tagExpression: '',
        timeout: 60000,
        ignoreUndefinedDefinitions: false
    },
};
export { config };