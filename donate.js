
//Radio Buttons
let radioButtons = document.querySelectorAll('input[type=radio]');
for(i = 0; i < radioButtons.length; i++) {
  radioButtons[i].onclick = function(e) {
    if(e.ctrlKey) {
      this.checked = false;
    }
  }
}
