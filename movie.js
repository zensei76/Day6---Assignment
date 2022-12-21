// Day 6 :
/*Class - Movie

The class Movie is stated below. An instance of class Movie represents a film. This class has the following three properties:

    title, which is a String representing the title of the movie
    studio, which is a String representing the studio that made the movie
    rating, which is a String representing the rating of the movie (i.e. PG­13, R, etc)*/




// a) Write a constructor for the class Movie, which takes a String representing the title of the movie, a String representing the studio, and a String representing the rating as its arguments, and sets the respective class properties to these values.

class movie {
    constructor(title, studio, rating = "PG") {
      this.title = title;
      this.studio = studio;
      this.rating = rating;
    }
    static getPG(movies) {
          let result = movies.filter((x) => {
              return x.rating === "PG" || x.rating === "pg";
          });
          return result;
      }
  }
  
  var mov = new movie("RRR", " D. V. V. Danayya ", "U/A");
  console.log(mov);
  
  // b) The constructor for the class Movie will set the class property rating to "PG" as default when no rating is provided.
  
  var mov = new movie("RRR", " D. V. V. Danayya ");
  console.log(mov);
  
  // c) Write a method getPG, which takes an array of base type Movie as its argument, and returns a new array of only those movies in the input array with a rating of "PG". You may assume the input array is full of Movie instances. The returned array need not be full.
  
  const movie1 = new movie("RRR", " D. V. V. Danayya ", "U/A");
  const movie2 = new movie("Vikram", "Raaj Kamal Films ","pg");
  const movie3 = new movie("KGF 2", "Hombale Films", "PG");
  
  let movies = [movie1, movie2, movie3];
  console.log(movie.getPG(movies));
    
  
  
  // d) Write a piece of code that creates an instance of the class Movie with the title “RRR”, the studio “ D. V. V. Danayya ”, and the rating “PG­13”
  
  
  var mov = new movie("RRR", " D. V. V. Danayya ", "PG13");
  console.log(mov);
