var FArray = require('../../lib/arrays.js');
var chai = require("chai");
var expect = chai.expect;

describe('LCM', function () {
  it('Rotates an empty array', function () {
    expect(FArray.lcm([])).to.equal(undefined);
  });

  it('Calculates the LCM of an array of integers', function () {
    expect(FArray.lcm([4])).to.equal(4);
    expect(FArray.lcm([4,8,9])).to.equal(72);
    expect(FArray.lcm([6,8,15])).to.equal(120);
  });
});
