const hamburger = document.getElementById('hamburger');
const header = document.querySelector('header');
const designSection = document.getElementById('section-design');
const lisaSection = document.getElementById('meet-lisa');
const homeContactSection = document.getElementById('contact-section');
const rawpixelSection = document.getElementById('rawpixel-section');
const designImg = document.getElementById('main-img');
const designText = document.getElementById('design-text-container');
const body = document.querySelector('body');
const htmlBurgerDiv = document.getElementsByClassName('hamburger-div');


hamburger.addEventListener('click', function(){
    console.log('clicked');
    const myDiv = document.createElement("div");
    myDiv.classList.add('myBurger');
    header.append(myDiv);
    htmlBurgerDiv.classList.remove('hide');
    myDiv.append(htmlBurgerDiv);

});