import UserDoc from '../lib/userDoc';

class UserState {
  readonly doc: UserDoc;

  constructor(doc: UserDoc) {
    this.doc = doc;
  }
}

export default UserState;