class Director {
  readonly id: number;
  readonly name: String;
  private rating: number|null = null;

  constructor(id: number, name: String) {
    this.id = id;
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