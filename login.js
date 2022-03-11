


var regName = document.getElementById('regName');
var regPass = document.getElementById('regPass');


//Store login information gathered by the user
function register() {

    if(regName.value === "" || regPass.value === "") {
        alert('Please enter values for Username and Password');
    } else {
        localStorage.setItem('regName', regName.value);
        localStorage.setItem('regPass', regPass.value);

        //Once login has been stored the user will be sent back to the login page	
	    window.location.href = "login.html";
    }
}


function login() {

//Getting stored user information
    var storedUser = localStorage.getItem('regName');
    var storedPass = localStorage.getItem('regPass');

//Getting login entered login information
    var userName = document.getElementById('userName');
    var userPass = document.getElementById('pass');

//Checking login information to see if it matches stored user
    if(userName.value !== storedUser || userPass.value !== storedPass) {
        alert('User not found. Please try again.');
    }else {
        window.location.href = "index.html";
    }
}

function welcome() {

    var welcomeUser = localStorage.getItem('regName');


    if (welcomeUser.value === "") {
        document.getElementById("loginSuccess").innerHTML="No user";
    } else {
        document.getElementById("loginSuccess").innerHTML="Welcome, " + welcomeUser +".";
    }

}

function sub() {
	//Variable set to correct email format
	var mailCheck = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
		
	//Checks input to see if it matches format	
	if(document.getElementById("subInput").value.match(mailCheck))
	{
		
		document.getElementById("subInput").value = "";
		alert("Thank you for subscribing!");
		return true;
	}
	else
	{
		alert("Invalid email. Correct format: example@example.com");  
		return false;
	}
		
}	