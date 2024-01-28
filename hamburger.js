const hamburger = document.getElementById('hamburger');
const header = document.querySelectorAll('header');
const designSection = document.getElementById('section-design');
const lisaSection = document.getElementById('meet-lisa');
const homeContactSection = document.getElementById('contact-section');
const rawpixelSection = document.getElementById('rawpixel-section');
const designImg = document.getElementById('main-img');
const designText = document.getElementById('design-text-container');


hamburger.addEventListener('click', function(){
    console.log('clicked');
    designSection.classList.add('hide');
    lisaSection.classList.add('hide');
    homeContactSection.classList.add('hide');
    rawpixelSection.classList.add('hide');
    designImg.classList.add('hide');
    designText.classList.add('hide');
 
});