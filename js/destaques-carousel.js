const slideContainerDestaques = document.querySelector('.container-destaques');
const slideDestaques = document.querySelector('.slides-destaques');
const prev_Button = document.getElementById('prev-button');
const next_Button = document.getElementById('next-button');
const intervalDestaques = 2000;

let slidesDestaques = document.querySelectorAll('.slide-destaques');
let indexDestaques = 1;
let slideIdDestaques;

const firstCloneDestaques  = slidesDestaques[0].cloneNode(true);
const lastCloneDestaques  = slidesDestaques[slidesDestaques.length - 1].cloneNode(true);

firstCloneDestaques.id = 'first-clone';
lastCloneDestaques.id = 'last-clone';

//infinite
slideDestaques.append(firstCloneDestaques);
slideDestaques.prepend(lastCloneDestaques);

const slideWidthDestaques = slidesDestaques[indexDestaques].clientWidth;

slideDestaques.style.transform = `translateX(${-slideWidthDestaques * indexDestaques}px)`;

const startSlide = () => {
    slideId = setInterval(() => {
        moveToNextSlide();
    }, intervalDestaques);
}

const getSlides = () => document.querySelectorAll('.slide-destaques');

//movendo para a direita
const moveToNextSlide = () => {
    slidesDestaques = getSlides();
    if(indexDestaques >= slidesDestaques.length - 1) return;
    indexDestaques++;
    slideDestaques.style.transform = `translateX(${-slideWidthDestaques * indexDestaques}px)`;
    slideDestaques.style.transition = `.7s`;
}

//movendo para a esquerda
const moveToPreviousSlide = () => {
    if(indexDestaques <= 0) return;
    indexDestaques--;
    slideDestaques.style.transform = `translateX(${-slideWidthDestaques * indexDestaques}px)`;
    slideDestaques.style.transition = `.7s`;
}


//ativando o evento
slideDestaques.addEventListener('transitionend', () => {
    slidesDestaques = document.querySelectorAll('.slide-destaques');
    if(slidesDestaques[indexDestaques].id === firstCloneDestaques.id){
        slideDestaques.style.transition = 'none';
        indexDestaques = 1;
        slideDestaques.style.transform = `translateX(${-slideWidthDestaques * indexDestaques}px)`;
    }

    if(slidesDestaques[indexDestaques].id === lastCloneDestaques.id){
        slideDestaques.style.transition = 'none';
        indexDestaques = 1;
        slideDestaques.style.transform = `translateX(${-slideWidthDestaques* indexDestaques}px)`;
    }
})

slideContainerDestaques.addEventListener('mouseenter', () => {
    clearInterval(slideId);
})

slideContainerDestaques.addEventListener('mouseleave', startSlide);

next_Button.addEventListener('click', moveToNextSlide);
prev_Button.addEventListener('click', moveToPreviousSlide);

startSlide();