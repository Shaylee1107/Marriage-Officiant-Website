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
const myDiv = document.createElement("div");


hamburger.addEventListener('click', function(){
    console.log('clicked');
    myDiv.classList.add('myBurger');
  
    const nav = document.createElement("nav");
    const ul = document.createElement("ul");
    const homeLi = document.createElement("li");
    const servicesLi = document.createElement("li");
    const contactLi = document.createElement("li");
    const faqLi = document.createElement("li");

    homeLi.setAttribute("href", "#topPage");
    servicesLi.setAttribute("href", "servicesIndex.html");
    contactLi.setAttribute("href", "contact.html");
    faqLi.setAttribute("href", "faq.html");

    homeLi.setAttribute("class", "nav-a");
    servicesLi.setAttribute("class", "nav-a");
    contactLi.setAttribute("class", "nav-a");
    faqLi.setAttribute("class", "nav-a");

    const homeNode = document.createTextNode("Home");
    const servicesNode = document.createTextNode("Services");
    const contactNode = document.createTextNode("Contact");
    const faqNode = document.createTextNode("faq");

    function toggleHidden() {
        if(myDiv.hasAttribute('name') === true){
            console.log('present!')
            myDiv.classList.add('hidden')
            myDiv.removeAttribute('name');

            document.getElementById("myDiv").removeChild(document.getElementById("nav"));

        } else {
            console.log('no present!')
            myDiv.setAttribute('name', 'present');
            myDiv.classList.remove('hidden');

            homeLi.append(homeNode);
            servicesLi.append(servicesNode);
            contactLi.append(contactNode);
            faqLi.append(faqNode);

            header.append(myDiv);
            myDiv.append(nav);
            nav.append(ul);
            ul.append(homeLi);
            ul.append(servicesLi);
            ul.append(contactLi);
            ul.append(faqLi);
        }
     }

     myDiv.setAttribute('id', 'myDiv');
     nav.setAttribute('id', 'nav');
    toggleHidden();

    })


