import Calculator from '../src/Calculator';

describe('Calculator', () => {
  it('calc default usage', () => {
    const calculator = new Calculator();
    expect(calculator.calc('1 + 2 =')).toBe(3);
  });

  it('calc without =', () => {
    const calculator = new Calculator();
    expect(calculator.calc('1 + 2')).toBe(2);
  });

  it('calc without second number', () => {
    const calculator = new Calculator();
    expect(calculator.calc('1 + ')).toBe(1);
  });

  it('calc without operation', () => {
    const calculator = new Calculator();
    expect(calculator.calc('1')).toBe(1);
  });
});
