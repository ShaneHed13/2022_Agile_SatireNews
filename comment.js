// Grab the comment section of the webpage
let commentSection = document.getElementById("comments");

//console.log("Posted Comment Section = #" + commentSection.id + " <p>.");

/* Submitting the comment */
function SubmitComment() {

  // Prevent the form from reloading the webpage
  event.preventDefault();

  // Grab the user name text box, the comment text box, and the values input by the user
  var nameInput = document.getElementById("name");
  var commentInput = document.getElementById("comment");
  var userComment = commentInput.value;
  var userName = nameInput.value;

  //console.log("Comment Input = #" + commentInput.id + " text box.  And Name Input = #" + nameInput.id + " text box.");
  //console.log("The user's name is " + userName + ". And their comment is: " + userComment);

  // Post the comment and clear the text boxes, while also adding additonal comments
  commentSection.innerHTML += "<strong>" + userName + ":</strong> " + userComment + "<br><br>";
  commentInput.value = "";
  nameInput.value = "";

}

//messaging author
function sendMessage() {
	
	event.preventDefault();
	
	//getting references to inputs
	var nameMsg = document.getElementById("nameMsg").value;
	var emailMsg = document.getElementById("emailMsg").value;
	var messageMsg = document.getElementById("messageMsg").value;
	
	//Email validation code similar to submission
	var mailCheck = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
		
	//Checks input to see if it matches format	
	if(document.getElementById("emailMsg").value.match(mailCheck))
	{	
		if(nameMsg.value != "" && emailMsg.value != "" && messageMsg != ""){
			document.getElementById("nameMsg").value = "";
			document.getElementById("emailMsg").value = "";
			document.getElementById("messageMsg").value = "";
		
			document.getElementById("messageSubmit").innerHTML = "Message Sent!"
		} else {
			alert("Please fill all fields to send message");
		}
		return true;
	}
	else
	{
		alert("Invalid email. Correct format: example@example.com");  
		return false;
	}
	
}