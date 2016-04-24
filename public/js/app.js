angular.module('todoApp',[])
	.controller('todoCtrl', function( $scope, todoFactory ,$http ){
		$scope.task='task 1',
		$scope.formData={}

		todoFactory.getTodoList()
			.then(function(data){
				$scope.todos = data
			})

		$scope.createTodo = function(){
			$scope.count=0
			if($scope.formData.task ==null){
				$scope.message = "Your Task detail is required..."
				$scope.count=1
				todoFactory.getTodoList()
						.then(function(data){
							$scope.todos = data
					})
				return
			}
			$http.post('/api/todos/', $scope.formData)
				.then(function(response){
					$scope.todos = response.data
					$scope.formData={}
					console.log(response.data)
				}, function(response){
					console.log('Error')
				})
		}

		$scope.deleteTodo = function(id){
			$http.delete('/api/todos/'+id)
				.then(function(response){
					$scope.todos = response.data
					console.log(response.data)
				}, function(response){
					console.log('Error')
				})
		}
	})
	.factory('todoFactory', function( $http ){
		var fac = {};
		fac.getTodoList = function(){
			return $http.get('/api/todos/')
			.then(function( response ){
				return response.data;
			},function( response ){
				return "Something went wrong"
			});
		}
		return fac
	})

/*angular.module('getGithubUsers')
.service('getGithubUserService', function( $http ){
	this.fetchUsers = function(){
		return $http.get("https://api.github.com/users")
		.then(function(response){
			return response.data
		})
	}
})*/