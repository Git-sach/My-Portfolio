
let page = document.querySelector('.page').classList;
let navbar = document.querySelector('.nav').classList;
let firstBar = document.querySelector('.firstBar').classList;
let secondBar = document.querySelector('.secondBar').classList;
let thirdBar = document.querySelector('.thirdBar').classList;

document.querySelector('.logoNav').onclick = function(){
    if(page.contains('pageNavOpen')){  
        page.remove('pageNavOpen'); 
        navbar.remove('NavOpen');
        firstBar.remove('rotFirstBar');
        secondBar.remove('removeSecondBar');
        thirdBar.remove('rotThirdBar');
    }
    else{
        page.add('pageNavOpen'); 
        navbar.add('NavOpen');
        firstBar.add('rotFirstBar');
        secondBar.add('removeSecondBar');
        thirdBar.add('rotThirdBar');
    }    
};