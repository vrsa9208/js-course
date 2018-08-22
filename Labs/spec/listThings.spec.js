import { listThings } from '../src/listThings';

describe('List Things', () => {
    it('Can list things as html tags', () => {
        const listOfPeople = listThings('div', ['Tahani', 'Chidi', 'Jianyu']);
        expect(listOfPeople).toEqual('<div>1. Tahani</div><div>2. Chidi</div><div>3. Jianyu</div>');
    });

    it('Can print roman numerals when needed', () => {
        const listOfPeople = listThings('div', ['Tahani', 'Chidi', 'Jianyu'], true);
        expect(listOfPeople).toEqual('<div>i. Tahani</div><div>ii. Chidi</div><div>iii. Jianyu</div>');
    });
});