import {expect} from 'chai';

import Writer from "../../src/models/writer";
import ScreenplayFactory from "../../src/factories/screenplayFactory";
import Genre from '../../src/models/genre';

describe("The screenplay factory", () => {
  it('should create a new screenplay from given info', () => {
    const writer = new Writer('some-writer-id', 'Foo Bar', 1);
    const time = { passed: 10, level: 1 };
    const genre = Genre.Action;
    const screenplayFactory = new ScreenplayFactory();
    
    const screenplay = screenplayFactory.writeScreenplay(writer, time, genre);

    expect(screenplay.id).not.to.be.empty;
    expect(screenplay.genre).to.equal(genre);
    expect(screenplay.rating).to.be.within(1, 5);
    expect(screenplay.leadingActorCount).to.be.at.least(1);
    expect(screenplay.supportingActorCount).to.be.at.least(0);
    expect(screenplay.backgroundActorCount).to.be.at.least(0);
  });
});