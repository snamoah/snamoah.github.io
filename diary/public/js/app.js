angular.module('notebookApp', [])
	.controller('mainController', ['$scope', '$http', '$templateCache', function($scope, $http, $templateCache) {
		$scope.names = {name: "test", text: "test"};
		$scope.status = "";

		var url = "http://thomasgerrald.esy.es/test.php";
		$http.get(url+"?first_load=JSON_CALLBACK")
		//$http.post({method: "JSONP", url: "http://thomasgerrald.esy.es/index.php", cache: $templateCache})
		.success(function (data) {
			$scope.names = data;
			$scope.noteId = data['id'];
			$scope.content = data['text'];
			//$scope.status = status;
		});
		// .error(function (data, status) {
		// 	// body...
		// 	$scope.names = "Could not get data";
		// 	$scope.status = status;
		// });

		$scope.createNotebook =  function() {
			$http.get(url+"?create=JSON_CALLBACK")
			.success(function (data) {
				$scope.names = data;
			});
		};

		$scope.saveNotes = function() {
			$http({
				url: "http://thomasgerrald.esy.es/save.php",
				method: "POST",
				data: {id: $scope.noteId, text: $scope.content},
				transformRequest: function(obj) {
			        var str = [];
			        for(var p in obj)
			        str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
			        return str.join("&");
			    },
				headers: {'Content-Type': 'application/x-www-form-urlencoded'}
			}).
			success(function(data) {
				console.log("It sent it: " + data);
			});
		};
	}]);