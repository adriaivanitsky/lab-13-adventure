import quests from '../quest-data/quest-data.js';
import { findById, getUser, setUser } from '../utils.js';

const params = new URLSearchParams(window.location.search);
const questData = findById(quests, params.get('id'));
const title = document.getElementById('quest-title');
title.textContent = questData.title;
const img = document.getElementById('quest-image');
img.src = ``;
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
button.textContent = 'choose my choice';
questChoices.append(button);

questChoices.addEventListener('submit', (e)=>{
    e.preventDefault();
    const chosen = document.querySelector('input[type=radio]:checked');
    const chosenId = chosen.value;
    // console.log(chosen);
    // console.log(chosenId);
    // console.log(questData);
    const choiceData = findById(questData.choices, chosenId);
    const user = getUser();
    user.hygiene = user.hygiene + choiceData.hygiene;
    user.money = user.money + choiceData.money;
    user.completed[questData.id] = true;
    setUser(user);

    const questDetails = document.getElementById('quest-details');
    questDetails.classList.add('hidden');
    const questResults = document.getElementById('quest-results');
    questResults.textContent = choiceData.result;
    questResults.classList.remove('hidden');

});
