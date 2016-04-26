surveyApp.controller('questionController', ['$scope', '$interval', '$window', function($scope, $interval, $window) {

	var test = window.RATmodels.RATList(); //retrieves the test

	var answer_array = [];

	$scope.question_number = 1;
	$scope.countdown = 7;
	$scope.currentQuestion = test[$scope.question_number - 1];
	var intervalPromise = $interval(function(){$scope.countdown--},1000,7); //starts the countdown

	
	$scope.submit = function(answer){
		if($scope.countdown !== 0 ){
			return;
		}

		answer_array.push({correct_answer: $scope.currentQuestion.answer, 
                  guessed_answer: answer,
                  difficulty: $scope.currentQuestion.difficulty});
		console.log(answer_array);

		if(answer === $scope.currentQuestion.answer){
			$scope.main.num_correct++;
		}
		if($scope.question_number === 2){ //change this to test.length;
			$interval.cancel(intervalPromise);
			$scope.main.completed = true;
			$scope.main.total = $scope.question_number;
			$scope.main.save_result($scope.main.num_correct, $scope.question_number, answer_array);
			//store total result correct
		}else{
	   		$scope.question_number++;
	   		$scope.currentQuestion = test[$scope.question_number - 1];
	   		$interval.cancel(intervalPromise);
	   		$scope.main.answer = ""; //clear the text field (if it worked lol)
	   		$scope.countdown = 7;
	   		intervalPromise = $interval(function(){$scope.countdown--},1000,7);
	   	}

	};
}]);