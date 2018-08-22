import convert from '../src/romanNumeralConverter.js';

describe('Roman numeral converter', () => {
    it('Will return I given 1', () => {
        let actual = convert(1);
        expect(actual).toEqual('I');
    }); 

    it('Will return VI given 6', () => {
        let actual = convert(6);
        expect(actual).toEqual('VI');
    });

    it('Will return XXXIV given 34', () => {
        let actual = convert(34);
        expect(actual).toEqual('XXXIV');
    });

    it('Will return XLIX given 49', () => {
        let actual = convert(49);
        expect(actual).toEqual('XLIX');
    });

    it('Will return CDLXXVIII given 478', () => {
        let actual = convert(478);
        expect(actual).toEqual('CDLXXVIII');
    });

    it('Will return MCMXC given 1990', () => {
        let actual = convert(1990);
        expect(actual).toEqual('MCMXC');
    });

    it('Will return MMXVI given 2016', () => {
        let actual = convert(2016);
        expect(actual).toEqual('MMXVI');
    });

    it('Will return " " given 0', () => {
        let actual = convert(0);
        expect(actual).toEqual('');
    });

    it('Will throw an exception',  () => {
        expect(() => convert(3500)).toThrowError(TypeError);
    });
});