const { add, multiply } = require('./calculator.js');

// test away!
describe('add()', function () {
  it('should add two numbers', function () {
    //setup - Arrange
    //execute code - Act
    //assert results - Assert
    expect(add(2, 2)).toBe(4);
    expect(add(0, 0)).toBe(0);
    expect(add(1, 1)).toBe(2);
    expect(add(-1, 1)).toBe(0);
    expect(add(-1, 0)).toBe(-1);
    expect(add(3, 1000)).toBe(1003);
  });

  it('return 0 when called with no values', function () {
    expect(add()).toBe(0);
  });

  it('add a collection of values', () => {
    const expected = 500;
    const actual = add(400, 50, 25, 25);
    expect(actual).toBe(expected);
    expect(add(1, 2, 3, -3)).toBe(3);
  });
});

describe('multiply()', function () {
  it('should multiply two numbers', function () {
    //setup - Arrange
    const expected = 10;

    //execute code - Act
    const actual = multiply(2, 5);

    //assert results - Assert
    expect(actual).toBe(expected);
  });
});
