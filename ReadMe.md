
1) npm init
	# This will create package.json file

2) mkdir public
	# To store all the angular and front end stuff
	cd public, mkdir libs (we will put front end dependencies here)

	we will create "index.html" page. This wil be our serving page when the app loads.

	create directories for storing js and css files
	mkdir js
	mkdir css

3) mkdir app
	# To Store backend

4) npm install bower --save
	# Bower to manage front end dependencies

5) Create the file .bowerrc
	# Tells bower where to install dependencies
		In our case, we will put in public/libs
		Step 7 will put dependencies here

6) bower init
	This will create "bower.json" file.
	This will tell bower which files we need

7) bower install angular --save
   bower install angular-route.js --save

8) Now we will create file "server.js"
	where we will use node.js/express to start a server.

9) npm install express --save
	In server.js, add below lines.

	=========
	var express = require('express')
	var app = express()
	PORT = process.env.PORT || 3000
	
	app.listen( PORT, function(){
		console.log('Server Started on Port '+ PORT)
	})
	=========

10) Now run "node server.js"
	Congrates, you started your first express server

11) Open your browser to goto "http://localhost:3000/"
	You will get "Cannot GET /". We will serve a page latter
	Bedore that we will add a logger middleware

12) We will user "morgan"
	npm install morgan --save

13) and use it is server.js
	var morgan = require('morgan')
	var app = express()
	app.use(morgan('dev'))

	Now when you restart the server and goto http://localhost:3000/,
	you will get 404 in the server logs

14) Now We will serve our index.html page when the server loads
	GET / 404 4.313 ms - 13

15) Directories fo backend
	app
		model
			app.js --> To handle CRUD
	config
		db.js

16) npm install mongoose --save

17) mongod --> Start the Mongodb server
	mongo --> mongo client

18) use meanDb