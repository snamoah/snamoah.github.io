angular.module('notebookApp', [])
	.controller('mainController', ['$scope', '$http', '$templateCache', function($scope, $http, $templateCache) {
		$scope.names = "This is me";
		$http({method: "JSONP", url: "http://thomasgerrald.esy.es/index.php", cache: $templateCache})
		.success(function(data, status) {
			$scope.names = data;
		});
	}]);