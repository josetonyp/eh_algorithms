var FArray = require('../../lib/arrays.js');
var chai = require("chai");
var expect = chai.expect;

describe('Array Rotation', function () {
  it('Rotates an empty array', function () {
    expect(JSON.stringify(FArray.rotate([], 3))).to.equal(JSON.stringify([]));
  });

  it('Rotates a single element array', function () {
    expect(JSON.stringify(FArray.rotate([1],2))).to.equal(JSON.stringify([1]));
  });

  it('Rotates an array by given number of positions', function () {
    expect(JSON.stringify(FArray.rotate([1,2,3,4,5,6,7,8,9], 2))).to.equal(JSON.stringify([3,4,5,6,7,8,9,1,2]));
  });
});
