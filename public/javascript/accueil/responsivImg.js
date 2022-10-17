
window.addEventListener('resize', () => {
    if((window.innerHeight / window.innerWidth) >= 0.5){
        document.querySelector('.profilImg').style.width = '85%';
        document.querySelector('.profilImg').style.height = 'auto';
    }else{
        document.querySelector('.profilImg').style.width = 'auto';
        document.querySelector('.profilImg').style.height = '85%';
    }
});