function sort_story() {
    
    let newsStories = document.querySelector(".story-list");
    
    let storyItems = "";
    
    storyObjects.sort((a, b) => {
        
        let da = new Date(a.date),
            db = new Date(b.date);
        return da - db;
        
    });
    
    
    for (story of storyObjects){
            
            storyItems += "<li><a href=article.html#id=" + story.id + "><img id='image' src=" + story.imgLink + "><p id='date'>" + story.date + "</p><h3 id='headline'>" + story.headline + "</h3><p id='blurb'>" + story.blurb + "</p></a></li>";
        
            newsStories.innerHTML = story.sort;
            
    }
    
    newsStories.innerHTML = storyItems;
    
}