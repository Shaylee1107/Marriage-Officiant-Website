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

    homeLi.setAttribute("class", "nav-a");
    servicesLi.setAttribute("class", "nav-a");
    contactLi.setAttribute("class", "nav-a");
    faqLi.setAttribute("class", "nav-a");


    const homeA = document.createElement("a");
    const contactA = document.createElement("a");
    const servicesA = document.createElement("a");
    const faqA = document.createElement("a");

    homeA.setAttribute("href", "#topPage");
    servicesA.setAttribute("href", "servicesIndex.html");
    contactA.setAttribute("href", "contact.html");
    faqA.setAttribute("href", "faq.html");


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

            homeLi.classList.add('hamburger-lis');
            servicesLi.classList.add('hamburger-lis');
            contactLi.classList.add('hamburger-lis');
            faqLi.classList.add('hamburger-lis');

            homeA.classList.add('hamburger-as');
            servicesA.classList.add('hamburger-as');
            contactA.classList.add('hamburger-as');
            faqA.classList.add('hamburger-as');

            homeLi.append(homeA);
            servicesLi.append(servicesA);
            contactLi.append(contactA);
            faqLi.append(faqA);

            homeA.append(homeNode);
            servicesA.append(servicesNode);
            contactA.append(contactNode);
            faqA.append(faqNode);

            header.append(myDiv);
            myDiv.append(nav);
            nav.append(ul);
            ul.append(homeLi);
            ul.append(servicesLi);
            ul.append(contactLi);
            ul.append(faqLi);

            homeA.addEventListener('touchstart', function(){
                console.log('button clicked');
                homeA.classList.add('hamburger-btn-clicked');
            });

            servicesA.addEventListener('touchstart', function(){
                console.log('button clicked');
                servicesA.classList.add('hamburger-btn-clicked');
            });

            contactA.addEventListener('touchstart', function(){
                console.log('button clicked');
                contactA.classList.add('hamburger-btn-clicked');
            });

            faqA.addEventListener('touchstart', function(){
                console.log('button clicked');
                faqA.classList.add('hamburger-btn-clicked');
            });
        }
     }

     myDiv.setAttribute('id', 'myDiv');
     nav.setAttribute('id', 'nav');
    toggleHidden();

    })


