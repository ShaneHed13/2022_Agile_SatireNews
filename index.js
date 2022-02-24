(function() {
  let storyList = document.querySelector(".story-list");

  let storyItems = "";

  for (story of storyObjects) {
    storyItems += "<li><a href=article.html#id=" + story.id + "><img id='image' src=" + story.imgLink + "><p id='date'>" + story.date + "</p><h3 id='headline'>" + story.headline + "</h3><p id='blurb'>" + story.blurb + "</p></a></li>"
      
  }

  storyList.innerHTML = storyItems;
})();