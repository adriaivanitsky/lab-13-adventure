// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { generateUser, setUser } from '../utils.js';

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