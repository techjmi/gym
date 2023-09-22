burger = document.querySelector('.burger')
navlist = document.querySelector('.navlist')
navbar = document.querySelector('.navbar')
rightnav = document.querySelector('.rightnav')



burger.addEventListener('click', ()=>{
    rightnav.classList.toggle('v-class');
    navlist.classList.toggle('v-class');
    navbar.classList.toggle('h-nav');

})