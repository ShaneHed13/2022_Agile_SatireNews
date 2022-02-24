(function() {
  let storyList = document.querySelector(".story-list");

    let storyObjects = [
    {
      id: 1,
      headline: "Test Story Headline 1",
      date: "2/20/2022",
      imgLink: "images/articles/010922193908.jpg",
      blurb: "Test Story Blurb",
      author: "Shane Hedrington",
      Article: "Test Article, test article"
    },
    {
      id: 2,
      headline: "Test Story Headline 2",
      date: "2/20/2022",
      imgLink: "images/articles/010922193908.jpg",
      blurb: "Test Story Blurb",
      author: "Shane Hedrington",
      Article: "Test Article, test article"
    },
    {
      id: 3,
      headline: "Test Story Headline 3",
      date: "2/20/2022",
      imgLink: "images/articles/010922193908.jpg",
      blurb: "Test Story Blurb",
      author: "Shane Hedrington",
      Article: "Test Article, test article"
    },
    {
      id: 4,
      headline: "Test Story Headline 4",
      date: "2/20/2022",
      imgLink: "images/articles/010922193908.jpg",
      blurb: "Test Story Blurb",
      author: "Shane Hedrington",
      Article: "Test Article, test article"
    },
  ];

  let storyItems = "";

  for (story of storyObjects) {
    storyItems += "<li><a href=article.html#id=" + story.id + "><img id='image' src=" + story.imgLink + "><p id='date'>" + story.date + "</p><h3 id='headline'>" + story.headline + "</h3><p id='blurb'>" + story.blurb + "</p></a></li>"
      
  }

  storyList.innerHTML = storyItems;
})();