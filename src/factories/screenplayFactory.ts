import uuid from 'uuid';

import Writer from "../models/writer";
import Time from "../models/time";
import Screenplay from "../models/screenplay";
import Genre from "../models/genre";

class ScreenplayFactory {
  writeScreenplay(writer: Writer, time: Time, genre: Genre): Screenplay {
    const id = uuid.v4();
    return new Screenplay(id, Genre.Action, 1, 1, 0, 0);
  }
}

export default ScreenplayFactory;