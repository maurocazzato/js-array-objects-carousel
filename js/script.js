// Creare un carosello come nello screenshot allegato.

// MILESTONE 1
// Per prima cosa, creiamo il markup statico: l’html con tutto il necessario perchè funzioni il carosello.
// (Se su qualche parte del layout vedete che ci state perdendo troppo tempo tralasciate i dettagli e passate alla parte logica il prima possibile).

// MILESTONE 2
// Al click dell’utente sulle frecce (sia Prev che Next), il programma cambierà l’immagine attiva, che quindi verrà visualizzata al posto della precedente.


// const imageArray = [ 
//     { image: 'img/01.webp', title: 'Marvel\'s Spiderman Miles Morale', text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.', },

//     { image: 'img/02.webp', title: 'Ratchet & Clank: Rift Apart', text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.', },

//     { image: 'img/03.webp', title: 'Fortnite', text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.", },

//     { image: 'img/04.webp', title: 'Stray', text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city', },

//     { image: 'img/05.webp', title: "Marvel's Avengers", text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.', } 
// ];

// let itemContent = '';

// const images = imageArray.map(item => item.image);
// const titles = imageArray.map(item => item.title);
// const texts = imageArray.map(item => item.text);

const imageArray = [ 
    { image: 'img/01.webp', title: 'Marvel\'s Spiderman Miles Morales', text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.', },

    { image: 'img/02.webp', title: 'Ratchet & Clank: Rift Apart', text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.', },

    { image: 'img/03.webp', title: 'Fortnite', text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.", },

    { image: 'img/04.webp', title: 'Stray', text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city', },

    { image: 'img/05.webp', title: "Marvel's Avengers", text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.', } 
];
let itemContent = '';

// creo div con immagini, titolo e testo allegate
for (const item of imageArray) {
    itemContent += `
        <div class="item">
            <img src="${item.image}" alt="${item.title}">
            <div class="item-content">
                <h2>${item.title}</h2>
                <p>${item.text}</p>
            </div>
        </div>
    `;
}
// aggiungo a box
const itemSlider = document.querySelector('.item-slider').innerHTML = itemContent;

const item = document.getElementsByClassName('item');

// do classe active a box
let itemActive = 0;

item[itemActive].classList.add('active');

// creo tasti per scorrimento
let next = document.querySelector('.next');
let prev = document.querySelector('.prev');

next.addEventListener ('click', function() {

    item[itemActive].classList.remove('active');
    

    if ( itemActive === imageArray.length-1 ) {
        itemActive = 0;
    }
    else {
        itemActive++;
    };

    item[itemActive].classList.add('active');
    
});

prev.addEventListener ('click', function() {

    item[itemActive].classList.remove('active');
   

    if ( itemActive === 0 ) {
        itemActive = imageArray.length - 1;
    }
    else {
        itemActive--;
    };

    item[itemActive].classList.add('active');
    
});