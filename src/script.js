const menuBtn = document.getElementById('menu-btn');
const menu = document.getElementById('menu');
const closeBtn = document.getElementById('close-btn');

menuBtn.addEventListener('click', () => {
    menu.classList.toggle('hidden');
    closeBtn.classList.toggle('hidden');
    menuBtn.classList.toggle('hidden');
});

closeBtn.addEventListener('click', () => {
    menu.classList.toggle('hidden');
    closeBtn.classList.toggle('hidden');
    menuBtn.classList.toggle('hidden');
});

// menuBtn.addEventListener('click', () => {

// });

// closeBtn.addEventListener('click', () => {
    
//     menu.classList.toggle('hidden');
// })

// closeBtn.addEventListener('click', () => {
//     closeBtn.classList.toggle('hidden');
// });