//Display profile preview
$("#defaultImage").click(function(e) {
  $("#imageProfile").click();
});
  
 function fasterPreview(uploader) {
   if(uploader.files && uploader.files[0]) {
     $('#defaultImage').attr('src', window.URL.createObjectURL(uploader.files[0]));
   }
 }
  
$('#imageProfile').change(function() {
  fasterPreview(this);
}); 

//Thank you message for submitting information
function submitThanks() {
  //var aboutMeForm = document.getElementById("aboutMe");
  //var basicDetailsForm = document.getElementById("basicDetails");

  var username = document.getElementById("username");
  var email = document.getElementById("email");
  var npassword = document.getElementById("password");
  var cpassword = document.getElementById("cpassword");
  var firstName = document.getElementById("firstName");
  var lastName = document.getElementById("lastName");
  var occupation = document.getElementById("occupation");
  var currentCity = document.getElementById("city");
  var profileAboutMe = document.getElementById("profileAboutMe"); 
  
  if  (username.value === "" || email.value === "" || npassword.value === "" || cpassword.value === ""
  || firstName.value === "" || lastName.value === "" || occupation.value === "" || currentCity.value === ""
  || profileAboutMe.value === "") {
    alert("Please fill out each field.");
  } 
  else {
    alert("Profile Submission Complete. Please check your email for further details."); 
  }
}