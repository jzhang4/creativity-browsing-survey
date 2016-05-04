var surveyApp = angular.module('surveyApp', ['ngResource']);


angular.module('surveyApp').directive('ngEnter', function() {
    return function(scope, element, attrs) {
        element.bind("keydown keypress", function(event) {
            if(event.which === 13) {
                scope.$apply(function(){
                    scope.$eval(attrs.ngEnter, {'event': event});
                });

                event.preventDefault();
            }
        });
    };
});




surveyApp.controller('MainController', ['$scope', '$resource', function($scope, $resource) {
   $scope.main = {};
   $scope.main.num_correct = 0;
   $scope.main.begun = false;
   $scope.main.submitted = false;
   $scope.main.currently_submitting = false;
   $scope.main.time_clicked_link = Date.now();
   username = $scope.main.username = getUrlParameters().username

    $scope.main.begin_survey = function (){
      $scope.main.begun = true;
      $scope.main.time_begun_survey = Date.now();
    }

   $scope.main.pretend_submit = function(taken_before, feedback){
      $scope.main.taken_before = taken_before;
      $scope.main.feedback = feedback;
      $scope.main.time_finished_survey = Date.now();
      if($scope.main.browsing_history_submitted === false){
        console.log("waiting to submit");
        $scope.main.currently_submitting = true;
        start_spinner();
      }else{
        $scope.main.submit_survey();
      }
   }

   $scope.main.submit_survey = function (){
        
        if($scope.main.taken_before === undefined){
          return;
        }
        var times = [$scope.main.time_clicked_link, $scope.main.time_begun_survey, $scope.main.time_end_survey, $scope.main.time_finished_survey];
        var res = $resource("/surveyResult");
        res.save({id: $scope.main.username, 
                  num_correct: $scope.main.num_correct,
                  num_total: $scope.main.total,
                  answer_array: $scope.main.answer_array,
                  taken_before: $scope.main.taken_before,
                  feedback: $scope.main.feedback,
                  times:times,
                  keystrokes: $scope.main.keystrokes
                }, function(response){
                  end_spinner();
                  $scope.main.code = calcMD5(username);
                  $scope.main.submitted = true;
                console.log("saved successfully!");
            }, function errorHandling(err) { 
                console.log("could not save result");
            });
        };
}]);