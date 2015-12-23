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

QUnit.test( "upper test", function( assert ) {
  assert.deepEqual(PassCheck.check('aSdf'), {
    lower: 3,
    upper: 1,
    num: 0,
    special: 0,
    length: 4,
    common: false
  });
  assert.deepEqual(PassCheck.check('asAdHasDdf'), {
    lower: 7,
    upper: 3,
    num: 0,
    special: 0,
    length: 10,
    common: false
  });
});

QUnit.test("num test", function (assert){
  assert.deepEqual(PassCheck.check('adh8745a7d65'), {
    lower: 5,
    upper: 0,
    num: 7,
    special: 0,
    length: 12,
    common: false
  });
});

QUnit.test("special test", function (assert){
  assert.deepEqual(PassCheck.check('adfg#hk%jhgd'), {
    lower: 10,
    upper: 0,
    num: 0,
    special: 2,
    length: 12,
    common: false
  });
});

QUnit.test("common test", function (assert){
  assert.deepEqual(PassCheck.check('maximus'), {
    lower: 7,
    upper: 0,
    num: 0,
    special: 0,
    length: 7,
    common: true
  });

  assert.deepEqual(PassCheck.check('christin'), {
    lower: 8,
    upper: 0,
    num: 0,
    special: 0,
    length: 8,
    common: true
  });
});
