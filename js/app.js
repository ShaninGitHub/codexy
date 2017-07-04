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
<<<<<<< HEAD
    templateUrl : "register.html",
    controller : "registerCtrl"
  }).
=======
    templateUrl : "register.html"
  })
   .when("/view_records", {
    templateUrl : "employee_records.html"
  })
  .
>>>>>>> fc0733cd5392f89aafe158a2e17bed4a3f25613b
  otherwise("",{
   templateUrl : "index.html"
  })
   }).controller('registerCtrl', function($scope, $http){
   		$scope.submit= function(data){
			debugger;
			localStorage.setItem('empRegister', JSON.stringify(data));

   		}
   });