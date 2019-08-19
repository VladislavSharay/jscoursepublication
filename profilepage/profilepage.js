export default function(){
if(cookieToken){
let imgPosts = document.querySelector(".imgPosts");
let imgTagged = document.querySelector(".imgTagged");
let postsBtn = document.querySelector(".posts");
let taggedBtn = document.querySelector(".tagged")
let signOutBtn = document.querySelector(".signOut")


imgTagged.style.display = "none";

postsBtn.addEventListener("click", function () {
        imgPosts.style.display = "block";
        imgTagged.style.display = "none";
    
})
taggedBtn.addEventListener("click", function () {
        imgPosts.style.display = "none";
        imgTagged.style.display = "block";
       
})



signOutBtn.addEventListener("click", function () {

        delete_cookie('cookieUserIn');
        cookieToken = get_cookie("cookieUserIn");
        document.location.href = "#/login";
})


function delete_cookie(name) {
        document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}

}





// Загрузка фото
let containerImg = document.getElementById("containerImg");
let formImg = document.forms.namedItem('addPhotoForm');

formImg.addEventListener('submit', function (ev) {
    ev.preventDefault();
    var formImgD = new FormData(formImg);

    formImgD.append('parentEntityId', 'insta1');
    
    doRequestImg('POST', formImgD, {'token': cookieToken});
   
})


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
            containerImg.innerText='';
            imgOUT(cookieToken)
        }
    );
}



function imgOUT(token) {
        fetch('https://intern-staging.herokuapp.com/api/file/insta1', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'token': token
            },
        }).then(
            resp => resp.json()
        ).then(
            json => {   
               console.log(json)
               let fragment = new DocumentFragment();
               for( let i=0; i<json.length; i++){
                console.log(json[i].url);
                   let imgObj = document.createElement('img');
                   imgObj.src=json[i].url;
                   imgObj.width='400';
                   imgObj.height='400';
                
                   fragment.append(imgObj);
                }
                  containerImg.appendChild(fragment);
            }
        );
    }
    imgOUT(cookieToken)
   }


//Кноппка загрузки

let imgBtn=document.querySelector('.imgBtn')
let addPhotoForm=document.querySelector('.addPhotoForm')



// imgBtn.style.display = "block"
addPhotoForm.style.display = "none"

imgBtn.addEventListener("click", function () {
        if (addPhotoForm.style.display == "none") {
                addPhotoForm.style.display = "block"
        } else {
                addPhotoForm.style.display = "none"
        }
    })


   var inputs = document.querySelectorAll('.inpIMG');
   Array.prototype.forEach.call(inputs, function(input){
     var label	 = input.nextElementSibling,
         labelVal = label.innerHTML;
     input.addEventListener('change', function(e){
       var fileName = '';
       if( this.files && this.files.length > 1 )
       fileName = ( this.getAttribute( 'data-multiple-caption' ) || '' ).replace( '{count}', this.files.length );
     else
       fileName = e.target.value.split( '\\' ).pop();
                 if( fileName )
       label.innerHTML = fileName;
     else
         label.innerHTML = labelVal;
           });
   });
