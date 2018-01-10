var myapp=angular.module("testapp",[]);
myapp.controller("myctr",["$http","$scope",function($http,$scope)
{
    $http.get("new.json").then(function(praveen)
{
    $scope.players=praveen.data;
})
}])