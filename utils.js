export function generateUser(formData){
    return {
        name: formData.get('name'),
        instrument: formData.get('instrument'),
        hygiene: 100,
        money: 500,
        completed: {}
    };
}