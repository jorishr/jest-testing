const substract  = require('./substract');

// the string inside the test(string, fn) will show up in the console.
// the fn uses built-in jest function expect()
test('properly substract two numbers', () => {
    expect(substract(1,2)).toBe(-1);
});