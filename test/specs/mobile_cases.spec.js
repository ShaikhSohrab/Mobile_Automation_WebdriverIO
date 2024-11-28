// Import page class created in Pages folder
const ListScreenPage = require('../../pages/list_page');
const MapScreenPage = require('../../pages/map_page');

describe("Mobile Cases", () => {
    it("Test Search on List Screen", async () => {

        // Use ListScreenPage class to perform Search action
        await ListScreenPage.openSearchBar();
        await ListScreenPage.searchForText("Joseph Owen");

        // Verify if the searched result is the same as what user searched
        const isSearchResultDisplayed = await ListScreenPage.verifySearchResult("Joseph Owen");
        expect(isSearchResultDisplayed).toBe(true);

        // Clear Search
        await ListScreenPage.clearSearch();

        //Hide Keyboard after the test is executed, to avoid failure of next case
        await driver.execute("mobile: hideKeyboard");
        
    });


    it("Test Search Functionality on Map Screen", async () => {
        const searchTextMap = "Joseph Owen";

        await MapScreenPage.gotoMapPageAndEnterTextInSearch(searchTextMap);
        
        const isMapResultDisplayed = await MapScreenPage.verifySearchResultOnMap(searchTextMap);
    
        expect(isMapResultDisplayed).toBe(true);

        await ListScreenPage.clearSearch();

        await driver.execute("mobile: hideKeyboard");
    });


    it("Test Sorting Functionality in List View", async () => {
        await ListScreenPage.clickOnSortingButtonListPage();
        await browser.pause(5000);
    
    });

    it("Test Sorting Functionality in Map View", async () => {
        await MapScreenPage.clickOnMapButton();
        await MapScreenPage.clickSortingOnMap();
        
    });


    it("Test Switch List View to Map View", async () => {
        //Verify Map View screen 
        await MapScreenPage.clickOnMapButton();

        //Verify if screen is switched to Map view
        await MapScreenPage.isMapViewVisible();

        //List Button
        await ListScreenPage.clickOnListViewButton();

        //Verify if the screen is switched to List View
        await ListScreenPage.isListViewVisible();
        
    })

    it("Verify if location icon is clickable on Map screen", async () => {
       
        //Goto Map
        await MapScreenPage.clickOnMapButton();

        //Click on highlighted icon on Map
        await MapScreenPage.clickOnHighlightIconInMap();
    });

    it("Send GET request and save response in json file", async () => {
        const apiUrl = "https://interviewtestapi.azurewebsites.net/api/candidate"; 
        try {
            const { data } = await axios.get(apiUrl);
            console.log(data);

            fs.writeFileSync("apiResponseData.json", JSON.stringify(data, null, 2));
        } catch (error) {
            console.error("API request failed:", error.message);
        }
    });

    it("verify data fetched from the API", async () => {
        const axios = require("axios");
        const fs = require("fs");
    
        try {
            // Fetch data from the API
            const { data } = await axios.get("https://interviewtestapi.azurewebsites.net/api/candidate");
    
            // Save API data to a JSON file
            fs.writeFileSync("apiData.json", JSON.stringify(data));
    
            console.log("API data saved to apiData.json");
        } catch (error) {
            console.error("Error:", error.message);
        }
      });


});
