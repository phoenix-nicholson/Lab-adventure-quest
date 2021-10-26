import quests from '../data/quest-data.js';
import { findById, getUser, setUser, scoreQuest } from '../utils.js';

const params = new URLSearchParams(window.location.search);

const questData = findById(quests, params.get('id'));

const title = document.getElementById('quest-title');
title.textContent = questData.title;
const img = document.getElementById('quest-image');
img.src = `../assets/quests/${questData.image}`;
const description = document.getElementById('quest-description');

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
const button = document.createElement('button')
button.textContent = ''