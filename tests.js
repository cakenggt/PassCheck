QUnit.test("edge test", function(assert){
  assert.deepEqual(PassCheck.check(''), {
    lower: 0,
    upper: 0,
    num: 0,
    special: 0,
    length: 0,
    common: false
  }, 'empty string fails');
  assert.throws(function(){PassCheck.check(null)}, 'null fails');
  assert.throws(function(){PassCheck.check(undefined)}, 'undefined fails');
  assert.throws(function(){PassCheck.check()}, 'none fails');
});

QUnit.test( "lower test", function( assert ) {
  assert.deepEqual(PassCheck.check('asdf'), {
    lower: 4,
    upper: 0,
    num: 0,
    special: 0,
    length: 4,
    common: true
  });
  assert.deepEqual(PassCheck.check('asadhasddf'), {
    lower: 10,
    upper: 0,
    num: 0,
    special: 0,
    length: 10,
    common: false
  });
});
