import './site.css';

alert('Hello World');
document.getElementById('main').innerHTML = 'Hello world';


function showRandomWords() {
    let counter = 1;
    let randomNumber = getRandomNumber();
    /*for (let i = 1; i <= getRandomNumber(); i++) {
        let newElement = document.createElement('div');
        newElement.innerHTML = getRhyme(i);
        document.getElementById('main').append(newElement);
    }*/
    while(counter <= randomNumber) {
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

showRandomWords();