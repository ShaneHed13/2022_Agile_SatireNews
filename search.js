function search_story() {
    
    let newsStories = document.querySelector(".story-list");
    
    let keyword = document.getElementById('searchbar').value.toLowerCase();
    
    let storyItems = "";
    
    for (story of storyObjects){
        
        if(story.headline.toLowerCase().includes(keyword)) {
            
            storyItems += "<li><a href=article.html#id=" + story.id + "><img id='image' src=" + story.imgLink + "><p id='date'>" + story.date + "</p><h3 id='headline'>" + story.headline + "</h3><p id='blurb'>" + story.blurb + "</p></a></li>"
            
        }
        
    }
    
    newsStories.innerHTML = storyItems;
    
}