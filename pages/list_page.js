class ListScreenPage {
    // Locator Element Defined
    get listViewButton(){
        return $('//android.view.View[@bounds="[0,1950][529,2160]"]');
    }

    get searchBar() {
        return $('//android.widget.EditText/android.view.View');
    }

    get searchResult() {
        return (text) => $(`//*[contains(@text, '${text}')]`);
    }

    get sortingButton() {
        return $('android.widget.Button');
    }

    get listViewLocator() {
        return $('//android.view.View[@class="android.view.View" and @displayed="true"]');
    }

    get clearSearchBar() {
        return $('//android.view.View[@content-desc="search close"]');
    }

    async clickOnListViewButton() {
        await this.listViewButton.waitForDisplayed({timeout: 2000});
        await this.listViewButton.click();
    }

    // Click on Search bar
    async openSearchBar() {
        await this.searchBar.waitForDisplayed({ timeout: 2000 });
        await this.searchBar.click();

    }

    // Enter Text in Search bar
    async searchForText(text) {
        await driver.execute('mobile: type', { text });
    }

    async clearSearch() {
        await this.clearSearchBar.click();
    }

    // Verify if Searched text is diaplayed in result
    async verifySearchResult(text) {
        const result = await this.searchResult(text);
        await result.waitForDisplayed({ timeout: 5000 });
        return result.isDisplayed();
    }

    async clickOnSortingButtonListPage() {
        await this.listViewButton.waitForDisplayed({timeout: 2000});
        await this.listViewButton.click();
        await this.sortingButton.waitForDisplayed({timeout: 2000});
        await this.sortingButton.click();
    }

    async isListViewVisible() {
        await this.listViewLocator.waitForDisplayed({timeout:2000});
        await this.listViewButton.isDisplayed();
    }
}

module.exports = new ListScreenPage();
