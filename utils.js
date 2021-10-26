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