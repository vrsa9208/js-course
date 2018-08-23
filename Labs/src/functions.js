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

module.exports = {
    expression: expression,
    statement: statement,
    arrow: arrow,
    makePerson: makePerson
};