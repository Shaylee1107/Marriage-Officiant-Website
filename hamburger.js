const hamburger = document.getElementById('hamburger');
const header = document.querySelector('header');
const designSection = document.getElementById('section-design');
const lisaSection = document.getElementById('meet-lisa');
const homeContactSection = document.getElementById('contact-section');
const rawpixelSection = document.getElementById('rawpixel-section');
const designImg = document.getElementById('main-img');
const designText = document.getElementById('design-text-container');
const body = document.querySelector('body');
const htmlBurgerDiv = document.querySelectorAll('hamburger-div');


hamburger.addEventListener('click', function(){
    console.log('clicked');
    const myDiv = document.createElement("div");
    myDiv.classList.add('myBurger');
  
    const nav = document.createElement("nav");
    const ul = document.createElement("ul");
    const homeLi = document.createElement("li");
    const servicesLi = document.createElement("li");
    const contactLi = document.createElement("li");
    const faqLi = document.createElement("li");
    
    header.append(myDiv);
    myDiv.append(nav);
    nav.append(ul);
    ul.append(homeLi);
    ul.append(servicesLi);
    ul.append(contactLi);
    ul.append(faqLi);

    homeLi.setAttribute("class", "nav-a");
    servicesLi.setAttribute("class", "nav-a");
    contactLi.setAttribute("class", "nav-a");
    faqLi.setAttribute("class", "nav-a");

    const homeNode = document.createTextNode("Home");
    const servicesNode = document.createTextNode("Services");
    const contactNode = document.createTextNode("Contact");
    const faqNode = document.createTextNode("faq");

    homeLi.append(homeNode);
    servicesLi.append(servicesNode);
    contactLi.append(contactNode);
    faqLi.append(faqNode);

    function toggle() {
        if(myDiv.classList.contains('present')){
            myDiv.classList.add('hidden')
        } else {
            myDiv.classList.remove('hidden');
        }
     }
    toggle();
    myDiv.setAttribute('class', 'present');
    })


