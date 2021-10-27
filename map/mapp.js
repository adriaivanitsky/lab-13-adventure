//links for each quest generated from quest data
//link should be disabled if user had already completed the quest
//link should contain a URL search parameter containing the quest ID

import quests from '../quest-data/quest-data.js';
import { getUser, loadProfile } from '../utils.js';
getUser();
loadProfile();

const mapLinksContainer = document.getElementById('map-links');

for (let quest of quests){
    const a = document.createElement('a');
    a.href = `../quest/?id=${quest.id}`;
    a.textContent = quest.title;
    a.classList.add('links');

    mapLinksContainer.appendChild(a);
}

