import { spaceParse } from '../src/utils';

describe('Space parser', () => {
  it('default usage', () => {
    expect(spaceParse('1 + 2')).toEqual(['1', '+', '2']);
  });

  it('empty string', () => {
    expect(spaceParse('')).toEqual(['']);
  });
});
