(function() {
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
    
    var id = subStr(url, '=', 'b');
    
    let storyItems = "The index for this article is!" + id;
    
    storyList.innerHTML = storyItems;
})();