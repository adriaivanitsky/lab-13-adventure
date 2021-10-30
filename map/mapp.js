//links for each quest generated from quest data
//link should be disabled if user had already completed the quest
//link should contain a URL search parameter containing the quest ID

import quests from '../quest-data/quest-data.js';
import { getUser, loadProfile, hasCompletedAllQuests } from '../utils.js';
const user = getUser();
getUser();
loadProfile();
hasCompletedAllQuests(user, quests);

const mapLinksContainer = document.getElementById('map-links');


if (user.money <= 0 || hasCompletedAllQuests(user)){
    window.location.replace('../gameover');
}

if (user.hygiene <= 0 || hasCompletedAllQuests(user)){
    window.location.replace('../gameover');
}


for (let quest of quests){
    if (user.completed[quest.id]){
        displaySpan(quest);
    } else {
        displayLink(quest);
    }
}

function displaySpan(quest){
    const span = document.createElement('span');
    span.textContent = quest.title;
    span.classList.add('quest');
    mapLinksContainer.appendChild(span);
}

function displayLink(quest){
    const a = document.createElement('a');
    a.href = `../quest/?id=${quest.id}`;
    a.textContent = quest.title;
    a.classList.add('quest');
    mapLinksContainer.appendChild(a);
}


// for (let quest of quests){
//     const a = document.createElement('a');
//     a.href = `../quest/?id=${quest.id}`;
//     a.textContent = quest.title;
//     a.classList.add('links');

//     mapLinksContainer.appendChild(a);
// }