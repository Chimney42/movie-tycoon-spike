import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
chai.use(sinonChai);

import Nano from 'nano';
import CouchDb from '../../src/lib/couchDb';
import UserDoc from '../../src/lib/userDoc';
import UserState from '../../src/models/userState';

describe('The couchDB client', () => {
  const userId = 'fnwo432e-fi2423noe';
  const baseDoc: UserDoc = {
    userId,
    screenplays: [],
    owned: {
      screenplays: []
    }
  };
  let getBaseDocRes: Nano.DocumentGetResponse & UserDoc;
  let getStub: sinon.SinonStub;
  let couchDBClient: CouchDb;

  beforeEach(() => {
    const clientStub = Nano("http://localhost:5984").db.use('') as Nano.DocumentScope<UserDoc>;
    couchDBClient = new CouchDb();
    couchDBClient.client = clientStub;

    getBaseDocRes = JSON.parse(JSON.stringify(baseDoc)) as Nano.DocumentGetResponse & UserDoc;
    getStub = sinon.stub(clientStub, 'get');
    getStub.returns(Promise.resolve(getBaseDocRes));
  });

  it('should return a fully populated user state', async () => {
    const id = 'some-id';
    const doc = await couchDBClient.get(id);

    expect(doc instanceof UserState).to.be.true;
  });
})
