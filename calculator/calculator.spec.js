const { add } = require('./calculator.js');

// test away!
describe('add()', function () {
  it('should add two numbers', function () {
    //setup - Arrange
    const expected = 4;

    //execute code - Act
    const actual = add(2, 2);

    //assert results - Assert
    expect(actual).toBe(expected);
  });
});

describe('multiply()', function () {
  it('should multiply two numbers', function () {
    //setup - Arrange
    const expected = 4;

    //execute code - Act
    const actual = add(2, 2);

    //assert results - Assert
    expect(actual).toBe(expected);
  });
});
