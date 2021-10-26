import { generateUser, setUser } from '../utils.js';
// IMPORT MODULES under test here:
// import { example } from '../example.js';

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

test('generateUser should return a userObject', (expect) => {
    const expected = {
        completed: {},
        gold: 0,
        hp: 50,
        name: 'phoenix',
        pirate: 'luffy',
    };
    const formData = new FormData();
    formData.set('name', 'phoenix');
    formData.set('pirate', 'luffy');

    const actual = generateUser(formData);

    expect.deepEqual(expected, actual);
});

test('setUser should save your localStorage', (expect)=>{
    localStorage.removeItem('USER');
    const userObject = {
        completed: {},
        gold: 0,
        hp: 50,
        name: 'phoenix',
        pirate: 'luffy',
    };
    setUser(userObject);
    const actual = JSON.parse(localStorage.getItem('USER'));
    
    expect.deepEqual(actual, userObject);
});