# WebdriverIO and Appium Setup:

This document provides a step-by-step guide to set up WebdriverIO with Appium for mobile automation testing.

---

## Prerequisites

1. **NodeJS**

   - Install [NodeJS] from (https://nodejs.org/)
   - Verify installation in terminal: <br>
     `node -v` <br>
     `npm -v`

2. **Java - JDK**

   - Install JDK 
   - Set the `JAVA_HOME` environment variable.
   - Verify installation in terminal:<br>
     `java -version`
     

3. **Android SDK**

   - Install [Android Studio] from (https://developer.android.com/studio) and set up the Android SDK.
   - Add the following paths to your system's PATH:
     - `<ANDROID_HOME>/platform-tools`
     - `<ANDROID_HOME>/tools`
   - Verify by connecting device or emulator in terminal: <br>
     `adb devices`
     

4. **Appium**

   - Install Appium globally from terminal:<br>
     `npm install -g appium`

   - Verify installation in terminal:<br>
     `appium --version`


5. **Appium Inspector**

   - Install Inspector from (https://github.com/appium/appium-inspector/releases):
     
     You will see appium inspector icon on your desktop or under apps once it is installed in your system
     

---

## Project Setup

1. **Creating a NodeJS Project**

   - Create a new directory for your project and navigate into it:
     
     mkdir mobile_assignment
     cd mobile_assignment
     
   - Initialize a `package.json` file to install our dependencies in project:
     
     `npm init -y` <br>
     (here '-y' will accept all our dependencies)

2. **Install WebdriverIO CLI and Required Dependencies**

    - Install WebdriverIO CLI in terminal:<br>
     `npm install @wdio/cli`
     

   - Setup config in terminal:<br>
     `npx wdio config`

     - Choose the following options during configuration:
       - Where is your automation backend located? = On my local machine
       - Which framework do you want to use? = Mocha
       - Do you want to use a compiler? = No!
       - Where are your test specs located? = ./test/specs/**/*.js
       - Do you want WebdriverIO to autogenerate some test files? = No
       - Which reporter do you want to use? = spec
       - Do you want tp add a service to your test setup? = Appium


3. **Update ****`wdio.conf.js`**

   - Add the following Appium capabilities in wdio.config.js file:
    ```
     capabilities: [{
        "platformName": "Android",
        "appium:platformVersion": "10",
        "appium:deviceName": "3a25a609",
        "appium:app": "./app/android/app-debug.apk",
        "appium:automationName": "UiAutomator2",
        "appium:appPackage": "com.moovers.monitor",
        "appium:appActivity": "com.moovers.monitor.MainActivity"
     }],
    ```
   - NOTE: Before adding the capabilities to config file its good to run it in appium inspector to verify if the app is responsive and getting opened with this capabilities.
  

---

## Running Tests

1. **Start Appium Server**

   - Start Appium in a separate terminal:<br>
     `appium`
    

2. **Run Test Cases**

   - Run all test cases:<br>
     `npx wdio run wdio.conf.js`

  OR
     
   - Run a specific test file:<br>  
     `npx wdio run wdio.conf.js --spec ./test/specs/your_test_file.spec.js`
    

    NOTE: Makesure the appium and your wdio.conf.js both are having same port number i.e. `4723`
---

This setup ensures you have WebdriverIO and Appium ready for Android automation testing.






