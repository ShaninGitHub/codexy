app.service('employeeService', function(){
	var saved = localStorage.getItem('empRegister');
	var empList = [];
	if(saved !== null)
	{
		empList = JSON.parse(saved);
	}
	this.createEmp = function(data){

		empList.push({
			fname: data.fname,
			lname: data.lname,
			ecode: data.ecode,
			email: data.email,
			place: data.place,
			phone: data.phone
		});
		localStorage.setItem('empRegister', JSON.stringify(empList));

		return true;
	};
	this.getEmployeesList = function(){
		return JSON.parse(localStorage.getItem('empRegister'));
	};
})