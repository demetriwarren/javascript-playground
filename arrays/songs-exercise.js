const songs = [
    {
      songID: 1,
      title: "Levitating",
      artist: "Dua Lipa",
      album: "Future Nostalgia",
      year: 2020,
      genre: "Pop",
      durationInSeconds: 203,
    },
    {
      songID: 2,
      title: "Blinding Lights",
      artist: "The Weeknd",
      album: "After Hours",
      year: 2019,
      genre: "Synthpop",
      durationInSeconds: 200,
    },
    {
      songID: 3,
      title: "Good 4 U",
      artist: "Olivia Rodrigo",
      album: "SOUR",
      year: 2021,
      genre: "Pop Punk",
      durationInSeconds: 178,
    },
    {
      songID: 4,
      title: "Stay",
      artist: "The Kid LAROI, Justin Bieber",
      album: "F*ck Love 3: Over You",
      year: 2021,
      genre: "Pop",
      durationInSeconds: 141,
    },
    {
      songID: 5,
      title: "Montero (Call Me By Your Name)",
      artist: "Lil Nas X",
      album: "Montero",
      year: 2021,
      genre: "Pop Rap",
      durationInSeconds: 137,
    },
    {
      songID: 6,
      title: "Peaches",
      artist: "Justin Bieber",
      album: "Justice",
      year: 2021,
      genre: "R&B",
      durationInSeconds: 198,
    },
    {
      songID: 7,
      title: "Drivers License",
      artist: "Olivia Rodrigo",
      album: "SOUR",
      year: 2021,
      genre: "Pop",
      durationInSeconds: 242,
    },
    {
      songID: 8,
      title: "Save Your Tears",
      artist: "The Weeknd",
      album: "After Hours",
      year: 2020,
      genre: "Synthpop",
      durationInSeconds: 215,
    },
    {
      songID: 9,
      title: "Kiss Me More",
      artist: "Doja Cat feat. SZA",
      album: "Planet Her",
      year: 2021,
      genre: "R&B",
      durationInSeconds: 208,
    },
    {
      songID: 10,
      title: "Industry Baby",
      artist: "Lil Nas X, Jack Harlow",
      album: "Montero",
      year: 2021,
      genre: "Hip Hop",
      durationInSeconds: 212,
    },
    {
      songID: 11,
      title: "Butter",
      artist: "BTS",
      album: "Butter",
      year: 2021,
      genre: "Pop",
      durationInSeconds: 165,
    },
    {
      songID: 12,
      title: "Deja Vu",
      artist: "Olivia Rodrigo",
      album: "SOUR",
      year: 2021,
      genre: "Pop",
      durationInSeconds: 224,
    },
    {
      songID: 13,
      title: "Bad Habits",
      artist: "Ed Sheeran",
      album: "=",
      year: 2021,
      genre: "Pop",
      durationInSeconds: 231,
    },
    {
      songID: 14,
      title: "Heat Waves",
      artist: "Glass Animals",
      album: "Dreamland",
      year: 2020,
      genre: "Indie Pop",
      durationInSeconds: 238,
    },
    {
      songID: 15,
      title: "Levitating (feat. DaBaby)",
      artist: "Dua Lipa",
      album: "Future Nostalgia",
      year: 2020,
      genre: "Pop",
      durationInSeconds: 203,
    },
    {
      songID: 16,
      title: "Shivers",
      artist: "Ed Sheeran",
      album: "=",
      year: 2021,
      genre: "Pop",
      durationInSeconds: 207,
    },
    {
      songID: 17,
      title: "Cold Heart (PNAU Remix)",
      artist: "Elton John, Dua Lipa",
      album: "The Lockdown Sessions",
      year: 2021,
      genre: "Dance",
      durationInSeconds: 204,
    },
    {
      songID: 18,
      title: "You Right",
      artist: "Doja Cat, The Weeknd",
      album: "Planet Her",
      year: 2021,
      genre: "R&B",
      durationInSeconds: 185,
    },
    {
      songID: 19,
      title: "Happier Than Ever",
      artist: "Billie Eilish",
      album: "Happier Than Ever",
      year: 2021,
      genre: "Alternative",
      durationInSeconds: 298,
    },
    {
      songID: 20,
      title: "My Universe",
      artist: "Coldplay, BTS",
      album: "Music of the Spheres",
      year: 2021,
      genre: "Pop Rock",
      durationInSeconds: 228,
    },
  ];
  
  // Here are some questions that students can answer using array methods like `find`, `filter`, `map`, and `reduce` on the `songs` array:
  
  // 1. **Find a specific song**:
  //    - Use the `find` method to find the song with the `songID` of 10. What is the title of this song?

//   let song = songs.find(  (song) => song.songID === 10  );      //this basically a "for of" loop with an if statement inside of it 
//   console.log(song.songID)
//   console.log(song.title)

//this is the for of version of what is happening above. 
//   for (const song of songs) {
//     if (song.songID === 10)
//         console.log(song.title);
//     return;
//   }
  
  // 2. **Filter songs by genre**:
  //    - Use the `filter` method to create a new array of all songs in the "Pop" genre. How many songs are in this genre?

//   let popSongs = songs.filter((song) => song.genre == "Pop");
//   console.log(popSongs)
//   console.log("There are " + popSongs.length + " songs in the pop genre.")
  
  // 3. **Map to create a new array of titles**:
  //    - Use the `map` method to create a new array that contains only the titles of all the songs. What are the titles?

//   let titlesOnly = songs.map((song) => song.title)      //takes the song(song) in the array of songs, and returns only the titles. 
//   console.log(titlesOnly)
  
  // 4. **Calculate the total duration**:
  //    - Use the `reduce` method to calculate the total duration of all songs in seconds. What is the total duration?
  
  // 5. **Find songs by a specific artist**:
  //    - Use the `filter` method to find all songs by Olivia Rodrigo. What are the titles of these songs?

//   let olivaSong = songs.filter((song) => song.artist === "Olivia Rodrigo");
//   console.log(olivaSong)

//   let olivaSongTitles = olivaSong.map(song => song.title);
//   console.log(olivaSongTitles)

  
  // 6. **Find the longest song**:
  //    - Use the `reduce` method to find the song with the longest duration. What is the title of this song and its duration in seconds?
  
  // 7. **Map to create an array of song information strings**:
  //    - Use the `map` method to create a new array of strings where each string is in the format "Title by Artist". What are the strings?

  
  
  // 8. **Calculate the average duration**:
  //    - Use the `reduce` method to calculate the average duration of the songs in seconds. What is the average duration?
  
  // 9. **Filter songs released in a specific year**:
  //    - Use the `filter` method to create a new array of songs released in 2021. How many songs were released in this year?
  
  // 10. **Find the first song of a specific genre**:
  //     - Use the `find` method to find the first song in the "R&B" genre. What is the title of this song?