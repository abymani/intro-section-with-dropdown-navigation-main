

//Handling submenu opening closeing 
let dropdown= document.querySelectorAll('.dropdown')


dropdown.forEach(dropdown => {
    dropdown.addEventListener('click',function(event){
        event.currentTarget.classList.toggle('active');
    })
})


//setting nav menu for mobile view

let mobileMenu = document.querySelectorAll('.mobile-menu');

mobileMenu.forEach(menu => {
    menu.addEventListener('click',function(event){
        event.currentTarget.parentElement.classList.toggle("active-m");
    })
})
