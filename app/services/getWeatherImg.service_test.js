"use strict";

describe("The get weather image service", function(){
    var getImage;

    beforeEach(module("myApp.theWeather"));

    beforeEach(inject(function (_GetWeatherImg_) {
        getImage = _GetWeatherImg_;
    }));

    it("should return a full image url given an image tag", function(){
        var descriptionStr = ".....<img src='http://www.theImageLink.png'/>...";
        expect(getImage.imgLink(descriptionStr)).toBe('http://www.theImageLink.png');
    });

    it("should return a full image url given an image tag without a slash", function(){
        var descriptionStr = ".....<img src='test'>...";
        //functionality to be added
        //expect(getImage.imgLink(descriptionStr)).toBe('test');
    });

    it("should return a full image url given an image tag", function(){
        var descriptionStr = ".....<img src='test'>.../>";
        //functionality to be added
        //expect(getImage.imgLink(descriptionStr)).toBe('test');
    });

    it("should return an empty string given an image tag with no src", function(){
        var descriptionStr = ".....<img src=''/>...";
        expect(getImage.imgLink(descriptionStr)).toBe('');
    });


});