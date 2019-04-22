import UserDoc from "../lib/userDoc";
import UserState from '../models/userState';

class WritingService {
  state: UserState;

  constructor(state: UserState) {
    this.state = state;
  }

  async addScreenplayToUser(screenplayId: string) {
    return await this.state.moveScreenplayFromPoolToOwned(screenplayId);
  }
}

export default WritingService;