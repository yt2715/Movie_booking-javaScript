var movies = [
    {title: "Spotlight"},
    {title: "Forest Gump"},
    {title: "Good Will Hunting"},
    {title: "The Prestige"},
    {title: "65"},
    {title: "The Exorcist"},
    {title: "Joker"},
    {title: "Fargo"},
    {title: "1917"}
  ];
  
  function populateMoviesDropdown() {
    var moviesDropdown = document.getElementById("movies");
    for (var i = 0; i < movies.length; i++) {
      var option = document.createElement("option");
      option.text = movies[i].title;
      option.value = movies[i].title;
      moviesDropdown.add(option);
    }
  }
  
  var timings = [
    {time:"8:00 am"},
    {time:"10:30 am"},
    {time:"2:00 pm"},
    {time:"5:15 pm"},
    {time:"8:45 pm"},
    {time:"11:00 pm"}
  ];
  
  function populatetimingsDropdown() {
    var timingsDropdown = document.getElementById("timings");
    for (var i = 0; i < timings.length; i++) {
      var option = document.createElement("option");
      option.text = timings[i].time;
      option.value = timings[i].time;
      timingsDropdown.add(option);
    }
  }
  