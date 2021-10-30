import quests from './quest-data/quest-data.js';

export function generateUser(formData){
    return {
        name: formData.get('name'),
        instrument: formData.get('instrument'),
        hygiene: 100,
        money: 500,
        completed: {}
    };
}

export function setUser(userObject){
    const userString = JSON.stringify(userObject);
    return localStorage.setItem('USER', userString);
}

export function findById(items, id){
    for (let item of items){
        if (item.id === id){
            return item;
        }
    } 
}

export function getUser(){
    const userString = localStorage.getItem('USER');
    return JSON.parse(userString);
}

export function scoreQuest(choiceObject, questId, userObject){
    userObject.hygiene += choiceObject.hygiene;
    userObject.money += choiceObject.money;
    userObject.completed[questId] = true;
}

// const userInfo = document.querySelector('.user-info');

// export function renderUser(user){
//     const avatar = document.createElement('img');
// }

// export function completedAllQuests();

// export function loadProfile(){

// }

export function loadProfile(){
    const user = getUser();
    const img = document.getElementById('user-image');
    img.src = `../assets/${user.instrument}.jpeg`;
    const name = document.getElementById('user-name');
    name.textContent = user.name;
    const money = document.getElementById('user-money');
    money.textContent = `money: ${user.money}`;
    const hygiene = document.getElementById('user-hygiene');
    hygiene.textContent = `hygiene: ${user.hygiene}`;
}

export function hasCompletedAllQuests(userObject){
    for (let quest of quests){
        if (!userObject.completed[quest.id]){
            return false;
        }
    }
    return true;
}

// export function displaySpan(quest){
//     const span = document.createElement('span');
//     span.textContent = quest.title;
//     span.classList.add('quest');
//     span.style.top = quest.map.top;
//     span.style.left = quest.map.left;
//     mapLinks.appendChild(span);
// }

// export function displayLink(quest){
//     const a = document.createElement('a');
//     a.href = `../quest-data/?id=${quest.id}`;
//     a.textContent = quest.title;
//     a.classList.add('quest');
//     a.style.top = quest.map.top;
//     a.style.left = quest.map.left;
//     mapLinks.appendChild(a);
// }