import Genre from './genre';
class Screenplay {
    readonly id: number;
    readonly genre: Genre;
    private rating: number|null = null;

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
}

export default Screenplay;