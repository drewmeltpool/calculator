import CalculatorState from '../src/CalculatorState';
import handleKeyPress from '../src/handleKeyPress';

describe('Handle press key', () => {
  describe('Default usage', () => {
    it('Usage with operation "+"', () => {
      const expected = 12;
      const state = new CalculatorState();

      handleKeyPress(state, '1');
      handleKeyPress(state, '+');
      handleKeyPress(state, '1');
      handleKeyPress(state, '1');
      handleKeyPress(state, '=');

      const { screen: actual } = state;

      expect(actual).toBe(expected);
    });

    it('Usage with operation "/"', () => {
      const expected = 2;
      const state = new CalculatorState();

      handleKeyPress(state, '2');
      handleKeyPress(state, '4');
      handleKeyPress(state, '/');
      handleKeyPress(state, '1');
      handleKeyPress(state, '2');
      handleKeyPress(state, '=');

      const { screen: actual } = state;

      expect(actual).toBe(expected);
    });

    it('Usage with operation "-"', () => {
      const expected = 12;
      const state = new CalculatorState();

      handleKeyPress(state, '2');
      handleKeyPress(state, '4');
      handleKeyPress(state, '-');
      handleKeyPress(state, '1');
      handleKeyPress(state, '2');
      handleKeyPress(state, '=');

      const { screen: actual } = state;

      expect(actual).toBe(expected);
    });

    it('Usage with operation "*"', () => {
      const expected = 144;
      const state = new CalculatorState();

      handleKeyPress(state, '1');
      handleKeyPress(state, '2');
      handleKeyPress(state, '*');
      handleKeyPress(state, '1');
      handleKeyPress(state, '2');
      handleKeyPress(state, '=');

      const { screen: actual } = state;

      expect(actual).toBe(expected);
    });
  });

  it('press number', () => {
    const state = new CalculatorState();
    handleKeyPress(state, '1');

    expect(state.screen).toBe(1);
  });

  it('press dot', () => {
    const state = new CalculatorState();
    handleKeyPress(state, '.');

    expect(state.screen).toBe(0);
  });

  it('press operarion with first number', () => {
    const state = new CalculatorState();
    handleKeyPress(state, '1');
    handleKeyPress(state, '+');

    expect(state.operation).toBe('+');
  });

  it('press operarion without first number', () => {
    const state = new CalculatorState();
    handleKeyPress(state, '+');

    expect(state.operation).toBeUndefined;
  });

  it('press number with operation and second number', () => {
    const state = new CalculatorState();
    handleKeyPress(state, '1');
    handleKeyPress(state, '-');
    handleKeyPress(state, '2');

    expect(state.screen).toBe(2);
  });

  it('if answer float number', () => {
    const state = new CalculatorState();
    handleKeyPress(state, '1');
    handleKeyPress(state, '/');
    handleKeyPress(state, '2');
    handleKeyPress(state, '=');

    expect(state.screen).toBe(0);
  });
});
