import Screenplay from '../../src/models/screenplay';
import Genre from '../../src/models/genre';
import { expect } from 'chai';

describe('A screenplay', () => {
        const id = 213;
        const genre = Genre.Action;
        let screenplay: Screenplay;
    beforeEach(() => {
        screenplay = new Screenplay(id, genre);
    })

    it('should have an id and a genre', () => {
        expect(screenplay.id).to.equal(id);
        expect(screenplay.genre).to.equal(genre);
    });

    it('should have a settable rating', () => {
        const rating = 5;
        
        expect(screenplay.getRating()).not.to.equal(rating);
        screenplay.setRating(rating);
        expect(screenplay.getRating()).to.equal(rating);
    })
  });
