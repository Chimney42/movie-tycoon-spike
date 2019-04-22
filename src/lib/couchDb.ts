import Nano from 'nano';
import UserDoc from './userDoc';
import UserState from '../models/userState';

class CouchDb {
  private DB_URL: string = 'http://localhost:5984';
  private DB_NAME: string = "movie-tycoon";
  client: Nano.DocumentScope<UserDoc>;
  
  constructor() {
    const nano = Nano(this.DB_URL);
    this.client = nano.use(this.DB_NAME);
  }

  async get(id: string): Promise<UserDoc> {
    return await this.client.get(id);
  }

  async put(doc: UserDoc): Promise<Boolean> {
    const result = await this.client.insert(doc, doc.userId);
    return result.ok;
  }
}

export default CouchDb;