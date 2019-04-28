import {expect} from 'chai';

import Writer from "../../src/models/writer";
import ScreenplayFactory from "../../src/factories/screenplayFactory";
import Genre from '../../src/models/genre';

describe("The screenplay factory", () => {
  it('should create a new screenplay from given info', () => {
    const writer = new Writer('some-writer-id', 'Foo Bar', 1);
    const taskTime = { ms: 10, level: 1 };
    const genre = Genre.Action;
    const screenplayFactory = new ScreenplayFactory();
    
    const screenplay = screenplayFactory.writeScreenplay(writer, taskTime, genre);

    expect(screenplay.id).not.to.be.empty;
    expect(screenplay.genre).to.equal(genre);
    expect(screenplay.rating).to.be.within(1, 5);
  });
});