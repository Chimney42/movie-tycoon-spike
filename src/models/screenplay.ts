import Genre from './genre';
class Screenplay {
    readonly id: number;
    readonly genre: Genre;

    constructor(id: number, genre: Genre) {
        this.id = id;
        this.genre = genre;
    }
}

export default Screenplay;