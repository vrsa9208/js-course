import './site.css';
//import getBrowserInfo from './getBrowserInfo';

//alert('Hello Node JS');
document.getElementById('main').innerHTML = 'Hello world';
let jsonPersons = [];

async function getPersons(numberOfPersons=5) {
    return fetch(`https://randomuser.me/api/?results=${numberOfPersons}`);
}

function getPersonsCardsAsHtml(persons) {
    return persons.map(p =>
        `
        <section class="person-card">
        <header>
            <h1>
            ${p.name.first} ${p.name.last}
            </h1>
        </header>
        <div class="profile-image-div">
            <img src="${p.picture.large}" alt="${p.name.first} ${p.name.last}" />
        </div>
        <div class="person-data">
            <ul>
            <li>
                <span class="label">Location</span>
                <br />${p.location.street}
                <br />${p.location.city}, ${p.location.state} ${p.location.postcode}
                <br />${p.location.country}</li>
            <li>
                <span class="label">Email:</span> ${p.email}</li>
            <li>
                <span class="label">Cell:</span> ${p.cell}</li>
            <li>
                <span class="label">Gender:</span> ${p.gender}</li>
            </ul>
        </div>
        </header>
        </section>
        `
    );
}


function showRandomWords() { // eslint-disable-line no-unused-vars
    let counter = 1;
    let randomNumber = getRandomNumber();
    /*for (let i = 1; i <= getRandomNumber(); i++) {
        let newElement = document.createElement('div');
        newElement.innerHTML = getRhyme(i);
        document.getElementById('main').append(newElement);
    }*/
    while (counter <= randomNumber) {
        let newElement = document.createElement('div');
        newElement.innerHTML = getRhyme(counter++);
        document.getElementById('main').append(newElement);
    }

}


function getRandomNumber() {
    let min = 1;
    let max = 10;
    let random = Math.floor(Math.random() * (max - min + 1)) + min;
    return random;
}


function getRhyme(number) {
    switch (number) {
    case 1:
        return 'fun';
    case 2:
        return 'blue';
    case 3:
        return 'free';
    case 4:
        return 'pour';
    case 5:
        return 'hive';
    case 6:
        return 'kicks';
    case 7:
        return 'heaven';
    case 8:
        return 'skate';
    case 9:
        return 'rhyme';
    case 10:
        return 'pen';
    }
}

function loadPersonsCards() {
    let numberOfPersons = 3;
    getPersons(numberOfPersons)
    .then(response => response.json())
    .then(jsonResponse => {
        jsonPersons = jsonResponse.results;
        showPersonsCards(jsonPersons);
    });
}

//showRandomWords();
//document.getElementById('main').innerHTML = getBrowserInfo();
loadPersonsCards();

function showPersonsCards(persons) {
    let personsCardsHtml = getPersonsCardsAsHtml(persons);
    document.getElementById('main').innerHTML = personsCardsHtml;
}

function addPerson() {
    let first = document.getElementById('input-first').value;
    let last = document.getElementById('input-last').value;
    let email = document.getElementById('input-email').value;
    let cell = document.getElementById('input-cell').value;
    let photoUrl = document.getElementById('input-photo-url').value;
    
    let newPerson = {
        name: {
            first: first,
            last: last
        },
        picture: {
            large: photoUrl
        },
        location: {
            street: 'Simple street',
            city: 'Simple city',
            country: 'Simple country',
            state: 'Simple state',
            postcode: 'Simple postcode'
        },
        email: email,
        cell: cell,
        gender: 'No gender'
    };
    jsonPersons.unshift(newPerson);
    showPersonsCards(jsonPersons);

    document.querySelector('form').reset();
}

document.querySelector('form').addEventListener('submit', ev => ev.preventDefault());
document.getElementById('button-add-person').addEventListener('click', addPerson);