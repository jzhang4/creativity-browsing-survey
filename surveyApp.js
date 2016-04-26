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

   $scope.main.username = gup('username', window.location);

   function gup( name, url ) {
   		if (!url) url = location.href;
   		name = name.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");
    	var regexS = "[\\?&]"+name+"=([^&#]*)";
  		var regex = new RegExp( regexS );
  		var results = regex.exec( url );
  		return results == null ? null : results[1];
	}


   $scope.main.save_result = function (num_correct, num_total, answer_array){
        var res = $resource("/surveyResult");
        res.save({id: $scope.main.username, 
                  num_correct: num_correct,
                  num_total: num_total,
                  answer_array: answer_array
                }, function(response){
                console.log("saved successfully!");
            }, function errorHandling(err) { 
                console.log("could not save result");
            });
        };
}]);