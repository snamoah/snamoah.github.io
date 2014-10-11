angular.module('notebookApp', [])
	.controller('mainController', ['$scope', '$http', '$templateCache', function($scope, $http, $templateCache) {
		$scope.names = "This is me";
		$scope.status = "";
		$http({method: "JSONP", url: "http://thomasgerrald.esy.es/index.php", cache: $templateCache})
		.success(function (data, status) {
			$scope.names = data;
			$scope.status = status;
		})
		.error(function (data, status) {
			// body...
			$scope.names = "Could not get data";
			$scope.status = status;
		});
	}]);