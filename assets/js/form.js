window.addEventListener('DOMContentLoaded', function () {


    let message = {
        loading: 'Loading...',
        success: 'Your message succesfully sent!',
        failure: 'Opps! There is something wrong. Please try again'
    };
    let form = document.querySelector('.subscribe_form'),
        input = form.getElementsByTagName('input'),
        statusMessage = document.createElement('div');

    statusMessage.classList.add('status');


    form.addEventListener('submit', function (event) {
        event.preventDefault();
        form.appendChild(statusMessage);


        let request = new XMLHttpRequest();
        request.open('POST', 'server.php');
        // request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded'); // Для FormData
        request.setRequestHeader('Content-type', 'application/json; charset=utf-8');//Для JSON Формата

        let formData = new FormData(form);
        //Преобразует FormData в JSON
        let obj = {};
        formData.forEach(function (value , key) {
            obj[key] = value;
        });
        let json = JSON.stringify(obj);
        //
        // request.send(formData); // Для FormData
        request.send(json);
        request.addEventListener('readystatechange', function () {
            if (request.readyState < 4) {
                statusMessage.textContent = message.loading;
            } else if (request.readyState === 4 && request.status == 200) {
                statusMessage.textContent = message.success;
            }else{
                statusMessage.textContent = message.failure;
            }

        });
        for (let i =0; i<input.length;i++){
            input[i].value = '';
        }

    });

});