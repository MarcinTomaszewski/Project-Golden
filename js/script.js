(function () {
    const btnHamSm = document.querySelector('.ham');
    const menuSm = document.querySelector('.menu-sm');

    btnHamSm.addEventListener('click', function () {
        menuSm.classList.toggle('active');
        btnHamSm.classList.toggle('active');
    })
})();