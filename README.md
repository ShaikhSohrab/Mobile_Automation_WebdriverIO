# WebDriverIO Mobile Testing Project
  The test was created on Windows system so all the following process listed is as per windows and using Android device, if your system is Mac or Lenix please refer Webdriverio website : https://webdriver.io/docs 

---

## Prerequisites
Before setting up and running the tests, ensure the following dependencies are installed:

1. **Node.js**
2. **Java Development Kit**
3. **Android Studio**
4. **Android SDK**
5. **Appium**
6. **WebDriverIO**
7. **Devices or emulators configured for testing**

---

## Setup Instructions

## 1. Clone the Repository:

```bash
git clone <repository-url>
cd <repository-directory>
```
- GitHub Repo : https://github.com/ShaikhSohrab/Mobile_Automation_WebdriverIO
- GitLab Repo : https://gitlab.com/sohrabofficial97/mobile_automation_assignment#


## 2. Install Dependencies:
Run the following command to install all required Node.js dependencies (run following command in terminal):
```bash
npm install
```

## 3. Configure Environment
- **Appium Configuration**: Ensure the Appium server is running (Run following command in terminal to start Appium Server).
  ```bash
  appium
  ```
## 4. Appium Inspector:
- a. Start the Appium server by running following command in terminal:
```bash
appium
```
- b. Open Appium Inspector and Create a Capability Builder.

- c. Update the `wdio.conf.js` file to point to the appropriate capabilities for your device/emulator:
  - **Android**: 
    ```
        "platformName": "Android",
        "appium:platformVersion": "<Enter Your Android Version of Your Phone/Emulator>",
        "appium:deviceName": "<Enter Your Device Name>",
        "appium:app": "./app/android/app-debug.apk",
        "appium:automationName": "UiAutomator2",
        "appium:appPackage": "com.moovers.monitor",
        "appium:appActivity": "com.moovers.monitor.MainActivity"
    ```

---

## 5. Run All Tests
Execute the test suite using WebDriverIO:
```bash
npx wdio wdio.conf.js
```

### Run a Specific Test File
```bash
npx wdio run wdio.conf.js --spec ./test/specs/<test-file>.js
```
---

### Generate HTML Report
This project uses the `allure-reporter` plugin to generate reports.
1. **Run Tests:**
   ```bash
   npx wdio run wdio.conf.js
   ```
2. **Generate Report:**
   ```bash
   allure generate ./allure-results --clean
   allure open
   ```
---

## Limitations
1. The tests are designed for a specific Android device configuration and may require updates for other devices or versions.
2. Compatibility with specific versions of Appium, WebDriverIO, and Android tools may require frequent updates.

---

## Troubleshooting

- **Appium Server Not Running**
  Start the Appium server using `appium` before running tests.

- **Emulator Issues**
  Verify that the emulator starts correctly by running `adb devices` to ensure the device is listed.

---