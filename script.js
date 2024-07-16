document.Get
document.querySelector('.mobile-navbar-btn').addEventListener('click', function (e) {
    document.querySelector('.header').classList.toggle('active');
    e.preventDefault();
})