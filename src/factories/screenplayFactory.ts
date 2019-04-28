import uuid from 'uuid';

import Writer from "../models/writer";
import TaskTime from "../tasks/time";
import Screenplay from "../models/screenplay";
import Genre from "../models/genre";

class ScreenplayFactory {
  writeScreenplay(writer: Writer, time: TaskTime, genre: Genre): Screenplay {
    const id = uuid.v4();
    return new Screenplay(id, Genre.Action, 1, 1);
  }
}

export default ScreenplayFactory;