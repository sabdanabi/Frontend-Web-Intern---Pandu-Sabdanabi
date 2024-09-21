// Navbar Fixed
window.onscroll = function () {
    const header = document.querySelector('header')
    const fixedNav = header.offsetTop;

    if (window.pageYOffset > fixedNav){
        header.classList.add('navbar-fixed');
    }else{
        header.classList.remove('navbar-fixed');
    }
}

// Hamburger
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu')

hamburger.addEventListener('click', function () {
    hamburger.classList.toggle('hamburger-active')
    navMenu.classList.toggle('hidden')
})

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1); 
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 100, 
                behavior: 'smooth'
            });
        }
    });
});