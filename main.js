const navbar = document.querySelector('.menu');
const nav = document.querySelector('.nav');
const fa = document.querySelector('.nav__fb');
const space = document.querySelector('.space')


const toggle = () => {
    navbar.classList.toggle('collapse');

}

fa.addEventListener('click', toggle);