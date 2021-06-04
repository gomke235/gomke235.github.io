const uključiNavigaciju = document.querySelector('.nav-btn');
const navLinkovi = document.querySelectorAll('.nav-link');

uključiNavigaciju.addEventListener('click', () => {
    document.body.classList.toggle('nav-otvori');
});

navLinkovi.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-otvori');
    });
});