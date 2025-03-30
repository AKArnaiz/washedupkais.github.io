//icon navbar
let menu = document.querySelector('#menu-icon');
let  navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

// Toggle menu
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('nav a');

window.onscroll = () => {
  sections.forEach(section => {
    let top = window.scrollY;
    let offset = section.offsetTop - 150;
    let height = section.offsetHeight;
    let id = section.getAttribute('id');

    if (top >= offset && top < offset + height) {
        navLinks.forEach(link => {
            link.classList.remove('active');
            document.querySelector('heade nav a[href*=' + id + ']').classList.add('active');
        });
      };
    });

    /* sticky navbar */
    let header = document.querySelector('header');

    MediaElementAudioSourceNode.classList.remove('bx-x');
    navbar.classList.remove('active');  
//remove toggle icon and navbar when click navbar link (scroll)
    header.classList.toggle('sticky', window.scrollY > 100);
};

//scroll reveal
ScrollReveal({ 
    
    distance: '80px',
    duration: 2000,
    delay: 200
});
  
ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .email-btn, .phn-btn', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

//typed js

const typed = new Typed('.multiple-text', {
    strings: ['IT professional', 'Support Analyst', 'Consultant', 'Web Developer', 'Man united fan'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});
