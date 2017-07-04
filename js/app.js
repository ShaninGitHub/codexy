	var app=angular.module("codexyApp",["ngRoute"]);
	app.controller("employeeRecords",function($scope,$http){
	
	
	});
  app.config(function($routeProvider) {
  $routeProvider
  .when("/register", {

    templateUrl : "register.html",
    controller : "registerCtrl"
  })
   .when("/view_records", {
    templateUrl : "employee_records.html"
  })
  .otherwise("",{
   templateUrl : "index.html"
  })
   }).controller('registerCtrl', function($scope, $http){
   	var dataArray = [];
   		$scope.submit= function(data){
   			//$scope.saved = localStorage.getItem('empRegister');

			localStorage.setItem('empRegister', JSON.stringify(data));

			console.log(localStorage.getItem('empRegister'));
			//$scope.data.push(localStorage.getItem('empRegister'));
			dataArray.push(data);
			
   		}
   });