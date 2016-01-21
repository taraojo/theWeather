"use strict";

describe("the weather service", function(){
    var weatherService, httpBackend, convert, getWeatherImg, scope, controller, ngRoute;
    beforeEach(module('ngRoute'));
    beforeEach(module("myApp.theWeather"));

    beforeEach(inject(function (_theWeatherService_, _$httpBackend_, _ConvertFtoCService_, _GetWeatherImg_, $rootScope, $controller, _$route_) {
        weatherService = _theWeatherService_;
        httpBackend = _$httpBackend_;
        convert = _ConvertFtoCService_;
        getWeatherImg = _GetWeatherImg_;
        ngRoute = _$route_;

        scope = $rootScope.$new();

        controller = $controller('theWeatherController', {$scope: scope, theWeatherService: weatherService, ngRoute: ngRoute});
    }));

    it("should get the weather data", function () {
        var getUrl = "https://query.yahooapis.com/v1/public/yql?q=select * from weather.forecast where woeid in (select woeid from geo.places(1) where text='walsall, uk')&format=json";

        var mockData = {
            query: {
                created: "2016-01-22",
                results: {
                    channel: {
                        item: {
                            condition: {
                                temp: "36"
                            },
                            description: "",
                            forecast: []
                        }
                    }
                }
            }
        };

        var resultData = {
            weather: {
                item: {
                    condition: {
                        temp: "36"
                    },
                    description: "",
                    forecast: []
                }
            },
            created: "2016-01-22",
            weatherDesc: "",
            weatherImg: "",
            celsius: convert.convert(36)
        };

        httpBackend.when('GET', getUrl).respond(200, mockData);

        weatherService.getWeather().then(function(data){
            expect(data).toEqual(resultData);
        });
        httpBackend.flush();

        expect(scope.data.created).toBe("2016-01-22");
    });

    afterEach(function() {
        httpBackend.verifyNoOutstandingExpectation();
        httpBackend.verifyNoOutstandingRequest();
    });
});