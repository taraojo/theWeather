'use strict';

angular.module('myApp.theWeather')

    .service('myApp.theWeatherService', function( $http ) {

        return {
            getWeather: getWeather
        };


        function getWeather() {
            var request = $http({
                method: "get",
                url:"https://query.yahooapis.com/v1/public/yql?q=select * from weather.forecast where woeid in (select woeid from geo.places(1) where text='walsall, uk')&format=json",
                params: {
                    action: "get"
                }
            });
            return ( request.then( handleSuccess, handleError ) );

        }

        function handleSuccess( response ) {
            return( response.data );
        }

        function handleError( response ) {
            return ( "Error getting data: " + response );
        }

});
