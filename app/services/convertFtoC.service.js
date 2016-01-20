'use strict';

angular.module('myApp.theWeather')

    .service('ConvertFtoCService', function() {

        return {
            convert: function(fahrenheit){
                return Math.round((fahrenheit - 32) * 5 / 9);
            }
        };

    });
