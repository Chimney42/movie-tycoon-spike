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
    const userDoc = await this.client.get(id);
    return userDoc;
  }
}

export default CouchDb;