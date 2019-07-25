var profilepage=document.querySelector(".profilepage");
var imgPosts = document.querySelector(".imgPosts");
var imgTagged = document.querySelector(".imgTagged");
var posts=document.querySelector(".posts");
var tagged=document.querySelector(".tagged")
var signOutBtn=document.querySelector(".signOut")

imgTagged.style.display = "none";

posts.addEventListener("click", function () {
        imgPosts.style.display = "block";
        imgTagged.style.display="none";
})
tagged.addEventListener("click", function () {
        imgPosts.style.display = "none";
        imgTagged.style.display="block";
})



signOutBtn.addEventListener("click", function () {
        delete_cookie('cookieUserIn');
 document.location.href = "#/login";
  })

function deleteCookie(name) {
        setCookie(name, "", {
          expires: -1
        })
      }

      function delete_cookie( name ) {
        document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
      }





