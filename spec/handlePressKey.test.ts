import CalculatorState from '../src/CalculatorState';
import handleKeyPress from '../src/handleKeyPress';

describe('Handle press key', () => {
  it('default usage +', () => {
    const state = new CalculatorState();
    handleKeyPress(state, '1');
    handleKeyPress(state, '+');
    handleKeyPress(state, '1');
    handleKeyPress(state, '1');
    handleKeyPress(state, '=');

    expect(state.screen).toBe(12);
  });

  it('default usage /', () => {
    const state = new CalculatorState();
    handleKeyPress(state, '2');
    handleKeyPress(state, '4');
    handleKeyPress(state, '/');
    handleKeyPress(state, '1');
    handleKeyPress(state, '2');
    handleKeyPress(state, '=');

    expect(state.screen).toBe(2);
  });

  it('default usage -', () => {
    const state = new CalculatorState();
    handleKeyPress(state, '2');
    handleKeyPress(state, '4');
    handleKeyPress(state, '-');
    handleKeyPress(state, '1');
    handleKeyPress(state, '2');
    handleKeyPress(state, '=');

    expect(state.screen).toBe(12);
  });

  it('default usage *', () => {
    const state = new CalculatorState();
    handleKeyPress(state, '1');
    handleKeyPress(state, '2');
    handleKeyPress(state, '*');
    handleKeyPress(state, '1');
    handleKeyPress(state, '2');
    handleKeyPress(state, '=');

    expect(state.screen).toBe(144);
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
