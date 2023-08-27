const header = document.querySelector("header");

window.addEventListener ("scroll",function() {
     header.classList.toggle ("sticky",window.scrolly >200)
});

let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('#menu-icon');

menu.onclick = ()=> {
     menu.classList.toggle('bx-x');
     navlist.classList.toggle('open');

};

window.onscroll = () => {
     menu.classList.remove('bx-x');
     navlist.classList.remove('open');
};


const sr = scrollreveal({
     distance:'40px',
     duration:2050,
     delay:200,
     reset:true
});

sr.reveal('.hero-text',{origin:'top'});
sr.reveal('.about-img, .service-item, .about-text' ,{origin:'bottom'});
sr.reveal('.about-text h2, .text-center , .right-contact h2',{origin:'top'});
sr.reveal('.end-section',{origin:'top'});
