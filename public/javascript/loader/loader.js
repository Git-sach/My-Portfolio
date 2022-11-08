const loader = document.querySelector('.loader');
const body = document.querySelector('body');

let timerEnd = false;
let loaderEnd = false;

setTimeout(() => {
    timerEnd = true;
}, 3000);

window.addEventListener('load', () => {
    loaderEnd = true;
});

const intervalID = setInterval(() => {
    if(timerEnd && loaderEnd){
        clearInterval(intervalID);
        loader.style.animation= 'desapear 1s 1 forwards';
        body.style.overflow = 'auto';
    }
}, 1000)