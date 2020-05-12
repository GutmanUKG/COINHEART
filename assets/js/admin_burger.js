window.addEventListener('DOMContentLoaded' , function () {
    let bar = document.querySelector('.left-bar'),
        btnClose = document.querySelector('.btn_close'),
        rightBar = document.querySelector('.right_bar');

    bar.addEventListener('click', function (event) {
        let target = event.target;

        if(target && target.classList.contains('btn_show')){
            bar.classList.remove('show');
            bar.classList.add('disable');
            btnClose.style.display = 'block';
            rightBar.classList.add('show-hide');
        }
    });
    btnClose.addEventListener('click', function () {
        btnClose.style.display = "none"
        bar.classList.remove('disable');
        rightBar.classList.remove('show-hide');
    })

});
