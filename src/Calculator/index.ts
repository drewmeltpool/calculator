import CalculatorState from '../CalculatorState';
import handleKeyPress from '../handleKeyPress';
import { spaceParse } from '../utils';

class Calculator {
  calc(input: string) {
    const calculatorState = new CalculatorState();
    const parsedInputSpace = spaceParse(input);

    for (const key of parsedInputSpace) handleKeyPress(calculatorState, key);

    return calculatorState.screen;
  }
}

export default Calculator;
