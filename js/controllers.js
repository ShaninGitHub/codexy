app.controller('registerCtrl', function($scope, $http, employeeService){
   		$scope.submit= function(data){
   			var response = employeeService.createEmp(data);
   			if(response === true){
   				alert('Thank you for registering');
   			}
   		}
   }).controller('empRecordsCtrl', function($scope, $http, employeeService){
   			$scope.empList = employeeService.getEmployeesList();
   });