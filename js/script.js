// Obsługa menu na urządzenia mobilne
(function () {
    const btnHamSm = document.querySelector('.nav-sm-ham');
    const menuSm = document.querySelector('.menu-sm');

    btnHamSm.addEventListener('click', function () {
        menuSm.classList.toggle('active');
        btnHamSm.classList.toggle('active');
    })
})();

// Zmiana zdjęć w nagłówku w zależności od szerokości ekranu
(function () {
    const headerBgi = document.querySelector('.header-bgi');
    const windowStartValue = window.outerWidth;

    if (windowStartValue < 360) {
        headerBgi.src = 'img/header-bgi-320-169.jpg';
    } else if (windowStartValue < 640) {
        headerBgi.src = 'img/header-bgi-360-190.jpg';
    } else if (windowStartValue < 1025) {
        headerBgi.src = 'img/header-bgi-640-338.jpg';
    } else headerBgi.src = 'img/header-bgi-1403-742.jpg';

    window.addEventListener('resize', function () {
        const windowValue = window.outerWidth;
        if (windowValue < 360) {
            headerBgi.src = 'img/header-bgi-320-169.jpg';
        } else if (windowValue < 640) {
            headerBgi.src = 'img/header-bgi-360-190.jpg';
        } else if (windowValue < 1025) {
            headerBgi.src = 'img/header-bgi-640-338.jpg';
        } else headerBgi.src = 'img/header-bgi-1403-742.jpg';
    })
})();