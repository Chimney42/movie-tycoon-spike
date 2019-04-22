import Screenplay from './screenplay';
import CouchDb from '../lib/couchDb';
import UserDoc from '../lib/userDoc';

class UserState {
  readonly userId: string;
  client: CouchDb;

  constructor(userId: string) {
    this.userId = userId;
    this.client = new CouchDb();
  }

  private async getCurrentState() {
    const doc = await this.client.get(this.userId);
    return doc;
  }

  async getScreenplayFromPool(id: string): Promise<Screenplay|undefined> {
    const doc = await this.getCurrentState();
    return doc.pool.screenplays.find((sp) => sp.id === id);
  }
}

export default UserState;