'use strict';

angular.module('myApp.theWeather')

    .service('ConvertFtoCService', function() {

        return {
            convert: function(fahrenheit){
                if (fahrenheit || fahrenheit === 0)
                    return Math.round((fahrenheit - 32) * 5 / 9);
                else
                    return undefined;
            }
        };

    });
