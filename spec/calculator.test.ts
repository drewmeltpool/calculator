import Calculator from '../src/Calculator';

describe('Calculator', () => {
  it('Calc default usage', () => {
    const expected = 3;

    const calculator = new Calculator();
    const actual = calculator.calc('1 + 2 =');

    expect(actual).toBe(expected);
  });

  it('Calc without =', () => {
    const expected = 2;

    const calculator = new Calculator();
    const actual = calculator.calc('1 + 2');

    expect(actual).toBe(expected);
  });

  it('Calc without second number', () => {
    const expected = 1;

    const calculator = new Calculator();
    const actual = calculator.calc('1 + ');

    expect(actual).toBe(expected);
  });

  it('Calc without operation', () => {
    const expected = 1;

    const calculator = new Calculator();
    const actual = calculator.calc('1');

    expect(actual).toBe(expected);
  });
});
