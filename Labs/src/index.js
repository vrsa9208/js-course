import './site.css';
//import getBrowserInfo from './getBrowserInfo';
import jsonPersons from './persons.json';

//alert('Hello Node JS');
document.getElementById('main').innerHTML = 'Hello world';

async function getPersons() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(jsonPersons);
        }, 3000);
    });
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

async function showPersonsCards() {
    let persons = await getPersons();
    let personsCardsHtml = getPersonsCardsAsHtml(persons);
    document.getElementById('main').innerHTML = personsCardsHtml;
}

//showRandomWords();
//document.getElementById('main').innerHTML = getBrowserInfo();
showPersonsCards();