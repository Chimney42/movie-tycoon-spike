import Genre from './genre';
class Screenplay {
  readonly id: number;
  readonly genre: Genre;
  private rating: number|null = null;

  private leadingActorCount: number = 0;
  private supportingActorCount: number = 0;
  private backgroundActorCount: number = 0;

  constructor(id: number, genre: Genre) {
    this.id = id;
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