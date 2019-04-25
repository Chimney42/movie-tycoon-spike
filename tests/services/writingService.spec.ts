import WritingService from "../../src/services/writingService";
import Genre from "../../src/models/genre";
import Screenplay from '../../src/models/screenplay';
import {expect} from 'chai';
import Writer from "../../src/models/writer";

describe("The writing service", () => {
  it('should create a new screenplay', () => {
    const writer = new Writer('some-id', "Foo Bar",5);
    const writingService = new WritingService();

    const screenplay = writingService.createNewScreenplay(writer, Genre.Action);
    
    expect(screenplay).to.be.instanceof(Screenplay);
    expect(screenplay.rating).to.equal(writer.level);
  });
});