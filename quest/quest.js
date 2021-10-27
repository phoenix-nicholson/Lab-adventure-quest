import quests from '../data/quest-data.js';
import { findById, getUser, setUser, scoreQuest } from '../utils.js';

const params = new URLSearchParams(window.location.search);

const questData = findById(quests, params.get('id'));

const title = document.getElementById('quest-title');
title.textContent = questData.title;
const img = document.getElementById('quest-image');
img.src = `../quests/${questData.image}`;
document.body.style.background = `../quests/${questData.background}`;

const description = document.getElementById('quest-description');
description.textContent = questData.description;

const questChoices = document.getElementById('quest-choices');
for (let choice of questData.choices){
    const label = document.createElement('label');

    const input = document.createElement('input');
    input.type = 'radio';
    input.name = 'choice';
    input.required = true;
    input.value = choice.id;

    const span = document.createElement('span');
    span.textContent = choice.description;
    label.append(input, span);     
    questChoices.append(label);

}
const button = document.createElement('button');
button.textContent = 'select';
questChoices.append(button);


questChoices.addEventListener('submit', (event)=>{
    event.preventDefault();
    const selectedRadio = document.querySelector('input[type="radio"]:checked');
    const choice = findById(questData.choices, selectedRadio.value);
    console.log(choice);

    const user = getUser();

    scoreQuest(choice, questData.id, user);

    setUser(user);

    const questDetails = document.getElementById('quest-details');
    questDetails.classList.add('hidden');
    const questResults = document.getElementById('results');
    const resultP = document.createElement('p');
    resultP.textContent = choice.result;
    const backLink = document.createElement('a');
    backLink.href = '../map';
    backLink.textContent = 'Back to The Map';
    questResults.append(resultP, backLink);
    questResults.classList.remove('hidden');
});
