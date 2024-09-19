const { add, subtract, multiply, divide, increment, decrement, makeInt, preserveDecimal } = require('../index.js');

describe('basic math functions', () => {
  it('add() is a valid function', () => {
    expect(typeof add).toEqual('function');
  });

  it('subtract() is a valid function', () => {
    expect(typeof subtract).toEqual('function');
  });

  it('multiply() is a valid function', () => {
    expect(typeof multiply).toEqual('function');
  });

  it('divide() is a valid function', () => {
    expect(typeof divide).toEqual('function');
  });

  it('add(a, b) adds two numbers and returns the result', () => {
    expect(add(1, 2)).toEqual(3);
  });

  it('subtract(a, b) subtracts b from a and returns the result', () => {
    expect(subtract(2, 1)).toEqual(1);
  });

  it('multiply(a, b) multiplies two numbers and returns the result', () => {
    expect(multiply(2, 3)).toEqual(6);
  });

  it('divide(a, b) divides a by b and returns the result', () => {
    expect(divide(4, 2)).toEqual(2);
  });

  it('increment(n) increments n and returns the result', () => {
    expect(increment(3)).toEqual(4);
  });

  it('decrement(n) decrements n and returns the result', () => {
    expect(decrement(3)).toEqual(2);
  });
});

describe('makeInt(n)', () => {
  it('parses n as an integer and returns the parsed integer', () => {
    expect(makeInt('10')).toEqual(10);
  });

  it('assumes base 10', () => {
    expect(makeInt('0x10')).toEqual(16);
  });

  it('returns NaN as appropriate', () => {
    expect(makeInt('sldkjflksjf')).toEqual(NaN);
  });
});

describe('preserveDecimal(n)', () => {
  it('preserves n\'s decimals (it parses n as a floating point number) and returns the parsed number', () => {
    expect(preserveDecimal('2.222')).toEqual(2.222);
  });

  it('returns NaN as appropriate', () => {
    expect(preserveDecimal('sldkjflksjf')).toEqual(NaN);
  });
});
