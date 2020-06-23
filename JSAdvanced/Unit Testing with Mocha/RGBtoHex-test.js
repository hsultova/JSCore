/**
 * Created by Hris on 31.10.2016 г..
 */
let expect = require("chai").expect;
let rgbToHexColor = require("D:/Projects/JSCore/JSAdvanced/Unit Testing with Mocha/RGBtoHex.js").rgbToHexColor;


describe("rgbToHexColor(red, green, blue)", function() {
    describe("Nominal cases (valid input)", function() {
        it("should return #FF9EAA on (255, 158, 170)", function() {
            let hex = rgbToHexColor(255, 158, 170);
            expect(hex).to.be.equal('#FF9EAA');
        });
    });
    describe("Special cases (invalid input)", function() {
        it("should return #FF9EAA on (255, 158, 170)", function() {
            let hex = rgbToHexColor(255, 158, 170);
            expect(hex).to.be.equal('#FF9EAA');
        });
    });
});
