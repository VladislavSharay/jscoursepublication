export default function(){
	var list = document.getElementById('feed-list');
	var fragment = document.createDocumentFragment();
	for( var i = 0; i <  Math.random() * 10 + 1; i++){
		var li = document.createElement('li');
		li.innerText = i + ' ' + Date.now();
		fragment.appendChild(li);
	}
	list.appendChild(fragment);
}
