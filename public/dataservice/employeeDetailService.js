angular.module("myemployeeApp").factory("employeeDetails",function($stateParams,$http){

    return {
        getEmployeeDetails: function(){

            var empno = $stateParams.empno;

            return ($http({
                method:'GET',
                url:'/employee/' + empno
            }))
        }
    }
});


