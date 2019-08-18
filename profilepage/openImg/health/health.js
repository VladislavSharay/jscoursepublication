export default function(){
let formComment = document.querySelector('#commentIN')

formComment.addEventListener('submit', function (event) {
    event.preventDefault();
    let commentAdd = document.getElementById("commentAdd");
    let valCommentAdd = commentAdd.value;
    let comment = {
        message: valCommentAdd,
        parentId: 'health'
    };
    let tokenStr = cookieToken;
    doRequestComment(comment, tokenStr);
    container.innerText='';
    commentOut(cookieToken);
})
function doRequestComment(data, token) {
    fetch('https://intern-staging.herokuapp.com/api/comment', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json',
            'token': token
        },
    }).then(
        resp => resp.json()
    ).then(
        json => {
            console.log(json)
        }
    );
}

var container = document.getElementById("container");

function commentOut(token) {
    fetch('https://intern-staging.herokuapp.com/api/comment?parentId=health', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'token': token
        },
    }).then(
        resp => resp.json()
    ).then(
        json => {   
            let fragment = new DocumentFragment();
            for( let i=0; i<json.length; i++){
                let ul = document.createElement('ul');
                ul.append(json[i].message);
                fragment.append(ul);
             }
              container.appendChild(fragment);
        }
    );
}
commentOut(cookieToken);

}