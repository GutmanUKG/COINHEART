window.addEventListener('DOMContentLoaded' , function () {
    let bar = document.querySelector('.left-bar'),
        btnClose = document.querySelector('.btn_close'),
        rightBar = document.querySelector('.right_bar'),
        btnShow = document.querySelector('.btn_show');

        btnShow.addEventListener('click', function () {
        bar.classList.remove('disable');
        bar.classList.add('show');
        btnShow.style.display = "none";
        rightBar.style.width = 'calc(100% - 280px)'


    });
    btnClose.addEventListener('click', function () {
        bar.classList.remove('show');
        bar.classList.add('disable');
        btnShow.style.display = "block"
        rightBar.style.width = '100%'
    });





});
