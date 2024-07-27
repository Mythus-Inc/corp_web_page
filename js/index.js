document.querySelector('.nav-item-toggle').addEventListener('click', function() {
    classToggle('.nav-list', 'nav-toggle-show');
});

document.querySelector('.nav-sub-item-toggle').addEventListener('click', function() {
    classToggle('.nav-sub-list', 'nav-toggle-show');
});

function classToggle(targetSelector, toggleClass) {
    const elements = document.querySelectorAll(targetSelector);

    elements.forEach(element => element.classList.toggle(toggleClass));
}
