describe('List Page Cases', () => {
    it('Test Search Functionality on List Screen', async () => {
        //Verify Search bar and search for text:
        const searchBar = await $('//android.widget.EditText/android.view.View')
        await searchBar.waitForDisplayed({timeout:2000});
        await searchBar.click();
        await driver.execute('mobile: type', { text: 'Joseph Owen' });
        await browser.pause(5000);
        
        //Verify if the searched result is same text
        const searchResult = await $(`//*[contains(@text, 'Joseph Owen')]`);
        await searchResult.waitForDisplayed({ timeout: 5000 });
    
        // Assert that the result is displayed
        const isDisplayed = await searchResult.isDisplayed();
        expect(isDisplayed).toBe(true);
    });


    it('Test Search Functionality on Map Screen', async () => {
        //Verify Search bar and search for text:
        const mapButton = await $('//android.widget.TextView[@text="Map"]');
        await mapButton.click();

        const searchBar = await $('//android.widget.EditText/android.view.View')
        await searchBar.waitForDisplayed({timeout:2000});
        await searchBar.click();
        await driver.execute('mobile: type', { text: 'Joseph Owen' });
        await browser.pause(5000);
        
        //Verify if the searched result is same text
        const searchResult = await $(`//*[contains(@text, 'Joseph Owen')]`);
        await searchResult.waitForDisplayed({ timeout: 5000 });
    
        // Assert that the result is displayed
        const isDisplayed = await searchResult.isDisplayed();
        expect(isDisplayed).toBe(true);
    });


    it('Test Sorting Functionality in List View', async () => {
        //find element by class name
        const sortingButton = await $('android.widget.Button');
        await sortingButton.waitForDisplayed({timeout:2000});

        //click 
        await sortingButton.click();
        await browser.pause(5000);
    
    });

    it('Test Sorting Functionality in Map View', async () => {
        //find element by class name
        const mapButton = await $('//android.widget.TextView[@text="Map"]');
        await mapButton.click();
        
        const sortingButton = await $('android.widget.Button');
        await sortingButton.waitForDisplayed({timeout:2000});

        //click 
        await sortingButton.click();
        await browser.pause(5000);
    
    });


    it('Test Switch List View to Map View', async () => {
        //Verify Map View screen 
        const mapViewButton = await $('//android.view.View[@bounds="[550,1950][1080,2160]"]');
        await mapViewButton.click();

        //Verify if screen is switched to Map view
        const mapView = await $('//android.widget.RelativeLayout[@class="android.widget.RelativeLayout" and @displayed="true"]');
        const confirmMapView = await mapView.isDisplayed();
        expect(confirmMapView).toBe(true);
        await browser.pause(2000);

        //List Button
        const listViewButton = await $('//android.view.View[@bounds="[0,1950][529,2160]"]');
        await listViewButton.click();

        //Verify if the screen is switched to List View
        const listView = await $('//android.view.View[@class="android.view.View" and @displayed="true"]');
        const confirmListView = await listView.isDisplayed();
        expect(confirmListView).toBe(true);
        await browser.pause(2000);
        
    })

    it('Verify if location icon change if user click on Driver details on Map screen', async () => {
       
        //Goto Map
        const mapButton = await $('//android.widget.TextView[@text="Map"]');
        await mapButton.click();
        await browser.pause(5000);

        //Click on highlighted icon on Map
        const mapIconPlateElement = await $('//android.view.View[@enabled="true"]');
        await mapIconPlateElement.click();
        await browser.pause(5000);
        const plateNumberMap = await mapIconPlateElement.getAttribute('content-desc');

    
        console.log(await $('//android.view.View[@enabled="true"]').getAttribute('content-desc'));
    
        console.log(await $('//android.view.View[@enabled="true"]').getAttribute('class'));
    });


    const axios = require('axios');
    const fs = require('fs');

    it.only('Send GET request and save response in json file', async () => {
        const apiUrl = 'https://interviewtestapi.azurewebsites.net/api/candidate'; 
        try {
            const { data } = await axios.get(apiUrl);
            console.log(data);

            fs.writeFileSync('apiResponseData.json', JSON.stringify(data, null, 2));
        } catch (error) {
            console.error('API request failed:', error.message);
        }
    });


})