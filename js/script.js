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

    function changeFoto(windowWidth) {
        if (windowWidth < 360) {
            headerBgi.src = 'img/header-bgi-320-169.jpg';
        } else if (windowWidth < 640) {
            headerBgi.src = 'img/header-bgi-360-190.jpg';
        } else if (windowWidth < 1025) {
            headerBgi.src = 'img/header-bgi-640-338.jpg';
        } else headerBgi.src = 'img/header-bgi-1403-742.jpg';
    }

    changeFoto(windowStartValue)

    window.addEventListener('resize', function () {
        const windowValue = window.outerWidth;
        changeFoto(windowValue);
    })
})();