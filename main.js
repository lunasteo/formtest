
const form = document.querySelector('#form');
const btn = document.querySelector('#btn');
const root = document.querySelector('#root')
const formName = document.querySelector('#name')
const formLastName = document.querySelector('#lastName');

btn.addEventListener('click', (e) => {
    e.preventDefault();
    console.log('click');
    html();
    setTimeout(() => {
        cleanHtml()
    }, 2000);
    form.reset();


})

const html = () => {
    root.innerHTML = `
            <h2>Datos ingresados correctamente</h2>
            <li>Nombre: ${formName.value}</li>
            <li>Apellido: ${formLastName.value}</li>
            `
}

const cleanHtml = () => {
    while (root.firstChild) {
        root.removeChild(root.lastChild);
    }
}