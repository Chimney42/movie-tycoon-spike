import Writer from "../models/writer";
import Screenplay from "../models/screenplay";

class StateService {
    getWriterById(writerId: string, userId: string): Writer {
      return new Writer('', '', 0);
    };

    addScreenplayToUser(screenplay: Screenplay, userId: string) {

    };
}

export default StateService;