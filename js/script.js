const modal_btn = document.querySelector('.modal');
const modalWindow = document.querySelector('.contacts');
const closeElem = document.querySelector('.contacts_close');

modal_btn.addEventListener('click', function() {
    modalWindow.classList.add('active');
});

closeElem.addEventListener('click', function() {
    modalWindow.classList.remove('active');
});

