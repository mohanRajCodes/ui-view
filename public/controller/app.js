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
        template:'<em>Employee header</em>'
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
        template:'<em>Employee header</em>'
    },
    'emp-details':{
        templateUrl:'/public/view/template/EmployeeDetails.html'
    }
  }
});

$urlRouterProvider.otherwise("/");

}]);

myApp.controller("employeeListCtrl",function($scope){

$scope.someEmp = [{empno:1,name:"Sankaran",gender:"Male",Age:"62"},
                  {empno:2,name:"Karpagam",gender:"Female",Age:"47"},
                ];

});
