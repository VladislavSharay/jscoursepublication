let formSign = document.querySelector('#loginIN')
let token;
formSign.addEventListener('submit', function (event) {
    event.preventDefault();
    let log = document.getElementById("logSignIn");
    let pass = document.getElementById("passSignIn");
    let vallog = log.value;
    let valpass = pass.value;
    let signInReq = {
        email: vallog,
        password: valpass
    };

    doRequestSignIn(signInReq);
    document.location.href = "#/profilepage";
});

function doRequestSignIn(data) {
    fetch('https://intern-staging.herokuapp.com/api/identification/sign_in', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json',

        },
    }).then(
        resp => resp.json()
    ).then(
        json => {
            console.log(json)

            token = json.token;
            // alert("Вы авторизовались!");
            document.cookie = 'cookieUserIn =' + token + '; path=/';
            cookieToken = get_cookie("cookieUserIn");
            // document.location.href = "#/profilepage";
        }
    );
}