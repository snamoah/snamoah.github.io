angular.module('teamDividerApp', [])
	.controller('teamsController', ['$scope', function($scope) {

		var student_path = "/public/images/";
		$scope.students = [{name: "Ayo", path: student_path + "ayo.jpg"}, 
		{name: "Blessing Onomesino", path: student_path +"blessing.jpg"}, 	
		{name: "Esther Olatunde", path: student_path +"prince.jpg"}, 
		{name: "Babara Okoto", path: student_path +"babara.jpg"},
		{name: "Priscilla Hazel", path: student_path +"priscilla.jpg"},
		{name: "Prince Anim", path: student_path+"prince.jpg"},
		{name: "David Evhade", path: student_path +"david.jpg"},
		{name: "Kennedy Anyinatoe", path: student_path +"kennedy.jpg"},
		{name: "Ike Owoh", path: student_path +"ike.jpg"},
		{name: "Innocent Udeogu", path: student_path +"innocent.JPG"},
		{name: "Philip Nunoo", path: student_path +"philip.jpg"},
		{name: "Cassandra Sarfo", path: student_path +"cassandra.jpg"},
		{name: "Derek Frimpong", path: student_path +"derek.jpg"},
		{name: "Panin Tenkorang", path: student_path +"panin.jpg"},
		{name: "Paul Damalie", path: student_path +"paul.jpg"},
		{name: "Barnabas Ayinloya", path: student_path +"barnabas.jpg"},
		{name: "Laud Bruce Tagoe", path: student_path +"laudbruce.jpg"},
		{name: "Laud Bentil", path: student_path +"laudbentil.jpg"},
		{name: "Kwame Asiedu", path: student_path +"kwamea.jpg"},
		{name: "Kwame Yeboah", path: student_path +"kwamey.jpg"},
		{name: "Jerry King", path: student_path +"jerry.jpg"},
		{name: "Kelechi Uduagu", path: student_path +"kelechi.JPG"},
		{name: "Afi Kwao", path: student_path +"afi.jpg"},
		{name: "Moses Abubakari", path: student_path +"moses.jpg"},
		{name: "Benjamin Kissi", path: student_path +"ben.jpg"},
		{name: "Abideen Adeleye", path: student_path +"abideen.jpg"},
		{name: "Alexander Okereke", path: student_path +"alex.jpg"},
		{name: "Samuel Nkoom Amoah", path: student_path +"samuel.png"}];

		$scope.names = "";
		$scope.indexes = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28];


		
		$scope.generateTable = function(number) {
			$scope.indexes = $scope.randomize();
			$scope.names = [$scope.students[$scope.indexes[1]], $scope.indexes[1], number];
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