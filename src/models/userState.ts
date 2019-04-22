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

  private async getCurrentState(): Promise<UserDoc> {
    return await this.client.get(this.userId);
  }

  private async saveCurrentState(doc: UserDoc): Promise<Boolean> {
    return await this.client.put(doc);
  }

  async moveScreenplayFromPoolToOwned(id: string): Promise<Boolean> {
    const doc = await this.getCurrentState();  
    const screenplay = doc.pool.screenplays.find((sp) => sp.id === id);
    if (screenplay) {
      const index = doc.pool.screenplays.indexOf(screenplay);
      doc.pool.screenplays.splice(index, 1);
      if (!doc.owned.screenplays.find((sp) => sp.id === id)) {
        doc.owned.screenplays.push(screenplay);
      }
      return await this.saveCurrentState(doc);
    } else {
      return Promise.reject(`Screenplay with id ${id} does not exist in pool`)
    }
  }
}

export default UserState;