import Director from '../../src/models/director';
import { expect } from 'chai';

describe('A director', () => {
  const name = 'Foo Bar';
  let director: Director;

  beforeEach(() => {
    director = new Director(name);
  });

  it('should have an id', () => {
    expect(director.id).to.be;
  });

  it('should take a name on creation', () => {
    expect(director.name).to.equal(name);
  });

  it('should have a settable rating', () => {
    const rating = 3;

    expect(director.getRating()).not.to.equal(rating);
    director.setRating(rating);
    expect(director.getRating()).to.equal(rating);
  });
});