import Film from '../../src/models/film';
import { expect } from 'chai';

describe('A film', () => {
  it('should have an id', () => {
    const film = new Film();
    expect(film.id).to.be;
  });
});