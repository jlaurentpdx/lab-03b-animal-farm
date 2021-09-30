const bulbasaurImg = document.getElementById('bulbasaur-image');
const charmanderImg = document.getElementById('charmander-image');
const squirtleImg = document.getElementById('squirtle-image');

const bulbasaurSnd = document.getElementById('bulbasaur-sound');
const charmanderSnd = document.getElementById('charmander-sound');
const squirtleSnd = document.getElementById('squirtle-sound');

const printSelect = document.getElementById('print-select');

bulbasaurImg.addEventListener('click', ()=>{
    bulbasaurSnd.play();
    iChooseYou(bulbasaurImg);
    printSelect.textContent = ', Bulbasaur!';
});

charmanderImg.addEventListener('click', ()=>{
    charmanderSnd.play();
    iChooseYou(charmanderImg);
    printSelect.textContent = ', Charmander!';

});

squirtleImg.addEventListener('click', ()=>{
    squirtleSnd.play();
    iChooseYou(squirtleImg);
    printSelect.textContent = ', Squirtle!';

});

function iChooseYou(pokemon) {
    bulbasaurImg.classList.remove('selected');
    charmanderImg.classList.remove('selected');
    squirtleImg.classList.remove('selected');
    
    pokemon.classList.add('selected');
}

window.addEventListener('click', ()=>{

});

