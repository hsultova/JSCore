/**
 * Created by Hris on 31.10.2016 г..
 */
let expect = require("chai").expect;
let sum = require("D:/Projects/JSCore/JSAdvanced/Unit Testing with Mocha/Sum-of-Numbers.js").sum;

describe('sum', function(){
    it("should return 3 for [1, 2]", function() {
        expect(sum([1, 2])).to.be.equal(3);
    });
    it("should return 1 for ['-1', '2'] and convert input to number", function() {
        expect(sum(['-1', '2'])).to.be.equal(1);
    });
    it("should return 4 for [1.5, 2.5, 0]", function() {
        expect(sum([1.5, 2.5, 0])).to.be.equal(4);
    });

});


