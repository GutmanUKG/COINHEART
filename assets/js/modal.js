window.addEventListener('DOMContentLoaded' , function () {
    let wrapBtn = document.querySelectorAll('.modal_wrap'),
        btnOne = document.querySelectorAll('.modal_one'),
        btnTwo = document.querySelectorAll('.modal_two'),
        modalLend = document.querySelector('#exampleModalCenter1'),
        modalBorrow = document.querySelector('#exampleModalCenter2'),
        closeBtn = document.querySelectorAll('.modal-body');
    
        wrapBtn.forEach(function (i) {
            i.addEventListener('click' , function (event) {
                let target = event.target;
                if(target && target.classList.contains('modal_one')){
                    modalLend.classList.add('show_modal');

                    document.body.style.overflow = "hidden";
                }
                if(target && target.classList.contains('modal_two')){
                    modalBorrow.classList.add('show_modal');

                    document.body.style.overflow = "hidden";
                }
            })
        })
        closeBtn.forEach(function (i) {
            i.addEventListener('click', function (event) {
               let target = event.target;
               if(target && target.classList.contains('close')){
                   modalLend.classList.remove('show_modal');
                   modalBorrow.classList.remove('show_modal');
                   document.body.style.overflow = "";
               }
            })
        })
})