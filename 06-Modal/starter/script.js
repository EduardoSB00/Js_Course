'use strict';
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

for (let i = 0; i < btnsOpenModal.length; i++) {
    btnsOpenModal[i].addEventListener('click',() => {
        console.log('button clicked');
        modal.classList.remove('hidden');
        overlay.classList.remove('hidden')
    })
}

btnCloseModal.addEventListener('click', closeModal)
overlay.addEventListener('click', closeModal)

function closeModal() {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}

document.addEventListener('keydown',(e)=>{
    if(e.key === 'Escape') {
        if(!modal.classList.contains('hidden')){
            closeModal();
        }
    }
})