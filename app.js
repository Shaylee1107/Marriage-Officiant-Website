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



