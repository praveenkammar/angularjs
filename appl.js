var app=angular.module("praveenApp",[]);
app.controller("myctr",function($scope){$scope.message="praveen"})
app.controller("arrayctr",function($scope){$scope.users=[{name:"praveen",age:21,company:"infosys"},{name:"shashank",age:20,company:"wipro"}]});

