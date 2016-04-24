var express = require('express')
var Todo = require('./todo-model')

var router = express.Router()

//Route middleware

router.use(function( req, res, next){
	console.log( "Middleware called" );
	next();
})

router.route('/todos')
	
	//GET - get Customer Details
	.get( function( req, res ){
		Todo.find(function( err, data){
			if(err)
				res.send(err)
			res.json(data)
		})
	})

	//POST - add data in customer collection
	.post( function(req, res){
		var todos = new Todo()
		todos.task = req.body.task
		console.log(todos.task)
		
		todos.completed = req.body.completed
		console.log(todos.completed)

		todos.save(function(err){
			if(err)
				res.send(err)
			Todo.find(function( err, data){
				if(err)
					res.send(err)
				res.json(data)
			})
		})
	})

router.route('/todos/:todo_id')
	//Get by Id
	.get(function( req, res ){
		Todo.findById(req.params.todo_id, function(err, data){
			if(err)
				res.send(err)
			res.json(data)
		})
	})

	//update the data by ID
	.put(function( req, res ){
		Todo.findById(req.params.todo_id, function(err, data){
			if(err)
				res.send(err)
			data.task = req.body.task
			data.save(function(err){
				if(err)
					res.send(err)
				res.json({"message":"Taks Details updated"})
			})
		})
	})

	.delete(function(req, res){
		Todo.remove({
			_id:req.params.todo_id
		}, function(err, data){
			if (err)
                res.send(err);

            Todo.find(function( err, data){
				if(err)
					res.send(err)
				res.json(data)
			})
		})
	})

module.exports = router