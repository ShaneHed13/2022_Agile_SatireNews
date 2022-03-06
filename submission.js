//Function for letting the user know that the article submission has been sent
function send() {

    var email = document.getElementById("email");
    var headline = document.getElementById("headline");
    var date = document.getElementById("date");
    var blurb = document.getElementById("blurb");
    var author = document.getElementById("author");
    var article = document.getElementById("article");
    
    if (email.value == "" || headline.value == "" || date.value == "" || blurb.value == "" || author.value == "" || article.value == "") {
        alert("Enter values for the all fields. Attach image if needed.");
    } else {
        var form = document.getElementById("formSubmit");
        document.getElementById("submitted").innerHTML="Thanks for your submission. It will be reviewed soon!";
        form.reset();
    }
    
}
