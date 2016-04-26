var express = require('express')
var morgan = require('morgan')
var mongoose = require('mongoose')
var db = require('./config/db')

var router = require('./app/model/todo-routes')
var bodyParser = require('body-parser')

//DB Connection
mongoose.connect( db.url, function( err, res ){
	if(err){
		console.log('Unable to Connect to the DB ' + err)
	} else {
		console.log('DB Connection Successfull')
	}
})

var app = express()

app.use(morgan('dev'))

app.use(bodyParser.urlencoded({ extended: true })); //This is necessary

app.use(bodyParser.json())

PORT = process.env.PORT || 3000

var routes =app.use('/api', router)

app.use(express.static( __dirname + '/public'))

/*app.get('/', function( req, res ){
	res.sendFile(__dirname + '/public/index.html');
})*/

app.listen( PORT, function(){
	console.log('Server Started on Port '+ PORT)
})

