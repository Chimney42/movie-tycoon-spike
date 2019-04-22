import UserDoc from "../lib/userDoc";
import UserState from '../models/userState';
import CouchDb from "../lib/couchDb";

class WritingService {
  client: CouchDb;

  constructor() {
    this.client = new CouchDb();
  }

  async addScreenplayToUser(screenplayId: string, userId: string) {
    let userState: UserState;
    userState = await this.client.get(userId);
  }
}

export default WritingService;