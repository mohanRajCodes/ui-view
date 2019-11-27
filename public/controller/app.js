var myApp = angular.module("myemployeeApp",['ui.router']);

myApp.config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider){

$stateProvider
.state('Home',{
  url:"/"
})
.state('employee',{
  url:'/employee',
  views:{
    'emp-header':{
        template:'<center>Employee Information</center>'
    },
    'emp-list':{
        controller: 'employeeListCtrl',
        templateUrl:'/public/view/template/EmployeeList.html',
    }
  }
})
.state('employeeDetail',{
  url:'/employee/:empno',
  views:{
    'emp-header':{
        template:'<center>Employee Information</center>'
    },
    'emp-details':{
        templateUrl:'/public/view/template/EmployeeDetails.html',
        controller: 'employeeDetailsCtrl'
    }
  }
});

$urlRouterProvider.otherwise("/");

}]);

myApp.controller("employeeListCtrl",function($scope){

$scope.someEmp = [{empno:1,name:"Kohli",gender:"Male",Age:"31"},
                  {empno:2,name:"Rohit Sharma",gender:"Male",Age:"32"},
                  {empno:3,name:"Shreyas Iyer",gender:"Male",Age:"24"},
                  {empno:4,name:"Smriti Mandana",gender:"Female",Age:"21"},
                  {empno:5,name:"Mithali Raj",gender:"Female",Age:"36"}
                ];

});

myApp.controller("employeeDetailsCtrl",function(employeeDetails,$scope,$stateParams){

var empno = $stateParams.empno;

//console.log(empno);

employeeDetails.getEmployeeDetails().then(function(response){
    $scope.details = response.data;
})

});
