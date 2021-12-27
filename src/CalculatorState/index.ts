class CalculatorState {
  private _screen?: string | number;

  public firstNumber?: string | number;
  public operation?: string | number;

  public startNewNumber = true;

  get screen() {
    return ~~Number(this._screen);
  }

  set screen(value: string | number) {
    this._screen = ~~Number(value);
  }
}

export default CalculatorState;
