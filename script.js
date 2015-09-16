// Code goes here

var app = angular.module("computer" , ["ngRoute"])

.config(['$routeProvider', function($routeProvider){
  $routeProvider
  .when('/main' , {
    templateUrl : 'main.html',
    controller: 'MainCtrl'
  })
  .when('/services' , {
    templateUrl : 'services.html',
    controller: 'ServicesCtrl'
  })
  .when('/about' , {
    templateUrl : 'about.html',
    controller: 'MainCtrl'
  })
  .when('/contact' , {
    templateUrl : 'contact.html',
    controller: 'ContactCtrl'
  })
  .otherwise({redirectTo : '/main'})
}])

.controller('ServicesCtrl', ['$scope', '$http' , function($scope , $http){
  $http.get('services.json').then(function(response){
    $scope.services = response.data;
  });
}])

.controller('AboutCtrl', ['$scope', function($scope){
  console.log('This is the main ctrl');
}])

.controller('MainCtrl', ['$scope', function($scope){
  console.log('This is the main ctrl');
}]);