import Screenplay from "../models/screenplay";
import Genre from "../models/genre";
import Writer from '../models/writer';
import uuid from 'uuid';

class WritingService {
  createNewScreenplay(writer: Writer, genre: Genre) {
    return new Screenplay(uuid.v4(), genre, writer.level, 1, 0, 0);
  }
}

export default WritingService;