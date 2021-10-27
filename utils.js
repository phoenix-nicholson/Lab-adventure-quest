import quests from './data/quest-data.js';

export function findById(items, id){
    for (let item of items){
        if (item.id === id){
            return item;
        }
    }
}

export function generateUser(formData){
    return {
        completed: {},
        gold: 0,
        hp: 100,
        name: formData.get('name'),
        pirate: formData.get('pirate'),
    };
}
export function setUser(userObject){
    const userString = JSON.stringify(userObject);
    localStorage.setItem('USER', userString);
}

export function getUser(){
    const userString = localStorage.getItem('USER');
    return JSON.parse(userString);
}

export function scoreQuest(choiceObject, questId, userObject){
    userObject.hp += choiceObject.hp;
    userObject.gold += choiceObject.gold;
    userObject.completed[questId] = true; 
}

export function hasCompletedAllQuests(userObject){
    for (let quest of quests){
        if (!userObject.completed[quest.id]){
            return false;
        }
    }
    return true;
}
    
export function userProfile(){
    const user = getUser();

    const img = document.getElementById('pirate-header');
    img.src = `../assets/${user.pirate}.jpeg`;

    const name = document.getElementById('name-header');
    name.textContent = user.name;

    const gold = document.getElementById('gold-header');
    gold.textContent = `Gold: ${user.gold}`;

    const hp = document.getElementById('hp-header');
    hp.textContent = `HP: ${user.hp}`;
}