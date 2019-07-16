var profilePage=document.querySelector(".profilePage");
var startPage=document.querySelector(".startPage");
var buttonLogin = document.querySelector(".login");
var buttonLogo = document.querySelector(".logo");
var buttonInsta = document.querySelector("h1");

profilePage.style.display = "none";

buttonLogin.addEventListener("click", function () {
        profilePage.style.display = "block";
        startPage.style.display="none";
})

buttonLogo.addEventListener("click", function () {
    profilePage.style.display = "none";
    startPage.style.display="block";
})

buttonInsta.addEventListener("click", function () {
    profilePage.style.display = "none";
    startPage.style.display="block";
})