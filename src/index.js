
function navToggle() {
    const navs =  document.querySelectorAll('.nav-item')
    navs.forEach(nav => nav.classList.toggle('toggle_Show'));
}
document.querySelector('.nav-toggle').addEventListener('click', navToggle);
