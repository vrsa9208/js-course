import convert from '../src/romanNumeralConverter.js';

describe('Roman numeral converter', () => {
    it('will return 1 given i', () => {
        let actual = convert('i');
        expect(actual).toEqual(1);
    });
});