// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { generateUser, setUser, getUser, scoreQuest } from '../utils.js';

const test = QUnit.test;

test('time to test a function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = true;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = true;

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('generateUser should compile user inputs with preexisting stats to create user object', (expect)=>{
    const expected = {
        name: 'bonanza',
        instrument: 'drummer',
        hygiene: 100,
        money: 500,
        completed: {}
    };
    const formData = new FormData();
    formData.set('name', 'bonanza');
    formData.set('instrument', 'drummer');
    const actual = generateUser(formData);
    expect.deepEqual(actual, expected);
});

test('setUser should save user object to localStorage', (expect)=>{
    localStorage.removeItem('USER');
    const expected = {
        name: 'bonanza',
        instrument: 'drummer',
        hygiene: 100,
        money: 500,
        completed: {}
    };
    setUser(expected);
    const actualString = localStorage.getItem('USER');
    const actual = JSON.parse(actualString);
    expect.deepEqual(actual, expected);
});

test('getUser should return the user object from localStorage', (expect)=>{
    const userObject = {
        name: 'bonanza',
        instrument: 'drummer',
        hygiene: 100,
        money: 500,
        completed: {}
    };
    setUser(userObject);
    const actual = getUser();
    expect.deepEqual(actual, userObject);
});

test('scoreQuest should update money, hygiene, and completed on the userObject', (expect)=>{
    const userObject = {
        name: 'bonanza',
        instrument: 'drummer',
        hygiene: 100,
        money: 500,
        completed: {}
    };
    const choiceObject = {
        id: 'negotiate',
        description: 'Negotiate with them',
        result: `
            Knowing the monsters are not too bright, you offer to go buy them all
            turkey dinners from the village pub. They give you 35 gold for meals
            that will never be delivered. I hope you can live with yourself. 
        `,
        hygiene: 0,
        money: 35
    };
    const questId = 'monsters';
    scoreQuest(choiceObject, questId, userObject);

    expect.equal(userObject.hygiene, 100);
    expect.equal(userObject.money, 535);
    expect.equal(userObject.completed[questId], true);
});