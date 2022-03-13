// Initialize images in an array
var picPaths = ['images/fakeAds/betty_bed_ad_600x50.png','images/fakeAds/coffee_ad_600x50.png','images/fakeAds/music_school_ad_600x50.png'];

// An index to track the contender image 
var imageIndex = 0;
var advertisement; 

// An event callback for starting the interval
function startInterval() {
 setInterval(displayNextImage, 3000);
}

function displayNextImage() {
  advertisement.src = picPaths[imageIndex];
  if(imageIndex === (picPaths.length-1)) {
    imageIndex = 0;
  }
  else {
    imageIndex = imageIndex + 1; // It can be replaced with imageIndex ++  
  }
}

window.onload=function() {
 advertisement = document.querySelector('advertisement');
    
advertisement.src = 'images/fakeAds/coffee_ad_600x50.png'
 startInterval();
}