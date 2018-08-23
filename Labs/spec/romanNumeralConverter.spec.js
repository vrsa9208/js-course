import {
    RomanNumeralConverter
} from '../src/romanNumeralConverter';
const convertor = new RomanNumeralConverter();

describe('Convert integer to roman', () => {
    it('Will return I given 1', () => {
        let actual = convertor.convertIntegerToRoman(1);
        expect(actual).toEqual('I');
    });

    it('Will return VI given 6', () => {
        let actual = convertor.convertIntegerToRoman(6);
        expect(actual).toEqual('VI');
    });

    it('Will return XXXIV given 34', () => {
        let actual = convertor.convertIntegerToRoman(34);
        expect(actual).toEqual('XXXIV');
    });

    it('Will return XLIX given 49', () => {
        let actual = convertor.convertIntegerToRoman(49);
        expect(actual).toEqual('XLIX');
    });

    it('Will return CDLXXVIII given 478', () => {
        let actual = convertor.convertIntegerToRoman(478);
        expect(actual).toEqual('CDLXXVIII');
    });

    it('Will return MCMXC given 1990', () => {
        let actual = convertor.convertIntegerToRoman(1990);
        expect(actual).toEqual('MCMXC');
    });

    it('Will return MMXVI given 2016', () => {
        let actual = convertor.convertIntegerToRoman(2016);
        expect(actual).toEqual('MMXVI');
    });

    it('Will return " " given 0', () => {
        let actual = convertor.convertIntegerToRoman(0);
        expect(actual).toEqual('');
    });

    it('Will throw an exception', () => {
        expect(() => convertor.convertIntegerToRoman(3500)).toThrowError(TypeError);
    });
});

describe('Convert roman to integer', () => {
    it('Will return 1 given I', () => {
        let actual = convertor.convertRomanToInteger('I');
        expect(actual).toEqual(1);
    });

    it('Will return 6 given VI', () => {
        let actual = convertor.convertRomanToInteger('VI');
        expect(actual).toEqual(6);
    });

    it('Will return 34 given XXXIV', () => {
        let actual = convertor.convertRomanToInteger('XXXIV');
        expect(actual).toEqual(34);
    });

    it('Will return 49 given XLIX', () => {
        let actual = convertor.convertRomanToInteger('XLIX');
        expect(actual).toEqual(49);
    });

    it('Will return 478 given CDLXXVIII', () => {
        let actual = convertor.convertRomanToInteger('CDLXXVIII');
        expect(actual).toEqual(478);
    });

    it('Will return 1990 given MCMXC', () => {
        let actual = convertor.convertRomanToInteger('MCMXC');
        expect(actual).toEqual(1990);
    });

    it('Will return 2016 given MMXVI', () => {
        let actual = convertor.convertRomanToInteger('MMXVI');
        expect(actual).toEqual(2016);
    });

    it('Will return 14 given XIV', () => {
        convertor.romanNumeral = "XIV";
        let actual = convertor.decimalNumber;
        expect(actual).toEqual(14);
    });

    it("Should convert roman to decimal using a setter and getter", () => {
        convertor.romanNumeral = "III";
        expect(convertor.decimalNumber).toEqual(3);
    });
});