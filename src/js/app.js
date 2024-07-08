const form = document.querySelector('#form');
const nameInput = document.querySelector('#name');

form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(nameInput.value);

})