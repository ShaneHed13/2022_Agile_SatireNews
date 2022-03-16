var theme = "";

function darkMode() {
	theme = "dark";
	localStorage.setItem('theme', theme);
	location.reload();
}

function lightMode() {
	theme = "light";
	localStorage.setItem('theme', theme);
	location.reload();
}
