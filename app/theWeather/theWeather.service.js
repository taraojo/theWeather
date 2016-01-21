'use strict';

angular.module('myApp.theWeather')

    .service('theWeatherService', ['ConvertFtoCService', 'GetWeatherImg', function( $http, ConvertFtoCService, GetWeatherImg ) {

        return {
            getWeather: getWeather
        };

        function getWeather(){
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
            return parseWeatherData(response.data);
        }

        function handleError( response ) {
            return ( "Error getting data: " + response );
        }


        function parseWeatherData(data) {
            data = data.query;

            var weatherResults = data.results.channel,
                weatherDesc = weatherResults.item.description,
                fahrenheit = weatherResults.item.condition.temp;

            console.log(weatherResults);

            // convert fahrenheit values in forecast array
            weatherResults.item.forecast.map(function(i){
                i.high = ConvertFtoCService.convert(parseInt(i.high));
                i.low = ConvertFtoCService.convert(parseInt(i.low));
            });

            return {
                weather: weatherResults,
                created: data.created,
                weatherDesc: weatherDesc,
                weatherImg: GetWeatherImg.imgLink(weatherDesc),
                celsius: ConvertFtoCService.convert(fahrenheit)
            };
        }

}]);
