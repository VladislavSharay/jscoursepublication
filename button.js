var registration=document.querySelector(".registration");
var registrationLink=document.querySelector('#registrationLink');
var signIn=document.querySelector('.signIn');
var startPage=document.querySelector(".startPage");
var buttonLogin = document.querySelector(".login");
var buttonLogo = document.querySelector(".logo");
var buttonInsta = document.querySelector("h1");

registration.style.display = "none";
signIn.style.display='none';


buttonLogin.addEventListener("click", function () {
        signIn.style.display='block';
        registration.style.display = "none";
        startPage.style.display="none";
})

buttonLogo.addEventListener("click", function () {
        signIn.style.display='none';
        registration.style.display = "none";
        startPage.style.display="block";
})

buttonInsta.addEventListener("click", function () {
        signIn.style.display='none';
        registration.style.display = "none";
        startPage.style.display="block";
})

registrationLink.addEventListener("click", function () {
        signIn.style.display='none';
        registration.style.display = "block";
        startPage.style.display="none";
})

