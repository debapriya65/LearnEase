function logout() {
  	console.log("hii");
	document.cookie.split(";").forEach(function(c) { document.cookie = c.replace(/^ +/, "").replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/"); });
	sessionStorage.clear()
	localStorage.clear()
	caches.keys().then(keys => {
  	keys.forEach(key => caches.delete(key))
	});
	window.open("http://localhost:8080/LearnEase/logout","_self");
	
}
