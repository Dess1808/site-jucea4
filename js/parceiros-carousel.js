const slideContainerParceiros = document.querySelector('.container-parceiros');
const slideParceiros = document.querySelector('.slides-parceiros');
const prevButtonParceiros = document.getElementById('prev-button-parceiros');
const nextButtonParceiros = document.getElementById('next-button-parceiros');
const intervalParceiros = 2000;

const slidesParceiros = document.querySelectorAll('.slide-parceiros');
let indexParceiros = 1;
let slideIdParceiros;

const firstCloneParceiros = slidesParceiros[0].cloneNode(true)
const lastCloneParceiros = slidesParceiros[slidesParceiros.length - 1].cloneNode(true)

firstCloneParceiros.id = 'first-clone';
lastCloneParceiros.id = 'last-clone';

//infinte
slideParceiros.append(firstCloneParceiros);
slideParceiros.prepend(lastCloneParceiros);

const slideWidthParceiros = slidesParceiros[indexParceiros].clientWidth;

slideParceiros.style.transform = `translateX(${-slideWidthParceiros * indexParceiros}px)`;

//funcoes
const startSlideParceiros = () => {
    slideIdParceiros = setInterval(()=>{
        moveToNextSlideParceiros();
    }, intervalParceiros);
}

const getSlidesParceiros = () => document.querySelectorAll('.slide-parceiros');

//mover para direita
const moveToNextSlideParceiros = () => {
    slidesParceiros = getSlidesParceiros();//verificar na segunda no outro ambiente 
    if(indexParceiros >= slidesParceiros.length -1 ) return 
    indexParceiros++;
    slideParceiros.style.transform = `translateX(${-slideWidthParceiros * indexParceiros}px)`;
    slideParceiros.style.transition = `0.7s`;
}

//mover para esquerda
const moveToPreviousSlideParceiros = ()=>{
    if(indexParceiros <= 0) return 
    indexParceiros--;
    slideParceiros.style.transform = `translateX(${-slideWidthParceiros * indexParceiros}px)`;
    slideParceiros.style.transition = `0.7s`;
}

//ouvindo os eventos
slideParceiros.addEventListener('transitionend', ()=>{
    slidesParceiros = document.querySelectorAll('.slide-parceiros');
    if(slidesParceiros[indexParceiros].id === firstCloneParceiros.id){
        slideParceiros.style.transition = 'none';
        indexParceiros = 1;
        slideParceiros.style.transform = `translateX(${-slideWidthParceiros * indexParceiros}px)`; 
    }

    if(slidesParceiros[indexParceiros].id === lastCloneParceiros.id){
        slideParceiros.style.transition = 'none';
        indexParceiros = 1;
        slideParceiros.style.transform = `translateX(${-slideWidthParceiros * indexParceiros}px)`; 
    }    
})


slideContainerParceiros.addEventListener('mouseenter', ()=>{
    clearInterval(slideIdParceiros);
})

slideContainerParceiros.addEventListener('mouseleave', startSlideParceiros);

nextButtonParceiros.addEventListener('click', moveToNextSlideParceiros);
prevButtonParceiros.addEventListener('click', moveToPreviousSlideParceiros);

startSlideParceiros();