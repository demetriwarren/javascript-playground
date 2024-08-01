const movies = [
    {
      imdbID: "tt10872600",
      title: "Spider-Man: No Way Home",
      year: 2021,
      director: "Jon Watts",
      genre: "Action",
      rating: 8.4,
      budgetInMillions: 200,
    },
    {
      imdbID: "tt1160419",
      title: "Dune",
      year: 2021,
      director: "Denis Villeneuve",
      genre: "Sci-Fi",
      rating: 8.1,
      budgetInMillions: 165,
    },
    {
      imdbID: "tt1877830",
      title: "The Batman",
      year: 2022,
      director: "Matt Reeves",
      genre: "Action",
      rating: 8.3,
      budgetInMillions: 185,
    },
    {
      imdbID: "tt2382320",
      title: "No Time to Die",
      year: 2021,
      director: "Cary Joji Fukunaga",
      genre: "Action",
      rating: 7.3,
      budgetInMillions: 250,
    },
    {
      imdbID: "tt10838180",
      title: "The Matrix Resurrections",
      year: 2021,
      director: "Lana Wachowski",
      genre: "Sci-Fi",
      rating: 5.7,
      budgetInMillions: 190,
    },
    {
      imdbID: "tt9376612",
      title: "Shang-Chi and the Legend of the Ten Rings",
      year: 2021,
      director: "Destin Daniel Cretton",
      genre: "Action",
      rating: 7.4,
      budgetInMillions: 150,
    },
    {
      imdbID: "tt2953050",
      title: "Encanto",
      year: 2021,
      director: "Byron Howard, Jared Bush",
      genre: "Animation",
      rating: 7.9,
      budgetInMillions: 120,
    },
    {
      imdbID: "tt8847712",
      title: "The French Dispatch",
      year: 2021,
      director: "Wes Anderson",
      genre: "Comedy",
      rating: 7.2,
      budgetInMillions: 25,
    },
    {
      imdbID: "tt11286314",
      title: "Don't Look Up",
      year: 2021,
      director: "Adam McKay",
      genre: "Comedy",
      rating: 7.2,
      budgetInMillions: 75,
    },
    {
      imdbID: "tt6334354",
      title: "The Suicide Squad",
      year: 2021,
      director: "James Gunn",
      genre: "Action",
      rating: 7.2,
      budgetInMillions: 185,
    },
    {
      imdbID: "tt6264654",
      title: "Free Guy",
      year: 2021,
      director: "Shawn Levy",
      genre: "Comedy",
      rating: 7.1,
      budgetInMillions: 100,
    },
    {
      imdbID: "tt3228774",
      title: "Cruella",
      year: 2021,
      director: "Craig Gillespie",
      genre: "Comedy",
      rating: 7.4,
      budgetInMillions: 100,
    },
    {
      imdbID: "tt9032400",
      title: "Eternals",
      year: 2021,
      director: "Chloé Zhao",
      genre: "Action",
      rating: 6.4,
      budgetInMillions: 200,
    },
    {
      imdbID: "tt8332922",
      title: "A Quiet Place Part II",
      year: 2021,
      director: "John Krasinski",
      genre: "Horror",
      rating: 7.3,
      budgetInMillions: 61,
    },
    {
      imdbID: "tt3480822",
      title: "Black Widow",
      year: 2021,
      director: "Cate Shortland",
      genre: "Action",
      rating: 6.7,
      budgetInMillions: 200,
    },
    {
      imdbID: "tt0870154",
      title: "Jungle Cruise",
      year: 2021,
      director: "Jaume Collet-Serra",
      genre: "Adventure",
      rating: 6.6,
      budgetInMillions: 200,
    },
    {
      imdbID: "tt4513678",
      title: "Ghostbusters: Afterlife",
      year: 2021,
      director: "Jason Reitman",
      genre: "Comedy",
      rating: 7.1,
      budgetInMillions: 75,
    },
    {
      imdbID: "tt12801262",
      title: "Luca",
      year: 2021,
      director: "Enrico Casarosa",
      genre: "Animation",
      rating: 7.5,
      budgetInMillions: 50,
    },
    {
      imdbID: "tt1321510",
      title: "In the Heights",
      year: 2021,
      director: "Jon M. Chu",
      genre: "Drama",
      rating: 7.3,
      budgetInMillions: 55,
    },
    {
      imdbID: "tt11214590",
      title: "House of Gucci",
      year: 2021,
      director: "Ridley Scott",
      genre: "Drama",
      rating: 6.6,
      budgetInMillions: 75,
    },
  ];
  
  
  
  //Use array methods including find, filter, map, and forEach to complete each of the tasks below.
  
  //Print just the movie names

//   let movie = movies.map(movie => movie.title);
//   console.log(movie)
  
  // What are the action movies in the list?
  
  let actionMovies = movies.filter()
  
  //What movies were bad. Bad will be defined as a rating of less than 7.
  
  //What movies were good. Good will be defined as a rating of 8 or higher?
  
  //What movie was directed by Wes Anderson?
  
  // What are the comedy movies in the list?
  
  //Create an array of strings with just the names of the directors.
  
  //Generate a url to each movie on IMDB using the imdbID and print it to the screen.
  //For example, https://www.imdb.com/title/tt10872600/
  
  //Create an array of strings with the urls from the last task
  
  //Bonus: What was the total budget for all action movies in 2021?
  //Bonus 2: Do that calculation using the array method reduce