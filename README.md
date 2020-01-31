# MyLayer
AppBirdCoffee

Hi Used libraries: 
Angular, ionic, node.js , cordova 

Data-base service: Data-base service is processing all data and local-storag. The data is a object array that stores name, rarity, note and geolocation. Download function adds data to object array. Storage function saves data locally and getSavetData returns stored data if stored data is not empty. Upload function returns object array. Data-base gets new observations from Add-post page and send’s it to home page. 


Home-Page: Home-page is users landing page where user can see all stored and added data “observations”. Home page communicates whit Data-base to get data. Home page has sorting function that gets char from users input (ion-select) and sorts it by the command. GoToAdd is function to move user to Add-post page.

Add-Post
Add-post page do not get data from Data-base it only sends data to Data-base. Add-Post page listen users inputs and after sending data it will return user to Home-page whit new post. User can go back whit out sending post just by pressing back-button. 


Example: When user enters Home-page page will load all local-storage data from data-base and that data-base data will be displayed to user. If user wants to add post user just clicks add post button and will be sanded to Add-post page. In Add-post page script will listen users inputs and by pressing send data will be sanded to Data-storage and user will be send back to home-page. Add-Post----(DATA)---- >Data-base----(DATA)---- >Home-page


Abought me: I must say project was fun to make and I learn allot. Project take much more time that I was intended from the start for two reasons 1) I wanted to do dynamic storage service and 2) I never used ionic before. Luckily ionic is like easy peasy HTML vanilla, but still much to learn that’s why I played around whit it like seen in the app. I wish to do all the extra stuff but i just dont have spear time in life right now. I have some experience whit angular, css, HTML and js. Usually I code C# for my favourite unity platform. I wish I hear back from Mukana team in future. At leas hear some feedback. 

-Yes 
-I needed it 
-Elk
