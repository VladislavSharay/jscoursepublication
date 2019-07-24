let sub = document.querySelector("#subSignIn");

let formSign = document.querySelector('#loginIN')
formSign.addEventListener('submit', event => {
    event.preventDefault();
})

sub.addEventListener('click', function (event) {
    let log = document.getElementById("logSignIn");
    let pass = document.getElementById("passSignIn");
    let vallog = log.value;
    let valpass = pass.value;
    let signInReq = {
        email: vallog,
        password: valpass
    };
    console.log(tokenStr);
    doRequestSignIn(signInReq);
    
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
        json => {console.log(json)
        let tokenStr=json.token;
    }
    );
}