//Note: the email is a throw away 

//Variables
//Simple Mail Transfer Protocol Variables
var password = "agiletest" 
var senderEmail = "j16168001@gmail.com"
var recieverEmail = document.getElementById('email')
var senderName = document.getElementById('name')

//Donate once
var oneTimeDono1 = document.getElementById("odollar_one")
var oneTimeDono5 = document.getElementById("odollar_five")
var oneTimeDono10 = document.getElementById("odollar_ten")
var oneTimeDono20 = document.getElementById("odollar_twenty")
var oneTimeDono50 = document.getElementById("odollar_fifty")
var oneTimeDono100 = document.getElementById("odollar_hundred")
var customOneTimeDono = document.getElementById("onceCustom")

//Donate monthly
var monthDono1 = document.getElementById("mdollar_one")
var monthDono5 = document.getElementById("mdollar_five")
var monthDono10 = document.getElementById("mdollar_ten")
var monthDono20 = document.getElementById("mdollar_twenty")
var monthDono50 = document.getElementById("mdollar_fifty")
var monthDono100 = document.getElementById("mdollar_hundred")
var customMonthDono = document.getElementById("monthlyCustom")

//Donation Totals
//One Time
var oneTimeDonoTotal = 0

//Monthly
var monthlyDonationAmount = 0

//Functions
function totalMonthly() {
  if (monthDono1.checked) {
    monthlyDonationAmount += parseInt(monthDono1.value)
  }
  if (monthDono5.checked) {
    monthlyDonationAmount += parseInt(monthDono5.value)
  }
  if (monthDono10.checked) {
    monthlyDonationAmount += parseInt(monthDono10.value)
  }
  if (monthDono20.checked) {
    monthlyDonationAmount += parseInt(monthDono20.value)
  }
  if (monthDono50.checked) {
    monthlyDonationAmount += parseInt(monthDono50.value)
  }
  if (monthDono100.checked) {
    monthlyDonationAmount += parseInt(monthDono100.value)
  } 
  if (customMonthDono.value != "") {
    if (isNaN(parseInt(customMonthDono.value)) == false) {
      monthlyDonationAmount += parseInt(customMonthDono.value)
    } 
  }
  return monthlyDonationAmount
}

function totalOneTime() {
  if (oneTimeDono1.checked) {
    oneTimeDonoTotal += parseInt(oneTimeDono1.value)
  }
  if (oneTimeDono5.checked) {
    oneTimeDonoTotal += parseInt(oneTimeDono5.value)
  }
  if (oneTimeDono10.checked) {
    oneTimeDonoTotal += parseInt(oneTimeDono10.value)
  }
  if (oneTimeDono20.checked) {
    oneTimeDonoTotal += parseInt(oneTimeDono20.value)
  }
  if (oneTimeDono50.checked) {
    oneTimeDonoTotal += parseInt(oneTimeDono50.value)
  }
  if (oneTimeDono100.checked) {
    oneTimeDonoTotal += parseInt(oneTimeDono100.value)
  } 
  if (customOneTimeDono.value != "") {
    if (isNaN(parseInt(customOneTimeDono.value)) == false) {
      oneTimeDonoTotal += parseInt(customOneTimeDono.value)
    } 
  }
  return oneTimeDonoTotal
}

//Send confirmation email
function sendConfirmationEmail() {
  //accesses Simple Mail Transfer Protocol to send email through gmail
    Email.send({
      Host: "smtp.gmail.com",
      Username: senderEmail,  
      Password: password,
      To: recieverEmail.value,
      From: senderEmail,
      Subject: "Donation Confirmation",
      Body: "Thank you " + senderName.value + " for your generous donation! This is confirming your donation of " 
      + totalMonthly() + " a month and " 
      + totalOneTime() + " to be donated one time.",
    })
      .then(function (message) {
        //alert user of confirmation email
        alert("Email Confirmation has been sent")
    });
  }
//Check for empty strings
//Thank you message for submitting information
/*function submitThanks() {

  var username = document.getElementById("username");
  var email = document.getElementById("email");
  var npassword = document.getElementById("password");
  var cpassword = document.getElementById("cpassword");
  var firstName = document.getElementById("firstName");
  var lastName = document.getElementById("lastName");
  var occupation = document.getElementById("occupation");
  var currentCity = document.getElementById("city");
  var profileAboutMe = document.getElementById("profileAboutMe"); 
  
  if  (username.value == "" || email.value == "" || npassword.value === "" || cpassword.value === ""
  || firstName.value == "" || lastName.value == "" || occupation.value == "" || currentCity.value == ""
  || profileAboutMe.value == "") {
    alert("Please fill out each field.");
  } 
} */ //Interfered with the function of the smtp email.