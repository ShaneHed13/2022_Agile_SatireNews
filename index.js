<<<<<<< HEAD
(function() {
  let storyList = document.querySelector(".story-list");

  let storyObjects = [
    {
      headline: "Deadlift",
      Date: "2/20/2022"
    },
    {
      headline: "Push-up",
    },
    {
      headline: "Pull-up",
    },
    {
      headline: "Squat",
    },
  ];

  let storyItems = "";

  for (story of storyObjects) {
    storyItems += "<li>" + story.headline + "</li>";
      
  }

  storyList.innerHTML = storyItems;
=======
(function() {
  let storyList = document.querySelector(".story-list");

  let storyObjects = [
    {
      headline: "Deadlift",
      Date: "2/20/2022"
    },
    {
      headline: "Push-up",
    },
    {
      headline: "Pull-up",
    },
    {
      headline: "Squat",
    },
  ];

  let storyItems = "";

  for (story of storyObjects) {
    storyItems += "<li>" + story.headline + "</li>";
      
  }

  storyList.innerHTML = storyItems;
>>>>>>> b4a06f7ba3dec9d0a691117711d61981b6f73b2d
})();