'use strict';

angular.module('myApp.theWeather')

    .controller('theWeatherController', [ '$scope', 'theWeatherService', function($scope, theWeatherService){

        $scope.updateWeather = function(){
            theWeatherService.getWeather()
                .then( function (newWeather){

                    $scope.data = newWeather;

                });
        };

        $scope.updateWeather();

    }]);