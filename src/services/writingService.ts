import UserDoc from "../lib/userDoc";
import UserState from '../models/userState';

class WritingService {
  state: UserState;

  constructor(state: UserState) {
    this.state = state;
  }

  async addScreenplayToUser(screenplayId: string) {
    const screenplay = await this.state.getScreenplayFromPool(screenplayId);
    if (!screenplay) {
      throw new Error(`Screenplay with id ${screenplayId} does not exist in pool`)
    }
  }
}

export default WritingService;