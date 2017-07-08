var app = angular.module("codexyApp",["ngRoute"]);

app.config(function($routeProvider) {
	$routeProvider
	.when("/register", {

		templateUrl : "templates/register.html",
		controller : "registerCtrl"
	})
	.when("/view_records", {
		templateUrl : "templates/employee_records.html",
		controller : "empRecordsCtrl"
	})
	.otherwise("",{
		templateUrl : "index.html"
	})
});