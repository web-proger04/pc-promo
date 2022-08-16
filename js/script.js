const modalWindow = document.querySelector('.modal');
const buttonModal = document.querySelectorAll('.modal-button');
const modalClose = document.querySelector('.modal__close');
const body = document.querySelector('body');

buttonModal.forEach((item) => {
   item.addEventListener('click', () => {
      modalWindow.style.display = 'flex';  
      body.classList.add('noscroll');            
   });
});


modalWindow.addEventListener('click', (e) => {
   const isModal = e.target.closest('.modal__body');

   if(!isModal) {
      modalWindow.style.display = 'none';
      body.classList.remove('noscroll'); 
   }
});

modalClose.addEventListener('click', (e) => {
   modalWindow.style.display = 'none';
   body.classList.remove('noscroll'); 
})
