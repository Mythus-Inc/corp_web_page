document.querySelector('.nav-item-toggle').addEventListener('click', classToggle);

function classToggle() {
    const navs = document.querySelectorAll('.nav-list')

    navs.forEach(nav => nav.classList.toggle('nav-toggle-show'));
}
