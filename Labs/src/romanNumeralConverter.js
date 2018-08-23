class RomanNumeralConverter {

    get decimalNumber() {
        return this._decimalNumber;
    }

    set romanNumeral(value) {
        this._romanNumeral = value;
        this._decimalNumber = this.convertRomanToInteger(value);
    }
   
    convertIntegerToRoman(integerNumber) {
        const roman = { M: 1000, CM: 900, D: 500, CD: 400, C: 100, XC: 90, L: 50, XL: 40, X: 10, IX: 9, V: 5, IV: 4, I: 1 };
        var result = '';
    
        if(integerNumber > 3000 || integerNumber < 0) {
            throw new TypeError('a');
        }
    
        for (var i in roman) {
            while (integerNumber >= roman[i]) {
                result += i;
                integerNumber -= roman[i];
            }
        }
        return result;
    }
    
    convertRomanToInteger(romanNumber) {
        const roman = { M: 1000, CM: 900, D: 500, CD: 400, C: 100, XC: 90, L: 50, XL: 40, X: 10, IX: 9, V: 5, IV: 4, I: 1 };
        var result = 0;
        var usedTwo = false;
    
        for(let i = 0; i < romanNumber.length - 1; i++) {
            let currentRomanNumber = romanNumber[i] + romanNumber[i+1];
            if(roman[currentRomanNumber] != undefined) {
                result += roman[currentRomanNumber];
                i++;
                usedTwo = true;
            } 
            else {
                result += roman[romanNumber[i]];
                usedTwo = false;
            }
        }
        if(!usedTwo){
            result += roman[romanNumber[romanNumber.length - 1]];
        }
    
        return result;
    }
}

export { RomanNumeralConverter };
