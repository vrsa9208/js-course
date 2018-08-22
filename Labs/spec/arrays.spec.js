import getPeopleArray from '../src/arrays.js';

describe('Arrays Test', () => {
    it('Can be created', () => {
        const people = getPeopleArray();
        expect(people.length).toEqual(5);
    });

    it('Can be altered', () => {
        const people = getPeopleArray();
        const testPerson = { first: "Jo", last:"Bennett"};
        // Add a person to the end of the array here
        people.push(testPerson);
        expect(people.length).toEqual(6);
        expect(people[5].first).toEqual("Jo");
        // Add a person to the front of the array here
        people.unshift(testPerson);
        expect(people.length).toEqual(7);
        expect(people[0].last).toEqual("Bennett");
        // Remove a person from the end of the array here
        people.pop();
        expect(people.length).toEqual(6);
        expect(people[5].first).not.toEqual("Jo");
        // Remove a person to the front of the array here
        people.shift();
        expect(people.length).toEqual(5);
        expect(people[0].last).not.toEqual("Bennett");
    });

    it('Can loop two ways', () => {
        const people = getPeopleArray();
        // loop through the persons array using "for in", console.logging each.
        console.log('\nLoop using for in');
        for(let i in people) {
            console.log(people[i]);
        }
        console.log('\nLoop using for of');
        // loop through the persons array using "for of", console.logging each.
        for(let p of people) {
            console.log(p);
        }
    });

    it('Can destructure', () => {
        const people = getPeopleArray();
        const [p1,p2,p3,p4,p5] = people;
        

        expect(p1).toEqual(people[0]);
        expect(p2).toEqual(people[1]);
        expect(p3).toEqual(people[2]);
        expect(p4).toEqual(people[3]);
        expect(p5).toEqual(people[4]);
    });

    it('Can convert your array of people into an array of strings', () => {
        const people = getPeopleArray();
        const arrayOfStrings = people.map(p => `name: ${p.first} ${p.last}`);
        
        expect(arrayOfStrings[0])
            .toEqual(`name: ${people[0].first} ${people[0].last}`);
        expect(arrayOfStrings[1])
            .toEqual(`name: ${people[1].first} ${people[1].last}`);
        expect(arrayOfStrings[2])
            .toEqual(`name: ${people[2].first} ${people[2].last}`);
        expect(arrayOfStrings[3])
            .toEqual(`name: ${people[3].first} ${people[3].last}`);
    });
});