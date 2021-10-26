import { generateUser, setUser, getUser, scoreQuest, hasCompletedAllQuests } from '../utils.js';
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

test('getUser should return the user object from localStorage', (expect)=>{
    const userObject = {
        completed: {},
        gold: 0,
        hp: 50,
        name: 'phoenix',
        pirate: 'luffy',
    };
    setUser(userObject);
    const actual = getUser();
    expect.deepEqual(actual, userObject);
});

test('scoreQuest should update gold, hp and completed on the userObject', (expect)=>{
    const userObject = {
        completed: {},
        gold: 0,
        hp: 50,
        name: 'phoenix',
        pirate: 'luffy',
    };
    const choiceObject = {
        id: 'fight',
        description:'Do as Luffy says and go to Battle',
        result: `
        As you go into your fight with nothing but determination to win 
        you look at your crew and see nothing but the same from them. 
        You throw your fists and swing your swords, not too long after 
        you look at the group of marines lying down infront of you. 
        You take 25 hp damage. In addition you find 60 gold.
        `,
        hp:-25,
        gold:50
    };
    const questId = 'marines';

    scoreQuest(choiceObject, questId, userObject);

    expect.equal(userObject.hp, 25);
    expect.equal(userObject.gold, 50);
    expect.equal(userObject.completed[questId], true);
});