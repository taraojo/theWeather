'use strict';

angular.module('myApp', [
  'ngRoute',
  'myApp.theWeather',
  'myApp.view2'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/view1'});
}]);
