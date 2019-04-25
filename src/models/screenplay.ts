import Genre from './genre';

interface ScreenplayInterface {
  id: string;
  genre: Genre;
  rating: number;

  leadingActorCount: number;
  supportingActorCount: number;
  backgroundActorCount: number;
}

class Screenplay implements ScreenplayInterface {
  static readonly RATING_MIN = 1;
  static readonly RATING_MAX = 5;
  
  id: string;
  genre: Genre;
  rating: number;

  leadingActorCount: number;
  supportingActorCount: number;
  backgroundActorCount: number;

  constructor(id: string, genre: Genre, rating: number, leadingActorCount: number, supportingActorCount: number, backgroundActorCount: number) {
    this.id = id;
    this.genre = genre;
    this.rating = rating;
    this.leadingActorCount = leadingActorCount;
    this.supportingActorCount = supportingActorCount;
    this.backgroundActorCount = backgroundActorCount;
  };
};

export default Screenplay;