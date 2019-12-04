const cloneArray = require('./cloneArray');

// note: the clone arr function will return a new reference to the original 
// arr, thus you cannot use .toBe method  
test('cloneArr equals arr', () => {
    const arr = [1, 2, 3];
    expect(cloneArray(arr)).toEqual(arr);  // -> should have same value
    expect(cloneArray(arr)).not.toBe(arr); // -> should be a new reference to that value
});