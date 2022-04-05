const inputField = document.getElementById('input');
const insertNum = num => inputField.textContent += num;
const equalTo = () => (inputField.textContent) ? inputField.textContent = eval(inputField.textContent) : false;
const eraseNum = () => inputField.textContent = inputField.textContent.substring(0, inputField.textContent.length - 1);
const clearInput = () => inputField.textContent = '';

