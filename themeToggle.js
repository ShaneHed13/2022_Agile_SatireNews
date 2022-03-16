document.addEventListener('DOMContentLoaded', function() {
    
	var themeSwitch = localStorage.getItem('theme');
	
	if (themeSwitch == "light") {
	
		document.getElementById('body').style.backgroundColor="white";
		document.getElementById('wrapper').style.backgroundColor="#white";
	
	} else if (themeSwitch == "dark"){
		
		document.getElementById('body').style.backgroundColor="#696969";
		document.getElementById('wrapper').style.backgroundColor="#878787";
		
	}
	
}, false);