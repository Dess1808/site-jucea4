const slideContainer = document.querySelector('.content-gallery-hidden');
const slide = document.querySelector('.gallery-slides-hidden');
const fechar = document.querySelector('.fechar-gallery');
//variavel para abrir
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

const moveToNextSlide = () => 
{
    slides = getSlide();
    if(index >= slides.length -1 ) return;
    index++;
    slide.style.transform = `translateX(${-slideWidth * index}px)`;
    slide.style.transition = `0.5s`;
}

const moveToPreviousSlide = () => 
{
    if(index <= 0) return;
    index--;
    slide.style.transform = `translateX(${-slideWidth * index}px)`;
    slide.style.transition = `0.5s`;
}


//abrir galeria 
//fechar fechar 


nextButton.addEventListener('click', moveToNextSlide)
prevButton.addEventListener('click', moveToPreviousSlide)