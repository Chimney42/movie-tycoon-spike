import Genre from './genre';
import { v4 as uuid } from 'uuid';

class Screenplay {
  readonly id: String;
  readonly genre: Genre;
  private rating: number|null = null;

  private leadingActorCount: number = 0;
  private supportingActorCount: number = 0;
  private backgroundActorCount: number = 0;

  constructor(genre: Genre) {
    this.id = uuid();
    this.genre = genre;
  }

  setRating(rating: number) {
    this.rating = rating;
  }

  getRating(): number|null {
    return this.rating;
  }

  setLeadingActorCount(count: number) {
    this.leadingActorCount = count;
  }

  getLeadingActorCount(): number {
    return this.leadingActorCount;
  }

  setSupportingActorCount(count: number) {
    this.supportingActorCount = count;
  }

  getSupportingActorCount(): number {
    return this.supportingActorCount;
  }

  setBackgroundActorCount(count: number) {
    this.backgroundActorCount = count;
  }

  getBackgroundActorCount(): number {
    return this.backgroundActorCount;
  }
}

export default Screenplay;