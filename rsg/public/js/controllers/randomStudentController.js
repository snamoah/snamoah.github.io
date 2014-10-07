function randomStudentController($scope) {
	$scope.path = "public/images/";
	$scope.visible = false;
	$scope.students = [{name: "Ayodele", path: $scope.path + "ayo.jpg"}, 
		//{name: "Blessing Onomesino", path: $scope.path +"blessing.jpg"}, 	
		//{name: "Esther Olatunde", path: $scope.path +"esther.jpg"}, 
		//{name: "Babara Okoto", path: $scope.path +"babara.jpg"},
		{name: "Priscilla Hazel", path: $scope.path +"priscilla.jpg"},
		{name: "Prince Anim", path: $scope.path+"prince.jpg"},
		{name: "David Evhade", path: $scope.path +"david.jpg"},
		//{name: "Kennedy Anyinatoe", path: $scope.path +"kennedy.jpg"},
		{name: "Ike Owoh", path: $scope.path +"ike.jpg"},
		//{name: "Innocent Udeogu", path: $scope.path +"innocent.jpg"},
		//{name: "Philip Nunoo", path: $scope.path +"philip.jpg"},
		//{name: "Cassandra Sarfo", path: $scope.path +"cassandra.jpg"},
		{name: "Derik Frimpong", path: $scope.path +"derek.jpg"},
		{name: "Panin Tenkorang", path: $scope.path +"panin.jpg"},
		{name: "Paul Damalie", path: $scope.path +"paul.jpg"},
		//{name: "Barnabas Ayinloya", path: $scope.path +"barnabas.jpg"},
		//{name: "Laud Bruce Tagoe", path: $scope.path +"laudbruce.jpg"},
		//{name: "Laud Bentil", path: $scope.path +"laudbentil.jpg"},
		//{name: "Kwame Asiedu", path: $scope.path +"kwamea.jpg"},
		{name: "Kwame Yeboah", path: $scope.path +"kwamey.jpg"},
		//{name: "Jerry King", path: $scope.path +"jerry.jpg"},
		//{name: "Kelechi Uduagu", path: $scope.path +"kelechi.JPG"},
		{name: "Afi Kwao", path: $scope.path +"afi.jpg"},
		{name: "Moses Abubakari", path: $scope.path +"moses.jpg"},
		{name: "Benjamin Kissi", path: $scope.path +"ben.jpg"},
		{name: "Abideen Adeleye", path: $scope.path +"abideen.jpg"},
		{name: "Alexander Okereke", path: $scope.path +"alex.jpg"},
		{name: "Samuel Nkoom Amoah", path: $scope.path +"samuel.jpg"}];

	$scope.randomStudents = [" ", " ", " "];

	$scope.generateStudent = function() {
		$scope.randomStudents[0] = $scope.students[Math.floor(Math.random() * $scope.students.length)];
		$scope.student = $scope.randomStudents[0];

		while($scope.student == $scope.randomStudents[0]) {
			$scope.student = $scope.students[Math.floor(Math.random() * $scope.students.length)];
		}
		
		$scope.randomStudents[1] = $scope.student;
		
		while($scope.student == $scope.randomStudents[0] || $scope.student == $scope.randomStudents[1]) {
			$scope.student = $scope.students[Math.floor(Math.random() * $scope.students.length)];
		}


		$scope.randomStudents[2] = $scope.student;
		$scope.visible = true;
	};
}