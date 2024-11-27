describe("List Page Cases", () => {
  it("should verify data fetched from the API matches the app", async () => {
    // Step 1: Fetch API Data
    const axios = require("axios");
    const apiUrl = "https://interviewtestapi.azurewebsites.net/api/candidate";
    const apiResponse = await axios.get(apiUrl);
    const apiData = apiResponse.data.map(candidate => candidate.name); // Extract names

    // Step 2: Locate Rendered Data on App
    const renderedCandidates = await $$("//android.view.View[@scrollable='true']");
    const renderedData = await Promise.all(
    renderedCandidates.map(async item => await item.getText())
    );

    // Step 3: Verify Data Matches
    expect(renderedData).toEqual(apiData); // Simplified assertion
  });



});
