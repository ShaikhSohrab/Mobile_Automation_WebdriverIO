class MapScreenPage {
    // Locator Element Defined
    get mapViewButton(){
        return $("//android.widget.TextView[@text='Map']");
    }

    get searchBaronMap(){
        return $("//android.widget.EditText/android.view.View");
    }

    get sortButtonMap(){
        return $("android.widget.Button");
    }

    get locationIconInMap(){
        return $("//android.view.View[@enabled='true']")
    }

    get highlightedIconInMap(){
        return $("//android.view.View[@enabled='true']");
    }

    get mapViewLocator(){
        return $("//android.widget.RelativeLayout[@class='android.widget.RelativeLayout' and @displayed='true']");
    }

    searchResultLocatorMap(text){
        return $(`//*[contains(@text, "${text}")]`);
    }

    // Goto Map page and Enter text to search in map view
    async gotoMapPageAndEnterTextInSearch(text) {
        await this.mapViewButton.waitForDisplayed({timeout: 2000});
        await this.mapViewButton.click();
        await this.searchBaronMap.waitForDisplayed({timeout: 2000});
        await this.searchBaronMap.click();
        await driver.execute("mobile: type", {text});

        
    }

    // Verify if searched result is visible on screen
    async verifySearchResultOnMap(text) {
        const searchResult = await this.searchResultLocatorMap(text);
        await searchResult.waitForDisplayed({ timeout: 2000 });
        const isDisplayed = await searchResult.isDisplayed();
        return isDisplayed;
    }

    // Click on Map button function
    async clickOnMapButton() {
        await this.mapViewButton.waitForDisplayed({timeout:2000});
        await this.mapViewButton.click();
    }

    // Click on Sorting icon on top right corner of app
    async clickSortingOnMap() {
        await this.sortButtonMap.waitForDisplayed({timeout:2000});
        await this.sortButtonMap.click();
    }

    // Check location icon on map and click if Plate Number and Driver Name is visible on Map
    async clickOnHighlightIconInMap() {
        const mapIcon = await this.highlightedIconInMap;
        await mapIcon.waitForDisplayed({timeout: 2000});
        await mapIcon.click();
    }

    // CHeck if map is visible on screen
    async isMapViewVisible() {
        await this.mapViewLocator.waitForDisplayed({timeout:2000});
        return await this.mapViewLocator.isDisplayed();
    }
}

module.exports = new MapScreenPage(); 
