import Director from '../../src/models/director';
import { expect } from 'chai';

describe('A director', () => {
  const id = 231;
  const name = 'Foo Bar';
  let director: Director;

  beforeEach(() => {
    director = new Director(id, name);
  })

  it('should have an id and a name', () => {
    expect(director.id).to.equal(id);
    expect(director.name).to.equal(name);
  });

  it('should have a settable rating', () => {
    const rating = 3;

    expect(director.getRating()).not.to.equal(rating);
    director.setRating(rating);
    expect(director.getRating()).to.equal(rating);
  });
});