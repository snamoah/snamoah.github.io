angular.module('notebookApp', [])
	.controller('mainController', ['$scope', '$http', function($scope, $http) {
		$http.get("http://thomasgerrald.esy.es/index.php")
		.success( function(response) {
			$scope.names = response;
		});
	}]);