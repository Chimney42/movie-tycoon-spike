import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
chai.use(sinonChai);

import CouchDb from '../../src/lib/couchDb';
import WritingService from '../../src/services/writingService';
import UserDoc from '../../src/lib/userDoc';
import UserState from '../../src/models/userState';

describe('The writing service', () => {
  describe('adding screenplay to user', () => {
    const userId = 'some-id';
    const screenplayId = 'some-other-id';
    let writingService: WritingService;
    let couchDBClient: CouchDb;
    let baseDoc: UserDoc;

    beforeEach(() => {
      couchDBClient = new CouchDb();
      writingService = new WritingService();
      baseDoc = {
        userId,
        screenplays: [],
        owned: {
          screenplays: []
        }
      };
      const userState = new UserState(baseDoc);
      sinon.stub(couchDBClient, 'get').returns(Promise.resolve(userState));
      writingService.client = couchDBClient;
    })

    it('should check if doc already exists', async () => {
      await writingService.addScreenplayToUser(screenplayId, userId);
  
      expect(couchDBClient.get).to.have.been.calledWith(userId);
    });
  });
});
