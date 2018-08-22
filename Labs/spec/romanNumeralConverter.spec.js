var { convertIntegerToRoman, convertRomanToInteger } = require('../src/romanNumeralConverter.js');

describe('Convert integer to roman', () => {
    it('Will return I given 1', () => {
        let actual = convertIntegerToRoman(1);
        expect(actual).toEqual('I');
    }); 

    it('Will return VI given 6', () => {
        let actual = convertIntegerToRoman(6);
        expect(actual).toEqual('VI');
    });

    it('Will return XXXIV given 34', () => {
        let actual = convertIntegerToRoman(34);
        expect(actual).toEqual('XXXIV');
    });

    it('Will return XLIX given 49', () => {
        let actual = convertIntegerToRoman(49);
        expect(actual).toEqual('XLIX');
    });

    it('Will return CDLXXVIII given 478', () => {
        let actual = convertIntegerToRoman(478);
        expect(actual).toEqual('CDLXXVIII');
    });

    it('Will return MCMXC given 1990', () => {
        let actual = convertIntegerToRoman(1990);
        expect(actual).toEqual('MCMXC');
    });

    it('Will return MMXVI given 2016', () => {
        let actual = convertIntegerToRoman(2016);
        expect(actual).toEqual('MMXVI');
    });

    it('Will return " " given 0', () => {
        let actual = convertIntegerToRoman(0);
        expect(actual).toEqual('');
    });

    it('Will throw an exception',  () => {
        expect(() => convertIntegerToRoman(3500)).toThrowError(TypeError);
    });
});

describe('Convert roman to integer', () => {
    it('Will return 1 given I', () => {
        let actual = convertRomanToInteger('I');
        expect(actual).toEqual(1);
    });
    
    it('Will return 6 given VI', () => {
        let actual = convertRomanToInteger('VI');
        expect(actual).toEqual(6);
    });

    it('Will return 34 given XXXIV', () => {
        let actual = convertRomanToInteger('XXXIV');
        expect(actual).toEqual(34);
    });

    it('Will return 49 given XLIX', () => {
        let actual = convertRomanToInteger('XLIX');
        expect(actual).toEqual(49);
    });

    it('Will return 478 given CDLXXVIII', () => {
        let actual = convertRomanToInteger('CDLXXVIII');
        expect(actual).toEqual(478);
    });

    it('Will return 1990 given MCMXC', () => {
        let actual = convertRomanToInteger('MCMXC');
        expect(actual).toEqual(1990);
    });

    it('Will return 2016 given MMXVI', () => {
        let actual = convertRomanToInteger('MMXVI');
        expect(actual).toEqual(2016);
    });
});