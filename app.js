// import functions and grab DOM elements
const userForm = document.getElementById('user-form');
// initialize global state

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state

userForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    const formData = new FormData(userForm);
    const userObject = generateUser(formData);
    setUser(userObject);
    window.location.replace('./map');
});
