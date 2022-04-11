// const slideContainer = document.querySelector('.content-gallery-hidden');
const pagePasso = document.querySelector('.page-gallery-hidden');
const slide = document.querySelector('.gallery-slides-hidden');
const fechar = document.querySelector('.fechar-gallery');
const abrir = document.querySelector('.gallery-content');
const prevButton = document.getElementById('prev-button-gallery');
const nextButton = document.getElementById('next-button-gallery');


let slides = document.querySelectorAll('.gallery-slide-hidden');
let index = 0;

//definindo
const slideWidth = slides[index].clientWidth;

//comecando
slide.style.transform = `translateX(${-slideWidth * index}px)`;

//controls slides
const getSlide = () => document.querySelectorAll('.gallery-slide-hidden');

//mover para direita
const moveToNextSlide = () => 
{
    slides = getSlide();
    if(index >= slides.length -1 ) return;
    index++;
    slide.style.transform = `translateX(${-slideWidth * index}px)`;
    slide.style.transition = `0.5s`;
}

//mover para esquerda
const moveToPreviousSlide = () => 
{
    if(index <= 0) return;
    index--;
    slide.style.transform = `translateX(${-slideWidth * index}px)`;
    slide.style.transition = `0.5s`;
}


//abrir galeria
abrir.addEventListener('click', () => 
{
    pagePasso.style.opacity = '1';
    pagePasso.style.visibility = 'visible';
})

//fechar fechar 
fechar.addEventListener('click', () => 
{
    pagePasso.style.opacity = '0';
    pagePasso.style.visibility = 'hidden';

    index = 0;
    slide.style.transform = `translateX(${-slideWidth * index}px)`;
})


nextButton.addEventListener('click', moveToNextSlide)
prevButton.addEventListener('click', moveToPreviousSlide)