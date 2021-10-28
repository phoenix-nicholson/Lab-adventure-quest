import quests from '../data/quest-data.js';
import { getUser, hasCompletedAllQuests, userProfile } from '../utils.js';

userProfile();
const mapLinks = document.getElementById('map-links');

const user = getUser();

if (user.hp <= 0 || hasCompletedAllQuests(user)){
    window.location.replace('../endgame');
}


for (let quest of quests){

    if (user.completed[quest.id]){
        displaySpan(quest);
    } else {
        displayLink(quest);
    }
}

function displayLink(quest){
    const a = document.createElement('a');
    a.href = `../quest/?id=${quest.id}`;
    a.textContent = quest.title;
    a.classList.add('quest');
    a.style.top = quest.map.top;
    a.style.left = quest.map.left;
    mapLinks.appendChild(a);
    console.log(a);
}

function displaySpan(quest){
    const span = document.createElement('span');
    span.classList.add('quest');
    span.style.top = quest.map.top;
    span.style.left = quest.map.left;
    span.textContent = quest.title;

    mapLinks.appendChild(span);
}
