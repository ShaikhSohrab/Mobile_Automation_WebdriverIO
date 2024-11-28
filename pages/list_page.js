class ListScreenPage {
    // Locator Element Defined
    get listViewButton(){
        return $("//android.view.View[@bounds='[0,1950][529,2160]']");
    }

    get searchBar() {
        return $("//android.widget.EditText[@enabled='true']");
    }

    get searchResult() {
        return (text) => $(`//*[contains(@text, '${text}')]`);
    }

    get sortingButton() {
        return $("android.widget.Button");
    }

    get listViewLocator() {
        return $("//android.view.View[@class='android.view.View' and @displayed='true']");
    }

    get clearSearchBar() {
        return $("//android.view.View[@content-desc='search close']");
    }

    // Click on List Button on bottom Navigation bar
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
        await driver.execute("mobile: type", { text });
    }

    // Clear Text from Search bar
    async clearSearch() {
        await this.clearSearchBar.click();
    }

    // Verify if Searched text is diaplayed in result
    async verifySearchResult(text) {
        const result = await this.searchResult(text);
        await result.waitForDisplayed({ timeout: 5000 });
        return result.isDisplayed();
    }

    // Verify Sort Button Click
    async clickOnSortingButtonListPage() {
        await this.listViewButton.waitForDisplayed({timeout: 2000});
        await this.listViewButton.click();
        await this.sortingButton.waitForDisplayed({timeout: 2000});
        await this.sortingButton.click();
    }

    // Verify list is visible
    async isListViewVisible() {
        await this.listViewLocator.waitForDisplayed({timeout:2000});
        await this.listViewButton.isDisplayed();
    }
}

module.exports = new ListScreenPage();
