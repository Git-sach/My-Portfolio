window.addEventListener('DOMContentLoaded', () => {
    let profilImg = document.querySelector('.profilImg');

    risize(profilImg);

    window.addEventListener('resize', () => {
        risize(profilImg);
    });

})

const risize = (element) => {
    if((window.innerHeight / window.innerWidth) >= 0.5 && window.innerWidth > 768){
        element.style.width = '85%';
        element.style.height = 'auto';
    }else{
        element.style.width = 'auto';
        element.style.height = '85%';
    }
}