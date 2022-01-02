import { spaceParse } from '../src/utils';

describe('Space parser', () => {
  it('Default usage', () => {
    const expected = ['1', '+', '2'];

    const actual = spaceParse('1 + 2');

    expect(actual).toEqual(expected);
  });

  it('Empty string', () => {
    const expected = [''];

    const actual = spaceParse('');

    expect(actual).toEqual(expected);
  });
});
