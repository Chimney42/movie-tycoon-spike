import Screenplay from '../../src/models/screenplay';
import Genre from '../../src/models/genre';
import { expect } from 'chai';

describe('A screenplay', () => {
  const genre = Genre.Action;
  let screenplay: Screenplay;

  beforeEach(() => {
    screenplay = new Screenplay(genre);
  });

  it('should have an id', () => {
    expect(screenplay.id).to.be;
  });

  it('should take a genre on creation', () => {
    expect(screenplay.genre).to.equal(genre);
  });

  it('should have a settable rating', () => {
    const rating = 5;

    expect(screenplay.getRating()).not.to.equal(rating);
    screenplay.setRating(rating);
    expect(screenplay.getRating()).to.equal(rating);
  });

  it('should have settable number of all actor types', () => {
    const leadingActorCount = 2;
    const supportingActorCount = 4;
    const backgroundActorCount = 6;

    expect(screenplay.getLeadingActorCount()).not.to.equal(leadingActorCount);
    expect(screenplay.getSupportingActorCount()).not.to.equal(supportingActorCount);
    expect(screenplay.getBackgroundActorCount()).not.to.equal(backgroundActorCount);
        
    screenplay.setLeadingActorCount(leadingActorCount);
    screenplay.setSupportingActorCount(supportingActorCount);
    screenplay.setBackgroundActorCount(backgroundActorCount);

    expect(screenplay.getLeadingActorCount()).to.equal(leadingActorCount);
    expect(screenplay.getSupportingActorCount()).to.equal(supportingActorCount);
    expect(screenplay.getBackgroundActorCount()).to.equal(backgroundActorCount);
  });
});
