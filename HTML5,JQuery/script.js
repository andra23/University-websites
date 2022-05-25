/*const login_form= document.getElementById('login_form');
const username = document.getElementById('name');

login_form.addEventListener('input',e => {
    e.preventDefault();
    validateInputs();

});
const setError = (element,message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');
    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
}
const setSuccess  = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');
    errorDisplay.innerText  = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');


}
const validateInputs = () => {
const usernameValue = username.value.trim();
if(usernameValue === ''){
    setError(username,'Username is required');

}else {
        setSuccess(username)
}
};
*/
