var mongoose = require('mongoose')

var Schema = mongoose.Schema

var appSchema = new Schema({
	task: String,
	completed: String
})

var todo = mongoose.model( 'todo', appSchema )

module.exports = todo
