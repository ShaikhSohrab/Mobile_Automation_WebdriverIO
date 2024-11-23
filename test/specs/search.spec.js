describe('Android App Testing', () => {
    it('Test Search Functionality', async () => {
        //find element by xPath
        const searchBar = await $('//android.widget.EditText/android.view.View')

        await searchBar.waitForDisplayed({ timeout: 5000 });
        
        await searchBar.click();
        
        await driver.execute('mobile: type', { text: 'Caleb' });

        await browser.pause(5000);
        
    });

    it('Test Sorting Functionality', async () => {
        //find element by class name
        const sortingButton = await $('android.widget.Button');

        console.log(sortingButton);

        //click 
        await sortingButton.click();

        await browser.pause(5000);

        
    });


    it.only('Test Switch List View to Map View', async () => {
        //find element 
        const mapViewButton = await $('//android.view.View[@bounds="[550,1950][1080,2160]"]');

        await mapViewButton.click();

        await browser.pause(2000);
        
        //List Button
        const listViewButton = await $('//android.view.View[@bounds="[0,1950][529,2160]"]');

        await listViewButton.click();

        await browser.pause(2000);

        
    })
})