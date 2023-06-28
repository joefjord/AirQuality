# AirQuality
Application to allow the public to view high resolution, local air quality data and be alerted to high concentrations of dangerous particulate matter.

# Project Status: Active

# The Software Stack
This project is broken into three main portions from our initial development perspective. Frontend, Backend, Data Presentation, and Database.
### Frontend
Our frontend is built off of Bootstrap, as it allowed for simple and stlyish templates for use in our headers, footers, and bodies. These elements are very easy to look at and change if needed. Overall the front-end bootstrap elements are not crucial to the functioning of this application and can be easily changed and removed in the future. Overall we utilized EJS to make the application templated internally. This way we only needed one header and a couple footers. All EJS files are stored in the `views` folder.
The `public` folder, as standard, contains our CSS and JS files.
### Backend
The backend of this project is built on NodeJS. This is pretty standard for most web applications and we attempted to use code that was pretty textbook to avoid confusion in the future.
The server initialization file is `server.js`, it contains the main server code.
The file `app.js` contains all of the routing and other functionality that the server utilizes.
The file `grab.js` is meant to be utilized as a CRON Job. A cron job will run the grab.js file automatically after a certain time interval has passed (i.e. 30 minutes). The function of this file is to locate the newest file in a specific folder and then parse it for input into the Database.
### Database
The database used in this project is SQLite3, and is implimented using the node_module `better-sqlite3`. This is a relatively simple module. Files pertaining to the database will be found in the `Database` file.
Here is a brief for each file:
-- `airQuality.db` is the actual data stored in the database. 
-- `db.js` is a required file that probably will not need to be edited.
-- `dbModel.js` contains the functions that allow for pulling data from and inserting data into the DB.
-- `schema.sql` contains the sql layout of the db
### Data Presentation.
The data presentation is done by using a node_module called `ChartJS`. This allows us to generate charts depicting data on page-load rather than generating charts as images and then loading them. The benefit of this is that less storage space is used to store chart images, and also the charts are now interactable. The code for this is contained in the `app.js` file as well as the `chartGraph.js` file in the public folder. 

## Basic Overview
About every hour the server will recieve an FTP push from Aeroqual (assuming that the sensors are functioning). This push will contain a CSV file containing the previous hour's worth of data. If the sensors go down of the FTP push fails, the push will not complete. However once a push is sucessful, that push's CSV file will contain all of the data that would have been transmitted (if it was recorded) in the meantime.
Then, the `grab.js` file will automatically check every hour (assuming the CRON job is set up correctly) for a new CSV file, and will then retrieve the data and insert it into the database.
Finally, once the page containing the data graph is loaded, the server will pull the previous 5 hours worth of data, and then graph it using ChartJS.

# UI
<a href="https://xd.adobe.com/view/917ea09d-5f70-4792-bc36-fe027d7f49e4-c42d/?fullscreen" target="_blank">Adobe XD prototype (external link)</a><br><br>
<img width="500" alt="BreatheEasy-thumb" src="https://github.com/joefjord/AirQuality/assets/20195415/c199d1d4-9086-4642-88b9-4887ec519f81">
