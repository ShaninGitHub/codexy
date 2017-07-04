	var app=angular.module("codexyApp",["ngRoute"]);
	app.controller("employeeRecords",function($scope,$http){
	$scope.data=[];
	$http.get("employees.json").then(function(response)
	{
	$scope.data=response.data.Employees;
    $localStorage.datastorage =response.data.Employees;  
	});
	
	});
  app.config(function($routeProvider) {
  $routeProvider
  .when("/register", {
    templateUrl : "register.html"
  })
   .when("/view_records", {
    templateUrl : "employee_records.html"
  })
  .
  otherwise("",{
   templateUrl : "index.html"
  })
   });