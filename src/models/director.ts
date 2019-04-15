import { v4 as uuid } from 'uuid';

class Director {
  readonly id: String;
  readonly name: String;
  private rating: number|null = null;

  constructor(name: String) {
    this.id = uuid();
    this.name = name;
  }

  setRating(rating: number) {
    this.rating = rating;
  }

  getRating(): number|null {
    return this.rating;
  }
}

export default Director;