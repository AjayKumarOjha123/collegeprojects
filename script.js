let menu = document.getElementById('menuBtn');
let openNav = document.getElementById('openNav'); 
let nav = document.querySelector('.navbar');

let check = 0 ;

menu.addEventListener('click' ,()=>{
    if(check==0){
        openNav.style.height = "100vh" ;
        openNav.style.paddingTop = "70px" ;
        nav.style.backgroundColor = "#000" ;
        menu.classList.replace('ri-menu-3-line' , 'ri-close-fill')
        check = 1 ;
    }else{
        openNav.style.height = "0" ;
        openNav.style.paddingTop = "0px" ;
        nav.style.backgroundColor = "#222" ;
        menu.classList.replace( 'ri-close-fill' , 'ri-menu-3-line')
        check = 0 ;
    }
})