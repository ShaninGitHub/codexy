	var app=angular.module("codexyApp",["ngRoute"]);
	app.controller("employeeController",function($scope,$http){
	$scope.data=[];
	$http.get("employees.json").then(function(response)
	{
	$scope.data=response.data;
	});
	
	});
  app.config(function($routeProvider) {
  $routeProvider
  .when("/register", {
    templateUrl : "register.html"
  }).
  otherwise("", {
    templateUrl : "index.html"
  })
   });