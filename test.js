  function initialLoad() { 
 	document.getElementById("defaultDisplay").style.display = "block";  	
 	document.getElementById("login").style.display = "none";  	
 	document.getElementById("signup").style.display = "none";  	
 	document.getElementById("home").style.display = "none"; 
} 
 
function login() { 
 	document.getElementById("defaultDisplay").style.display = "none"; 
 	document.getElementById("login").style.display = "block";  	
 	document.getElementById("signup").style.display = "none";  	
 	document.getElementById("home").style.display = "none"; 
} 
 
function signup() {  	
	document.getElementById("defaultDisplay").style.display = "none";  	
	document.getElementById("login").style.display = "none";  	
	document.getElementById("signup").style.display = "block";  	
	document.getElementById("home").style.display = "none"; 
} 
 
function home() {  	
	document.getElementById("defaultDisplay").style.display = "none";  	
	document.getElementById("login").style.display = "none";  	
	document.getElementById("signup").style.display = "none";  	
	document.getElementById("home").style.display = "block";  	
	document.getElementById("loggedInUser").innerHTML = "Hello! " + localStorage.getItem('name') + "<br>"; 
} 
 
 
/* functionality */ 
 
function signupSubmit() {  	
	// var name = document.getElementById("signup-name").value;  	
	// var email = document.getElementById("signup-email").value;  	
	// var password = document.getElementById("signup-password").value;  	
	localStorage.setItem('name', document.getElementById("signup-name").value);  	
	localStorage.setItem('email', document.getElementById("signup-email").value);  	
	localStorage.setItem('password', document.getElementById("signup-password").value); 
 	login(); 
} 
 
function loginSubmit() {  	
	var email = document.getElementById("login-email").value;  	
	var password = document.getElementById("login-password").value;  	
	if(localStorage.getItem('email') === email && localStorage.getItem('password') === password) 
 	{ 
 	 	home(); 
 	}else { 
 	 	document.getElementById("errorMsg").innerHTML = "user or password is incorrect." 
 	} 
} 
 
function logout() { 
 	localStorage.clear();  	initialLoad(); 
} 
