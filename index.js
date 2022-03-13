(function() {
    let newsStories = document.querySelector(".story-list");

    let storyItems = "";
    for (story of storyObjects) {
        storyItems += "<li><a href=article.html#id=" + story.id + "><img id='image' src=" + story.imgLink + "><p id='date'>" + story.date + "</p><h3 id='headline'>" + story.headline + "</h3><p id='blurb'>" + story.blurb + "</p></a></li>";
      
    }

    newsStories.innerHTML = storyItems;
    
    // Advertisements
    
    var index = 4;
    
    adPic = document.getElementById('advertisement');
    adLink = document.getElementById('adLink');
    
    
    var picPaths = ['images/fakeAds/betty_bed_ad_600x50.png','images/fakeAds/coffee_ad_600x50.png','images/fakeAds/music_school_ad_600x50.png','images/fakeAds/betty_bed_ad_600x120.png','images/fakeAds/coffee_ad_600x120.png','images/fakeAds/music_school_ad_600x120.png'];
    
    var adLinks = ['https://www.slumberland.com','https://www.starbucks.com','https://www.julliard.edu','https://www.slumberland.com','https://www.starbucks.com','https://www.julliard.edu'];
    
    function rotate(){
        
        if(index < 6) {
        adPic.src = picPaths[index];
        adlink.href = adLinks[index];
        index = index +1;
            
        } else {index = 0;
               }
        
    }
    
    setInterval(rotate, 4000);
    
    
        
})();
