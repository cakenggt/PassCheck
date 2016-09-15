var PassCheck = require('./passcheck.js');
var expect = require('chai').expect;
describe('passcheck tests', function(){
  it("edge test", function(){
    expect(PassCheck.check('')).to.deep.equal({
      lower: 0,
      upper: 0,
      num: 0,
      special: 0,
      length: 0,
      common: false
    });
    expect(function(){PassCheck.check(null);}).to.throw(Error);
    expect(function(){PassCheck.check(undefined);}).to.throw(Error);
    expect(function(){PassCheck.check();}).to.throw(Error);
  });

  it( "lower test", function() {
    expect(PassCheck.check('asdf')).to.deep.equal({
      lower: 4,
      upper: 0,
      num: 0,
      special: 0,
      length: 4,
      common: true
    });
    expect(PassCheck.check('asadhasddf')).to.deep.equal({
      lower: 10,
      upper: 0,
      num: 0,
      special: 0,
      length: 10,
      common: false
    });
  });
  it("upper test", function() {
    expect(PassCheck.check('aSdf')).to.deep.equal({
      lower: 3,
      upper: 1,
      num: 0,
      special: 0,
      length: 4,
      common: false
    });
    expect(PassCheck.check('asAdHasDdf')).to.deep.equal({
      lower: 7,
      upper: 3,
      num: 0,
      special: 0,
      length: 10,
      common: false
    });
  });

  it("num test", function(){
    expect(PassCheck.check('adh8745a7d65')).to.deep.equal({
      lower: 5,
      upper: 0,
      num: 7,
      special: 0,
      length: 12,
      common: false
    });
  });

  it("special test", function(){
    expect(PassCheck.check('adfg#hk%jhgd')).to.deep.equal({
      lower: 10,
      upper: 0,
      num: 0,
      special: 2,
      length: 12,
      common: false
    });
  });

  it("common test", function(){
    expect(PassCheck.check('maximus')).to.deep.equal({
      lower: 7,
      upper: 0,
      num: 0,
      special: 0,
      length: 7,
      common: true
    });

    expect(PassCheck.check('christin')).to.deep.equal({
      lower: 8,
      upper: 0,
      num: 0,
      special: 0,
      length: 8,
      common: true
    });
  });
});
