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
	$scope.empRegisterList = localStorage.getItem('empRegister');
   		$scope.submit= function(data){
   			debugger;
   			
			if((localStorage.getItem('empRegister')!==null))
			{
				dataArray.push(localStorage.getItem('empRegister'));
				console.log(dataArray);
			}

			dataArray.push(data);
			console.log(dataArray);
			localStorage.setItem('empRegister', JSON.stringify(dataArray));
			$scope.empRegisterList = localStorage.getItem('empRegister');
   		}
   });