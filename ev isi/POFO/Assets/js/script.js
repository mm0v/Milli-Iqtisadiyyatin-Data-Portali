const menuBtn = document.querySelector('.menu');
const xBtn = document.querySelector('.x');
const menuOut = document.querySelector('.menu-out');

const toggleMenu = () => {
    if (menuOut.style.display === 'none') {
        menuOut.style.display = 'block';
    } else {
        menuOut.style.display = 'none';
    }
}

menuBtn.onclick = toggleMenu;
xBtn.onclick = toggleMenu;