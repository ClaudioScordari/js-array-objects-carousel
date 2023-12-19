// Array di oggetti
const images = [
    {
        url: 'http://www.viaggiareonline.it/wp-content/uploads/2014/11/sweden_148857365.jpg',
        title: 'Svezia',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },

    {
        url: 'https://static1.evcdn.net/images/reduction/1513757_w-1920_h-1080_q-70_m-crop.jpg',
        title: 'Perù',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },

    {
        url: 'https://img.itinari.com/pages/images/original/0d3ed180-d22d-48e8-84df-19c4d888b41f-62-crop.jpg?ch=DPR&dpr=2.625&w=1600&s=7ebd4b5a9e045f41b4e0c7c75d298d6c',
        title: 'Chile',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },
    {
        url: 'https://static1.evcdn.net/images/reduction/1583177_w-1920_h-1080_q-70_m-crop.jpg',
        title: 'Argentina',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },
    {
        url: 'https://cdn.sanity.io/images/24oxpx4s/prod/ed09eff0362396772ad50ec3bfb728d332eb1c30-3200x2125.jpg?w=1600&h=1063&fit=crop',
        title: 'Colombia',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    }
];

// Indice attivo
let activeIndex = 0;

// Img
myImg = document.querySelector('img');

// Box dell'img
const boxImg = document.querySelector('.box-img');

// Img al caricamento della pagina + descrizione
boxImg.innerHTML += `
    <div class="text">
        <h1> 
            ${images[activeIndex]['title']}      
        </h1>
        <div> 
            ${images[activeIndex]['description']}      
        </div>
    </div>
    <img class="img-fluid" src="${images[activeIndex]['url']}" alt="">
`;

// Seleziono i bottoni
const goOn = document.querySelector('.go-on');
const goBack = document.querySelector('.go-back');

// Avanti
goOn.addEventListener('click', function () {

    if (activeIndex < images.length - 1) {
        activeIndex++;
    } else {
        activeIndex = 0;
    }

    boxImg.innerHTML = `
         <div class="text">
             <h1> 
                 ${images[activeIndex]['title']}      
            </h1>
            <div> 
                ${images[activeIndex]['description']}      
            </div>
        </div>
        <img class="img-fluid" src="${images[activeIndex]['url']}" alt="">
    `;
});

// Indietro
goBack.addEventListener('click', function () {

    if (activeIndex > 0) {
        activeIndex--;
    } else {
        activeIndex = images.length - 1;
    }

    boxImg.innerHTML = `
        <div class="text">
            <h1> 
                ${images[activeIndex]['title']}      
            </h1>
            <div> 
                ${images[activeIndex]['description']}      
            </div>
        </div>
        <img class="img-fluid" src="${images[activeIndex]['url']}" alt="">
    `;
});
















