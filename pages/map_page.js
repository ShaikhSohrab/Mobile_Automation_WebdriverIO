class MapScreenPage {
    get mapViewButton(){
        return $('//android.widget.TextView[@text="Map"]');
    }

    get searchBaronMap(){
        return $('//android.widget.EditText/android.view.View');
    }

    get sortButtonMap(){
        return $('android.widget.Button');
    }

    get locationIconInMap(){
        return $('//android.view.View[@enabled="true"]')
    }

    get highlightedIconInMap(){
        return $('//android.view.View[@enabled="true"]');
    }

    get mapViewLocator(){
        return $('//android.widget.RelativeLayout[@class="android.widget.RelativeLayout" and @displayed="true"]');
    }

    searchResultLocatorMap(text){
        return $(`//*[contains(@text, '${text}')]`);
    }

    async gotoMapPageAndEnterTextInSearch(text) {
        await this.mapViewButton.waitForDisplayed({timeout: 2000});
        await this.mapViewButton.click();
        await this.searchBaronMap.waitForDisplayed({timeout: 2000});
        await this.searchBaronMap.click();
        await driver.execute('mobile: type', {text});

        
    }

    async verifySearchResultOnMap(text) {
        const searchResult = await this.searchResultLocatorMap(text);
        await searchResult.waitForDisplayed({ timeout: 2000 });
        const isDisplayed = await searchResult.isDisplayed();
        return isDisplayed;
    }

    async clickOnMapButton() {
        await this.mapViewButton.waitForDisplayed({timeout:2000});
        await this.mapViewButton.click();
    }

    async verifySortingOnMap() {

        await this.sortButtonMap.waitForDisplayed({timeout:2000});
        await this.sortButtonMap.click();
    }

    async clickOnHighlightIconInMap() {
        const mapIcon = await this.highlightedIconInMap;
        await mapIcon.waitForDisplayed({timeout: 2000});
        await mapIcon.click();
    }

    async isMapViewVisible() {
        await this.mapViewLocator.waitForDisplayed({timeout:2000});
        return await this.mapViewLocator.isDisplayed();
    }
}

module.exports = new MapScreenPage(); 
