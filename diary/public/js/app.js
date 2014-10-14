angular.module('notebookApp', [])
	.controller('mainController', ['$scope', '$http', '$templateCache', function($scope, $http, $templateCache) {
		$scope.status = "";
		var url = "http://thomasgerrald.esy.es/test.php";

 		//notebook lists
		$http.get(url+"?lists=JSON_CALLBACK").
		success(function (data) {
			$scope.lists = data;
		}).
		error(function (data) {
			console.log("Could not get lists of notebooks: " + data);
		});
		
		//This runs for first load
		$http.get(url+"?first_load=JSON_CALLBACK")
		.success(function (data) {
			$scope.noteId = data['id'];
			$scope.content = data['text'];
		});

		//Create notebook function
		$scope.createNotebook =  function() {
			$http.get(url+"?create=JSON_CALLBACK")
			.success(function (data) {	
				$scope.noteId = data['id'];
				$scope.content = data['text'];
			}).
			error(function (data) {
				console.log("Could not create notebook: " + data);
			});
		};

        //save notes function
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

		$scope.selectNotebook = function(id) {
			$http.get(url+"?id=" + id).
			success(function (data) {
				$scope.noteId = data['id'];
				$scope.content = data['text'];
			});
		}
	}]);