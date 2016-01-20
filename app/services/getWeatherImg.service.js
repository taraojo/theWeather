'use strict';

angular.module('myApp.theWeather')

    .service('GetWeatherImg', function() {

        return {
            imgLink: function(description){
                return description.substring(description.indexOf("src") + 5, description.indexOf("/>") - 1);
            }
        };

    });
