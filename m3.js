const btnTema = document.querySelector('.btn-tema');
const bodyHalaman = document.querySelector('body');

btnTema.addEventListener('click', function() {
    bodyHalaman.classList.toggle('light-mode');


if(bodyHalaman.classList.contains('light-mode')){
    btnTema.textContent = '🌙 Mode Gelap';
} else{
    btnTema.textContent = '☀️ Mode Terang';
}
});

const btnBukaModal = document.querySelector('.btn-contact');
const elemenModal = document.querySelector('#modalKontak');
const btnTutupModal = document.querySelector('#btnTutupModal');

btnBukaModal.addEventListener('click', function(event) {
    event.preventDefault();
    elemenModal.classList.add('show');
});

btnTutupModal.addEventListener('click', function(){
    elemenModal.classList.remove('show');
});

const JavaButton = document.querySelector('.next-language');
const elemenFun = document.querySelector('#Fun');
const JavaClose = document.querySelector('.btn-tutup-fun');

JavaButton.addEventListener('click', function() {
    elemenFun.classList.add('showed')
});

JavaClose.addEventListener('click', function(){
    elemenFun.classList.remove('showed')
});