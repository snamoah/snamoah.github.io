function wordsController($scope) {
	$scope.text = "";

	$scope.numberOfWords = function() {
		if($scope.text == "" ) return 0;
		else return $scope.text.split(" ").length;
	};
}