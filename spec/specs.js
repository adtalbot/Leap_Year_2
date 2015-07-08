describe('leapYear', function() {
  it('returns false for a year that is not divisible by 4', function() {
    expect(leapYear(1999)).to.equal(false)
  });

  it('returns true for most years divisible by 4', function() {
    expect(leapYear(2004)).to.equal(true)
  });

  it('returns false for most years divisible by 100', function() {
    expect(leapYear(1900)).to.equal(false)
  });
});
