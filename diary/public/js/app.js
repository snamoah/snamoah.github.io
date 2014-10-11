angular.module('notebookApp', [])
	.controller('mainController', ['$scope', '$http', '$templateCache', function($scope, $http, $templateCache) {
		$scope.names = "This is me";
		$scope.status = "";
		$http.post("http://thomasgerrald.esy.es/test.php", {test: "test"})
		//$http.post({method: "JSONP", url: "http://thomasgerrald.esy.es/index.php", cache: $templateCache})
		.success(function (response) {
			$scope.names = response;
			//$scope.status = status;
		});
		// .error(function (data, status) {
		// 	// body...
		// 	$scope.names = "Could not get data";
		// 	$scope.status = status;
		// });
	}]);