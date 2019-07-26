let profilepage = document.querySelector(".profilepage");
let imgPosts = document.querySelector(".imgPosts");
let imgTagged = document.querySelector(".imgTagged");
let posts = document.querySelector(".posts");
let tagged = document.querySelector(".tagged")
let signOutBtn = document.querySelector(".signOut")

imgTagged.style.display = "none";

posts.addEventListener("click", function () {
        imgPosts.style.display = "block";
        imgTagged.style.display = "none";
})
tagged.addEventListener("click", function () {
        imgPosts.style.display = "none";
        imgTagged.style.display = "block";
})



signOutBtn.addEventListener("click", function () {
        
        
        document.location.href ="#/login";
        delete_cookie('cookieUserIn');
        cookieToken = get_cookie ( "cookieUserIn" ); 
})


function delete_cookie(name) {
        document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}





let urlImg

function doRequestImg(method, data, headers) {
        fetch('https://intern-staging.herokuapp.com/api/file', {
                method: method,
                body: data,
                headers: headers,
        }).then(
                resp => resp.json()
        ).then(
                json => {
                        console.log(json)
                        urlImg = json.url;
                        imgOut.src=urlImg;
                }
        );
}

let container = document.querySelector(".container");
let addPhotoBtn = document.querySelector('.addPhoto');
let imgOut = document.createElement('img');
imgOut.id = 'imgOut'; imgOut.width='400'; imgOut.height='400';
let formImg = document.forms.namedItem('addPhoto');

container.appendChild(imgOut)


formImg.addEventListener('submit', function(ev){
        var formImgD = new FormData(formImg);

        formImgD.append('parentEntityId', '1455qwe1');

        doRequestImg('POST', formImgD, {
                'token': cookieToken
        });

        ev.preventDefault();

})

if(imgOut.src){
        imgOut.style.display='block';
} else{
        imgOut.style.display='none';
}