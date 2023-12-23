// pop up javascript
const section = document.getElementById('pop-up-section');
const theButton = document.getElementById('the-button');
console.log(section);

setTimeout(function(){
    section.classList.add('show');
    section.classList.remove('pop-up');
}, 2000);


    theButton.addEventListener('click', function(e){
        e.target.parentElement.remove(); 
    })

//faq
// let acc = document.getElementsByClassName("accordian");
// for(let i = 0; i < acc.length; i++){
//     acc[i].addEventListener("click", function(){
//         this.classList.toggle("active");
//         this.parentElement.classList.toggle("active");

//         let pannel = this.nextElementSibling;

//         if(pannel.style.display === "block"){
//             pannel.style.display = "none";
//         } else {
//             pannel.style.display = "block";
//         }
//     })
// }

