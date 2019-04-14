import Screenplay from '../../src/models/screenplay';
import { expect } from 'chai';

describe('A screenplay', () => {
    it('should have an id', () => {
        const id = 213;
        const screenplay = new Screenplay(id);
        expect(screenplay.id).to.equal(id);
    });
  });
