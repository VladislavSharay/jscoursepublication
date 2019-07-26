let tokenStr;
let API = 'https://intern-staging.herokuapp.com/api/identification';

let formSignUp = document.querySelector('#loginInReg');

let checkSignUp;

formSignUp.addEventListener('submit', event => {
    event.preventDefault();
    let url = API;
    let method = 'POST';
    let form = formToJson(formSignUp);
    let opt = 'signUp';


    doRequest(url, method, form, opt)
        .then(() => {
            if (tokenStr != undefined) {
                let url = API + '/activate';
                let form = JSON.stringify({
                    id: tokenStr
                });
                let opt = 'activate';
                doRequest(url, method, form, opt)
                    .then(() => tokenStr = undefined)
            }
        });

})

const doRequest = (url, method, data, options) => new Promise((resolve, _reject) => {
    resolve(
        fetch(url, {
            method: method,
            body: data,
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(
            resp => resp.json()
        ).then(
            json => {
                console.log(json);
                if (options == 'signUp') {
                    if (json._id) tokenStr = json._id;
                    else alert('Такой пользователь уже зарегистрирован');
                }
                if (json.error) checkSignUp = json.error;
                else if (options == 'activate') alert('Ваш пароль отправлен на почту :)')
                document.location.href = "#/login";
            }
        ))
});

function formToJson(event) {
    let formData = new FormData(event);
    let object = {};
    formData.forEach((value, key) => {
        object[key] = value
    });
    let data = JSON.stringify(object);

    return data;
}


function getUsers() {
    fetch('https://intern-staging.herokuapp.com/api/identification', {
        method: 'GET',
    }).then(
        resp => resp.json()
    ).then(
        json => console.log(json)

    );
}