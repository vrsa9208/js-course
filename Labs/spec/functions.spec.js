const calculateFactorial = (num) => {
    let result = 1;
    for (let i = 1; i <= num; i++) {
        result *= i;
    }

    return result;
};

const factorial = (...nums) => {
    if(nums.length == 0) {
        return 1;
    }
    else if (nums.length == 1) {
        return calculateFactorial(nums[0]);
    }
    else {
        return nums.map(n => calculateFactorial(n));
    }
};

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

const expression = () => {};
const statement = () => {};
const arrow = () => {};
const makePerson = (first, last, email = 'no email', phone = 'no phone') => {
    if(first == undefined) {
        throw new TypeError('No name provided');
    }

    return {
        first: first,
        last: last,
        email: email,
        phone: phone
    };
};