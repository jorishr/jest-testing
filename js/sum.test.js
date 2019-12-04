const sum  = require('./sum');
/* import sum from './js/sum'; */

// the string inside the test(string, fn) will show up in the console.
// the fn uses built-in jest function expect()
test('properly add two numbers', () => {
    expect(sum(1,2)).toBe(3);
});