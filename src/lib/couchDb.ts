import Client, { CouchDoc } from "davenport";

import Screenplay from '../../src/models/screenplay';

interface UserDoc extends CouchDoc {
  id: String,
}

class CouchDb {
  private DB_URL: string = "0.0.0.0";
  private DB_NAME: string = "movie-tycoon";
  private client: Client<UserDoc>;
  
  constructor(client: Client<UserDoc>|null) {
    if (client) {
      this.client = client;
    } else {
      this.client = new Client<UserDoc>(this.DB_URL, this.DB_NAME);
    }
  }

  async addScreenplayToUser(screenplay: Screenplay, userId: string) {
    const userDoc = await this.client.get(userId);
  }
}

export {UserDoc, CouchDb};