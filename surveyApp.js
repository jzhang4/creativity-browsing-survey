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
   // We defined an object called 'main' with a single property 'title' that is used
   // by the html view template to get the page's title in the browser tab.
   $scope.main = {};
   $scope.main.num_correct = 0;

   $scope.main.save_result = function (num_correct, num_total){
        var res = $resource("/surveyResult");
        res.save({id: "username", 
                  num_correct: num_correct,
                  num_total: num_total
                }, function(response){
                console.log("saved successfully!");
            }, function errorHandling(err) { 
                console.log("could not save result");
            });
        };
}]);