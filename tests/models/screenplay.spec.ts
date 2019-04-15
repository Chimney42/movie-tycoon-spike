import Screenplay from '../../src/models/screenplay';
import Genre from '../../src/models/genre';
import { expect } from 'chai';

describe('A screenplay', () => {
    it('should have an id and a genre', () => {
        const id = 213;
        const genre = Genre.Action;
        const screenplay = new Screenplay(id, genre);
        expect(screenplay.id).to.equal(id);
        expect(screenplay.genre).to.equal(genre);
    });
  });
