// MENUS DROP DOWN DA NAV
document.querySelector('.nav-item-toggle').addEventListener('click', function () {
    classToggle('.nav-list', 'nav-toggle-show');
});

function classToggle(targetSelector, toggleClass) {
    const elements = document.querySelectorAll(targetSelector);

    navs.forEach(nav => nav.classList.toggle('nav-toggle-show'));
}
    elements.forEach(element => element.classList.toggle(toggleClass));

document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', function () {
        document.querySelectorAll('.nav-item').forEach(i => i.classList.remove('active'));
        this.classList.add('active');
    });
});
