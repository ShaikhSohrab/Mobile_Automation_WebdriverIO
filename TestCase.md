Manual Test Cases:


|TestCase No. | Test Scenario | Precondition | Steps | Expected Result | Actual Result |
|-------------|---------------|--------------|-------|-----------------|---------------|
01  |Validate API Data    |                  |Hit the API and check the responce| The Api should fetch user data |
02  |Verify if the data fetched on Mobile App is correct and as per data on API| App should be installed on Mobile| 1. Open app and login 2. Check the fetched data | The Data Feteched on Mobile should be correct as on API|  |
03 | Verify if user is landed on List View screen |  | 1. Open App | The app should land user on List screen when ever user open app.|
04 | Verify if user can see sort button on top right corner of the screen | | 1. Open app,<br> 2. Observe the top right corner of app | The top right corner of the app should have a sort button|
05 | Verify if the sort button on top right corner is clickable |  | 1. Open app,<br> 2. Click on sort button on top right corner of screen, 3. Observe if the sort button is clickable | The sort button should be clickable |
06 | Verify if user click twice on sort button, the sort should reset the list view data |  | 1. Open app,<br> 2. Click on Sort icon,<br> 3. Click again on sort icon,<br> 4. Observe the list | 
07 | Verify if the list view is scrollable |  | 1. Open app,<br> 2. Scroll down on List View screen,<br> 3. Observe if the list is scrollable | The list view should be scrollable both upward and downard 
08 | Verify if there is App Title as Truck Monitor on the middle of the screen | | 1. Open app,<br> 2. Check if the app Title is available as "Truck Monitor" | The App should have a title as "Truck Monitor" |  |
09 | Verify if the app has search bar on the top of the screen |  | 1. Open app,<br> 2. Observe if the app has search bar on the top of the screen Middle. | The app should have search bar on the middle top of the screen   | |
10 | Verify if the search bar is clickable and user is able to input value in it |  |  1. Open app,<br> 2. Click on search bar,<br> 3. Input value as "Methue" | The search bar should be clickable and user should be able to enter value |  |
11 | Verify if the result is shown as per the text entered in the search bar |  | 1. Open app,<br> 2. Click on Search Bar,<br> 3. Input Value in search bar,<br> 4. Observe the data available after entering text | The app should show the result based on the value entered in the search bar |  |
12 | Verify if the user search for something that is not in list |    |1. Open App,<br>2. Click on Serchbar and enter "Test", <br> 3. Observe the result. | If there is no data as per the dearched text, the user should see "No items to display" message on the middle of the screen.
13 | Verify if the clear icon function is working in the searchbar | |1. Open App, <br> 2. Click on searchbar, <br> 3. Enter some text and click on 'x' icon in search bar, <br>4. Observe if the entered text in search bar is claered|
14 | Verify if the search functionality is working on Map page as well |  | 1. Open App, <br> 2. Click on Map, <br> 3. Search for a driver name, <br> 4. Verify if the result is shown on map view screen |
15 | Verify if the all users data is available in the list. i.e. Profile Picture, Plate no., Driver Name, Location and Last Update  |  | 1. Open App,<br> 2. Observe the data in List view and Map view | The Truck data available in the app should have Profile Picture, Plate No., Driver Name, Location and Last Update 
16 | Verify if app has 2 section on the bottom navigation bar i.e. List and Map |  |1. Opem app and check | The app should have 2 section on bottom Navication bar i.e. List and Map |
17 | Verify if both option is clickable |  | 1. Open App, <br> 2. Click on Map, <br> 3. Observe the bevahour, <br> 4. Click on List, <br> 5. Observe the behaviour. | Both List and Map should be clickable and should change the view state of data.|
18 | Verify if user click on Map the view should change from list to map view |  | 1. Open App, <br> 2. Click on Map, <br> 3. Observe the bevahour, <br> 4. Click on List, <br> 5. Observe the behaviour. | If user click on Map the list view should changed to map view|
19 | Verify if app properly handles switching between tabs multiple times  |  | 1. Open App, <br> 2. Click on Map, <br> 3. Observe the bevahour, <br> 4. Click on List, <br> 5. Observe the behaviour, <br> 6. Repeat Step 2 and 4 for few times. | Even if the user swict multiple times the transaction should be smooth and should not break|
20 | Verify if user is in map view, the Driver's tile on bottom of screen should be scrolled toward left or right or vice-versa | |1. Open App, <br> 2. Click on Map, <br> 3. Scroll the data tile from left to right or vice-versa, <br> 4. Observe if the tile is scrollable in both direction.| The map view data tile should allowed to be scrolled horizontally |
21 | Verify if user is able to see map on screen | | 1. Open App, <br> 2. Click on Map, <br> 3. Observe if the map is available on screen | When ever user click on map the screen  should have a map on screen |
22 | Verify if user is able to interact with map |  | 1. Open App, <br> 2. Click on Map, <br> 3. Pinch-in or Pinch out or scroll on map, <br> 4. Observe if the map is responsive | The user should be able to interact with the map in app smoothly.| 
23 | Verify if user scroll right/Left to other driver and clicks on any driver tile, the map should highlight that drivers location on map. | | 1. Open App, <br> 2. Click on Map, <br> 3. Scroll the list horizontally, <br> 4. Click on any driver name, <br> 5. Observe if the pointer on map is updated as per clicked driver name. | The horizontal scroll should work smoothly and if user click on any tile the location should be udated as per selected tile's data|
24 | Verify if there is no UI break if user rotate phone to landscape mode | The portraite mode should be turned off from device settings | 1. Open App, <br> 2. Rotate the device to landscape mode, <br> 3. Observe the app behaviour | The app should handel the landscape mode cases efficiently and should not break the UI |
25 | verify if there is no Network connected to mobile app |Disconnect the device Network | 1. Open App, <br> 2. Observe the app | The app should handle the no network case by showing a message on screen with a try again button|
26 | Verify if the mobile is handeling the API error messages | API throwing any error lets say 500| 1. Open app, <br> 2. Observe the app behaviour. | The user should see a message to try again in sometime on screen|
27 | Verify if app automatically refreshes data when reopened |Open app and keep it in background | 1. Open app, <br> 2. Observe if the data is fetched and updated | If user keep app in background and open again the data on the app should be updated.
28 | Verify if the app allows retrying API fetch after failure | API failure | 1. Open App, <br> 2. Observe the behaviour | If the api is throwing any error the app should try to reach the api 3 times, if it failes all 3 times the user should see a message for user for the situation. |





