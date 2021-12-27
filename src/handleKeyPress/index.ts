import CalculatorState from 'src/CalculatorState';

const handleKeyPress = (instance: CalculatorState, key: string) => {
  if (typeof Number(key) === 'number' && String(Number(key)) === key) {
    if (instance.startNewNumber) {
      instance.screen = key;
    } else {
      instance.screen += key;
    }
    instance.startNewNumber = false;
  } else if (key === '/' || key === '+' || key === '-' || key === '*') {
    instance.operation = key;
    instance.startNewNumber = true;
    instance.firstNumber = instance.screen;
  } else if (key === '=') {
    if (instance.operation === '/') {
      instance.screen = Number(instance.firstNumber) / Number(instance.screen);
    }
    if (instance.operation === '*') {
      instance.screen = Number(instance.firstNumber) * Number(instance.screen);
    }
    if (instance.operation === '-') {
      instance.screen = Number(instance.firstNumber) - Number(instance.screen);
    }
    if (instance.operation === '+') {
      instance.screen = Number(instance.firstNumber) + Number(instance.screen);
    }
  }
};

export default handleKeyPress;
