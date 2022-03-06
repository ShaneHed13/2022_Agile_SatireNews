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