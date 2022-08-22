

let subMenu = document.querySelectorAll('.sub-menu');
let features = document.getElementById('features');
let company = document.getElementById('company');
let arrows = document.querySelectorAll('.fa-solid');
let boldItem = document.querySelectorAll('.bold');
let navMenus = document.querySelectorAll('a');

boldItem[0].classList.remove('bold');
boldItem[1].classList.remove('bold');

features.addEventListener ('click',function() {
    subMenu[0].classList.toggle('active');
    boldItem[0].classList.toggle('bold');
    arrows[0].classList.toggle('fa-angle-up');
});

company.addEventListener ( 'click', function(){
    subMenu[1].classList.toggle('active');
    arrows[1].classList.toggle('fa-angle-up');
    boldItem[1].classList.toggle('bold');
})

//setting nav menu for mobile view
let menuIcon = document.getElementById('menu-icon');
let closeMenu = document.getElementById('menu-close');
let nav = document.getElementById('nav');
menuIcon.addEventListener ('click',function(){
    nav.style.display ="flex";
    closeMenu.style.display = "block";
    nav.parentElement.style.backgroundColor =" hsla(0, 0%, 8%,0.6)";
});
closeMenu.addEventListener('click',function(){
    nav.style.display ="none";
    closeMenu.style.display = "none";
    nav.parentElement.style.backgroundColor ="hsl(0, 0%, 98%)";
})