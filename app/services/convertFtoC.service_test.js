"use strict";

describe("The convert service", function(){
    var convert;

    beforeEach(module("myApp.theWeather"));

    beforeEach(inject(function (_ConvertFtoCService_) {
        convert = _ConvertFtoCService_;
    }));

    it("should return 2degC when given 36degF", function(){
        expect(convert.convert(36)).toEqual(2);
    });

    it("should return 38degC when given 100degF", function(){
        expect(convert.convert(100)).toEqual(38);
    });

    it("should return -29degC when given -20degF", function(){
        expect(convert.convert(-20)).toEqual(-29);
    });

    it("should return -18degC when given 0degF", function(){
        expect(convert.convert(0)).toEqual(-18);
    });

    it("should return -18degC when given a null value", function(){
        expect(convert.convert(null)).toEqual(undefined);
    });

    it("should not break when passed undefined value", function(){
        expect(convert.convert(undefined)).toEqual(undefined);
    });
});