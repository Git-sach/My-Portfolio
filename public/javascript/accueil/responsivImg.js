window.addEventListener('DOMContentLoaded', () => {
    let profilImg = document.querySelector('.profilImg');
    if(window.innerWidth > 768){
        resize(profilImg);
    }
    window.addEventListener('resize', () => {
        if(window.innerWidth > 768){
            resize(profilImg);
        }
    });

})

const resize = (element) => {
    if((window.innerHeight / window.innerWidth) >= 0.5){
        element.style.width = '85%';
        element.style.height = 'auto';
    }else{
        element.style.width = 'auto';
        element.style.height = '85%';
    }
}