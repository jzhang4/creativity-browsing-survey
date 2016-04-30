surveyApp.controller('questionController', ['$scope', '$interval', '$window', function($scope, $interval, $window) {

	var test = window.RATmodels.RATList(); //retrieves the test

	var answer_array = [];

	$scope.question_number = 1;
	$scope.countdown = 7;
	$scope.currentQuestion = test[$scope.question_number - 1];
	$scope.main.browsing_history_submitted = false;

	var intervalPromise = $interval(function(){
										$scope.countdown--;
										if($scope.countdown===0){
											$scope.submit($scope.main.answer);
										}
									},1000,7); //starts the countdown

	
	$scope.submit = function(answer){


		answer_array.push({correct_answer: $scope.currentQuestion.answer, 
                  guessed_answer: answer,
                  difficulty: $scope.currentQuestion.difficulty});
		console.log(answer_array);

		if(answer === $scope.currentQuestion.answer){
			$scope.main.num_correct++;
		}

		if($scope.question_number === 15){ //change this to test.length;
			$interval.cancel(intervalPromise);
			$scope.main.completed = true;
			$scope.main.total = $scope.question_number;
			$scope.main.answer_array = answer_array;

			submit_browsing_history(function(){
				console.log("done submitting browsing history");
				$scope.main.submit_survey();
                $scope.main.browsing_history_submitted = true;
            });
		}else{
	   		$scope.question_number++;
	   		$scope.currentQuestion = test[$scope.question_number - 1];
	   		$interval.cancel(intervalPromise);
	   		$scope.main.answer = ""; 
	   		$scope.countdown = 7;
	   		intervalPromise = $interval(function(){$scope.countdown--; if($scope.countdown===0){
											$scope.submit($scope.main.answer);
										}},1000,7);
	   	}

	};
}]);