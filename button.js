let loginbutton=document.querySelector('.login');
var token;

loginbutton.addEventListener("click", function () {
    if(cookieToken){
        document.location.href = "#/profilepage";
    } else {
        document.location.href = "#/login";
    }
})

// login.addEventListener('click', event => {
// if(token){
//     document.location.href = "#/profilepage";
// } else{
//     document.location.href = "#/login";
// }
// }