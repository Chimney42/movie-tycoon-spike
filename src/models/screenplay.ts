import Genre from './genre';

class Screenplay {
  static readonly RATING_MIN = 1;
  static readonly RATING_MAX = 5;
  
  id: string;
  genre: Genre;
  rating: number;
  sceneCount: number;

  constructor(id: string, genre: Genre, rating: number, sceneCount: number) {
    this.id = id;
    this.genre = genre;
    this.rating = rating;
    this.sceneCount = sceneCount;
  };
};

export default Screenplay;