var FCL = require('../lib/find_chars.js');
var chai = require("chai");
var expect = chai.expect;

describe('Chars in an String order N*N', function () {
  it('finds chars present in a seed string on a target string', function () {
    expect(FCL.nn_find_chars('abc', 'abcdefg')).to.equal('abc');
    expect(FCL.nn_find_chars('abcpo', 'abcdefg')).to.equal('abc');
    expect(FCL.nn_find_chars('abc', 'owiurety')).to.equal('');
  });
});

describe('Chars in an String order N', function () {
  it('finds chars present in a seed string on a target string', function () {
    expect(FCL.n_find_chars('abc', 'abcdefg')).to.equal('abc');
    expect(FCL.n_find_chars('abc', 'owiurety')).to.equal('');
  });
});
