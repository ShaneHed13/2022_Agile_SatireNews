(function onLoad() {
    let storyList = document.querySelector(".story-list");
    
    var url = document.location.href;
    
   function subStr(string, character, position) {
      if(position=='b')
      return string.substring(string.indexOf(character) + 1);
      else if(position=='a')
      return string.substring(0, string.indexOf(character));
      else
      return string;
   }
    
    var idString = subStr(url, '=', 'b');
    
    var idNum = parseInt(idString);
    
    for (story of storyObjects) {
        
        if (story.id == idNum)
            
            storyItems = "<h2>" + story.headline + "</h2><h4>" + story.author + "</h4><h5>" + story.date + "</h5><br><img src=" + story.imgLink + "><article>" + story.article + "</article>"
      
  }

    
    storyList.innerHTML = storyItems;
    
})();