'use strict';

angular.module('myApp.theWeather')

    .controller('theWeatherController', [ '$scope', 'myApp.theWeatherService', function($scope, theWeatherService){

        $scope.updateWeather = function(){
            theWeatherService.getWeather()
                .then( function (newWeather){
                    setScopeVariables(newWeather);
                });
        };

        function setScopeVariables(weatherData){

            weatherData = weatherData.query;
            var weatherResults = weatherData.results;
            var weatherDesc = weatherResults.channel.item.description;

            var weatherImg = function(description) {
                return description.substring(weatherDesc.indexOf("src") + 5, weatherDesc.indexOf("/>") - 1);
            };

            var convertFtoC = function(f){
                return Math.round((f - 32) * 5 / 9);
            };

            var scopeVars = {
                weather: weatherResults.channel,
                created: weatherData.created,
                weatherDesc: weatherDesc,
                weatherImg: weatherImg(weatherDesc),
                celsius: convertFtoC(weatherResults.channel.item.condition.temp)
            };

            for (var newVar in scopeVars){
                $scope[newVar] = scopeVars[newVar];
            }





            //$scope.weather = weatherData.query.results.channel;
            //$scope.created = weatherData.query.created;
            //var theWeather = $scope.weather;
            //$scope.weatherDesc = theWeather.item.description;
            //$scope.weatherImg = $scope.weatherDesc.substring($scope.weatherDesc.indexOf("src")+5, $scope.weatherDesc.indexOf("/>")-1);
            //$scope.celsius = Math.round(($scope.weather.item.condition.temp -32) * 5 / 9);
            console.log($scope.weather);
        }

        $scope.updateWeather();

    }]);