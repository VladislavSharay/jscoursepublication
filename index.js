var routes = {
	'': {
		html: 'home/home.html'
	},
	'login': {
		html: 'login/login.html',
		src: './login/login.js'
		},
	'registration': {
		html: 'registration/registration.html',
		 src: './registration/registration.js'
	},
	'profilepage': {
		html: 'profilepage/profilepage.html',
		 src: './profilepage/profilepage.js'
	}
	
};

var requestTemplate = (function () {
	var cache = {};
	return function(url){
		if(cache.hasOwnProperty(url)){
			return Promise.resolve(cache[url]);
		} else {
			return fetch(url).then(function (res) {
				return res.text();
			}).then(function(html){
				cache[url] = html;
				return html;
			})
		}
	}
})();

var runScript = (function () {
	var cache = {};

	return function (src) {
		if(cache.hasOwnProperty(src)){
			cache[src];
		} else {
			import(src).then(function (module) {
				cache[src] = module.default;
				cache[src];
			}).catch( function (err) {
				console.error(err);
			})
		}
	}
})();

var render = (function(){
	var content = document.getElementById('content');
	return function(html){
		content.innerHTML = html;
	}
})();

var handleRouting = (function(){
	var previousHash;
	return function(){
		var hash = window.location.hash.split('#/')[1] || '';
		if(previousHash === hash){
			return;
		}
		if(routes.hasOwnProperty(hash)){
			previousHash = hash;
			var urls = routes[hash];
			requestTemplate(urls.html).then( function (html) {
				render(html);
				if(urls.hasOwnProperty('src')){
					runScript(urls.src);
				}
			})
		}
	}
})();

window.addEventListener('DOMContentLoaded', handleRouting);
window.addEventListener('hashchange', handleRouting);




// let cookieToken = get_cookie ( "cookieUserIn" );
//            function get_cookie ( cookie_name ){
//              var results = document.cookie.match ( '(^|;) ?' + cookie_name + '=([^;]*)(;|$)' );
//              if ( results )
//                return ( unescape ( results[2] ) );
//              else
//                return null;
// 		   }
let cookieToken	   
document.addEventListener("DOMContentLoaded", function(){
	cookieToken = get_cookie ( "cookieUserIn" );      
})

function get_cookie ( cookie_name ){
	var results = document.cookie.match ( '(^|;) ?' + cookie_name + '=([^;]*)(;|$)' );
	if ( results )
	  return ( unescape ( results[2] ) );
	else
	  return null;
  }