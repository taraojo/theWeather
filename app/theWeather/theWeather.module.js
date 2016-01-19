'use strict';

angular.module('myApp.theWeather', [])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/view1', {
            templateUrl: 'theWeather/theWeather.view.html',
            controller: 'theWeatherController'
        });
    }]);