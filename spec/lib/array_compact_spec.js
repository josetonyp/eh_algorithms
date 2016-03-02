var FArray = require('../../lib/arrays.js');
var chai = require("chai");
var expect = chai.expect;

describe('Compacting sorted array of integers', function () {
  it('Compacts an array of sorted integers', function () {
    expect(JSON.stringify(FArray.compact([1,3,7,7,8,9,9,9,10]))).to.equal(JSON.stringify([1,3,7,8,9,10]));
    expect(JSON.stringify(FArray.compact([1,3,9,7,9,10,7,8,9]))).to.not.equal(JSON.stringify([1,3,7,8,9,10]));
    expect(JSON.stringify(FArray.compact([]))).to.equal(JSON.stringify([]));
  });
});
