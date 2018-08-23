import { expression, statement, arrow, makePerson } from '../src/functions';
import { factorial } from '../src/factorials';

describe('Functions Test', () => {
    it('Can be created as expression', () => {
        expression();
    });
    
    it('Can be created as statement', () => {
        statement();
    });
    
    it('Can be created as arrow', () => {
        arrow();
    });

    it('Can create a person', () => {
        let person = makePerson('Victor', 'Orlando', 'vrsa9208@gmail.com', '5512345678');
        expect(person.first).toEqual('Victor');
        expect(person.last).toEqual('Orlando');
        expect(person.email).toEqual('vrsa9208@gmail.com');
        expect(person.phone).toEqual('5512345678');
    });

    it('Will throw if no name is passed in', () => {
        expect(() => makePerson()).toThrowError();
    });

    it('Will set email to "no email" if not provided', () => {
        let person = makePerson('Victor', 'Orlando');
        expect(person.email).toEqual('no email');
    });

    it('Will set phone to "no phone" if not provided', () => {
        let person = makePerson('Victor', 'Orlando', 'vrsa9208@gmail.com');
        expect(person.phone).toEqual('no phone');
    });

    it('Can calculate a factorial', () => {
        let result = factorial(10);
        expect(result).toEqual(3628800);
    });

    it('Can calculate a factorial', () => {
        let result = factorial(10);
        expect(result).toEqual(3628800);
    });

    it('Can calculate a factorial', () => {
        let result = factorial(10);
        expect(result).toEqual(3628800);
    });

    it('Can calculate three factorials', () => {
        let result = factorial(3, 5, 7);
        expect(result).toEqual([6, 120, 5040]);
    });

    it('Can calculate ten factorials', () => {
        let result = factorial(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
        expect(result).toEqual([1, 2, 6, 24, 120, 720, 5040, 40320, 362880, 3628800]);
    });

    it('Can calculate three factorials', () => {
        let result = factorial();
        expect(result).toEqual(1);
    });
});