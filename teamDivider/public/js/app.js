angular.module('teamDividerApp', [])
	.controller('teamsController', ['$scope', function($scope) {

		var student_path = "/public/images/";
		$scope.students = [{name: "Ayo", path: student_path + "ayo.jpg"}, 
		{name: "Blessing", path: student_path +"blessing.jpg"}, 	
		{name: "Esther", path: student_path +"prince.jpg"}, 
		{name: "Babara", path: student_path +"babara.jpg"},
		{name: "Priscilla", path: student_path +"priscilla.jpg"},
		{name: "Prince", path: student_path+"prince.jpg"},
		{name: "David", path: student_path +"david.jpg"},
		{name: "Kennedy", path: student_path +"kennedy.jpg"},
		{name: "Ike", path: student_path +"ike.jpg"},
		{name: "Innocent", path: student_path +"innocent.JPG"},
		{name: "Philip", path: student_path +"philip.jpg"},
		{name: "Cassandra", path: student_path +"cassandra.jpg"},
		{name: "Derek", path: student_path +"derek.jpg"},
		{name: "Panin", path: student_path +"panin.jpg"},
		{name: "Paul", path: student_path +"paul.jpg"},
		{name: "Barnabas", path: student_path +"barnabas.jpg"},
		{name: "Laud Bruce", path: student_path +"laudbruce.jpg"},
		{name: "Laud Bentil", path: student_path +"laudbentil.jpg"},
		{name: "Kwame", path: student_path +"kwamea.jpg"},
		{name: "Kwame", path: student_path +"kwamey.jpg"},
		{name: "Jerry", path: student_path +"jerry.jpg"},
		{name: "Kelechi", path: student_path +"kelechi.JPG"},
		{name: "Afi", path: student_path +"afi.jpg"},
		{name: "Moses", path: student_path +"moses.jpg"},
		{name: "Benjamin", path: student_path +"ben.jpg"},
		{name: "Abideen", path: student_path +"abideen.jpg"},
		{name: "Alexander", path: student_path +"alex.jpg"},
		{name: "Samuel", path: student_path +"samuel.png"}];

		$scope.names = "";
		$scope.indexes = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28];


    $scope.show = false;

		$scope.generateTable = function(number) {
			var numberOfTeams = Math.floor($scope.students.length / number);

			$scope.indexes = $scope.randomize();
			//$scope.names = [$scope.students[$scope.indexes[1]], $scope.indexes[1], number, numberOfTeams];

			$scope.teams = [];

			var count = 0;
			for(var i = 0; i < number; i++) {
				var row = [];
				for(var j = 0; j < numberOfTeams; j++) {
					if(count < $scope.students.length) {
						row.push($scope.students[$scope.indexes[count]]);
					}
					count++;
				};
				$scope.teams.push(row);
			};

			$scope.names = $scope.teams;
      $scope.show = true;
		};

		$scope.displayIndexes = function() {
			return [$scope.randomize(), $scope.indexes.length, $scope.students.length] ;
		}

		$scope.randomize = function() {
			var i;

			//Here, we are randomly swapping indexes so we can use it when calling the students array
			for(i = 0; i < $scope.indexes.length; i++) {
				var index1 = Math.floor(Math.random() * $scope.indexes.length);
				var index2 = Math.floor(Math.random() * $scope.indexes.length);

				while(index1 == index2){
					index2 = Math.floor(Math.random() * $scope.indexes.length);	
				}

				var temp;
				temp = $scope.indexes[index1];
				$scope.indexes[index1] = $scope.indexes[index2];
				$scope.indexes[index2] = temp;
			};

			return $scope.indexes;
		};
	}]);
