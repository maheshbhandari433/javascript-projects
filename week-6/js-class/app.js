const backButton = document.querySelector('#back-to-top');
const header = document.querySelector('header');
const mobileButton = document.querySelector('.mobile-menu')
const nav = document.querySelector('nav ul')
const menuItems = document.querySelectorAll('nav ul li a')
const modalButton = document.querySelector('#modal-button')



window.onscroll = function() { scrollFunction() };

function scrollFunction() {
    if(document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        backButton.style.display = 'block'
       header.classList.add('bg')

    }

    else {
        backButton.style.display = 'none'
        header.classList.remove('bg')
    }


}

function getToTop() {

    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;

}

function mobileMenu() {

    for (const link of menuItems) {
        link.addEventListener('click', mobileMenu)
    }

    if(nav.classList.contains('responsive')) {
        nav.classList.remove('responsive')
    }
    else {
        nav.classList.add('responsive')
    }
    console.log('mobile button clicked')
}

function modButton() {
overlay.classList.togggle('visible')
}

mobileButton.addEventListener('click', mobileMenu)

backButton.addEventListener('click', getToTop)

modalButton.addEventListener('click', modButton)