var profilepage=document.querySelector(".profilepage");
var imgPosts = document.querySelector(".imgPosts");
var imgTagged = document.querySelector(".imgTagged");
var posts=document.querySelector(".posts");
var tagged=document.querySelector(".tagged")

imgTagged.style.display = "none";

posts.addEventListener("click", function () {
        imgPosts.style.display = "block";
        imgTagged.style.display="none";
})
tagged.addEventListener("click", function () {
        imgPosts.style.display = "none";
        imgTagged.style.display="block";
})