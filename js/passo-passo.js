const contentPagePasso = document.querySelector('.content-page-passo');
const fechar = document.querySelector('.fechar-passo');

const buttonIndividual = document.querySelector('.button-individual');
const buttonLimitada = document.querySelector('.button-limitada');
//button dos temas, e preciso fazer para cada passo?

//Fechar passo a passo
fechar.addEventListener('click', () => {
    contentPagePasso.style.opacity = '0';
    contentPagePasso.style.visibility = 'hidden';
})

//abrir individual
buttonIndividual.addEventListener('click', () => {
    contentPagePasso.style.opacity = '1';
    contentPagePasso.style.visibility = 'visible';
})  

//abrir limitada
buttonLimitada.addEventListener('click', () => {
    contentPagePasso.style.opacity = '1';
    contentPagePasso.style.visibility = 'visible';
})