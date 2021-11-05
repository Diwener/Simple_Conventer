//                                          JSON

// let options = {
//     height: 768,
//     width: 1365,
//     bkg: 'red',
//     font:{
//         size: '16px',
//         color: '#fff'
//     }
// };

// console.log(JSON.parse(JSON.stringify(options)));

//                                           Ajax

let inputRub = document.getElementById('rub'),
    inputUsd = document.getElementById('usd');

inputRub.addEventListener('input', function(){
    let request = new XMLHttpRequest();

    // request.open(method, url, async, login, pass); Всё что засовывается сюда
    request.open('GET', 'current.json');
    request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    request.send();

    request.addEventListener('readystatechange', function(){
        if (request.readyState === 4 && request.status == 200){
            let data = JSON.parse(request.response);

            inputUsd.value = inputRub.value / data.usd;
        } else {
            inputUsd.value = "Error";
        }
    });
});