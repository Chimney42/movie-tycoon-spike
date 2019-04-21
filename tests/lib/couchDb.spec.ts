import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
chai.use(sinonChai);

import Nano from 'nano';
import CouchDb from '../../src/lib/couchDb';
import UserDoc from '../../src/lib/userDoc.js';
import Genre from '../../src/models/genre';
import Screenplay from '../../src/models/screenplay';

describe('The couchDB client', () => {
  describe('adding screenplay to user', () => {
    const userId = 'fnwo432e-fi2423noe';
    const screenplay = new Screenplay(Genre.Action);
    const baseDoc: UserDoc = {
      userId,
      screenplays: [],
      owned: {
        screenplays: []
      }
    };
    let getBaseDocRes: Nano.DocumentGetResponse & UserDoc;
    let baseDocWithScreenplay: UserDoc;
    let clientStub: Nano.DocumentScope<UserDoc>;
    let getStub: sinon.SinonStub;
    let couchDBClient: CouchDb;

    beforeEach(() => {
      clientStub = Nano("http://localhost:5984").db.use('');
      couchDBClient = new CouchDb(clientStub);

      getBaseDocRes = JSON.parse(JSON.stringify(baseDoc)) as Nano.DocumentGetResponse & UserDoc;
      baseDocWithScreenplay = JSON.parse(JSON.stringify(baseDoc));
      baseDocWithScreenplay.owned.screenplays.push(screenplay);

      getStub = sinon.stub(clientStub, 'get');
      getStub.returns(Promise.resolve(getBaseDocRes));
      sinon.stub(clientStub, 'insert');
    });

    it('should check if doc already exists', async () => {  
      await couchDBClient.addScreenplayToUser(screenplay, userId);
  
      expect(clientStub.get).to.have.been.calledWith(userId);
    });

    it('should add screenplay to existing doc', async () => {
      await couchDBClient.addScreenplayToUser(screenplay, userId);
      
      expect(clientStub.insert).to.have.been.calledWith(baseDocWithScreenplay, userId);
    });

    it('should put new doc if non exists', async () => {
      getStub.returns(Promise.reject());

      await couchDBClient.addScreenplayToUser(screenplay, userId);

      expect(clientStub.insert).to.have.been.calledWith(baseDocWithScreenplay, userId);
    });

    it('should not add screenplay if it is already in the list', async () => {
      const getDocWithScreenplayRes = JSON.parse(JSON.stringify(baseDoc)) as Nano.DocumentGetResponse & UserDoc;
      getDocWithScreenplayRes.owned.screenplays.push(screenplay);
      getStub.returns(Promise.resolve(getDocWithScreenplayRes));

      await couchDBClient.addScreenplayToUser(screenplay, userId);

      expect(clientStub.insert).to.have.been.calledWith(baseDocWithScreenplay, userId);
    });
  });
})
