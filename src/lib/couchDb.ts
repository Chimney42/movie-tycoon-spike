import Nano from 'nano';
import UserDoc from './userDoc';
import Screenplay from '../../src/models/screenplay';

class CouchDb {
  private DB_URL: string = 'http://localhost:5984';
  private DB_NAME: string = "movie-tycoon";
  private client: Nano.DocumentScope<UserDoc>;
  
  constructor(client: Nano.DocumentScope<UserDoc>|null) {
    if (client) {
      this.client = client;
    } else {
      const nano = Nano(this.DB_URL);
      this.client = nano.use(this.DB_NAME);
    }
  }

  private getNewUserDoc(userId: String): UserDoc {
    return {
      userId,
      screenplays: [],
      owned: {
        screenplays: []
      }
    } as UserDoc;
  }

  async addScreenplayToUser(screenplay: Screenplay, userId: string) {
    let userDoc: UserDoc;
    try {
      userDoc = await this.client.get(userId);
    } catch (err) {
      userDoc = this.getNewUserDoc(userId);
    }
    if (!userDoc.owned.screenplays.find((sp) => sp.id == screenplay.id)) {
      userDoc.owned.screenplays.push(screenplay);
    }
    await this.client.insert(userDoc, userId);
  }
}

export default CouchDb;