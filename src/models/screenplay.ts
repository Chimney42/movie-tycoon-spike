import Genre from './genre';

interface Screenplay {
  id: string;
  genre: Genre;
  rating: number;

  leadingActorCount: number;
  supportingActorCount: number;
  backgroundActorCount: number;
}

export default Screenplay;