import { convertIntegerToRoman } from './romanNumeralConverter';

export function listThings(htmlTag, elements, romanFormat = false) {
    let result = '';
    for(var i in elements) {
        var index = (+i + 1);
        if(romanFormat) {
            index = convertIntegerToRoman(index).toLowerCase();
        }
        let tag = `<${htmlTag}>${index}. ${elements[i]}</${htmlTag}>`;
        result += tag;
    }

    return result;
}