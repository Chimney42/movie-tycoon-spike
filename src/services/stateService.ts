import Writer from "../models/writer";

class StateService {
    getWriterById(writerId: string, userId: string): Writer {
      return new Writer('', '', 0);
    };
}

export default StateService;