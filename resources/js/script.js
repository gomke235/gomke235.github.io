const uključiNavigaciju = document.querySelector('.nav-btn');
const navLinkovi = document.querySelectorAll('.nav-link');

// Funkcija za otvaranje navigacione liste
uključiNavigaciju.addEventListener('click', () => {
    document.body.classList.toggle('nav-otvori');
});

// Funckija za zatvaranje navigacione liste
navLinkovi.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-otvori');
    });
});