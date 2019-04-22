import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
chai.use(sinonChai);

import UserState from '../../src/models/userState';
import UserDoc from '../../src/lib/userDoc';
import Screenplay from '../../src/models/screenplay';
import Genre from '../../src/models/genre';
import CouchDb from '../../src/lib/couchDb';


describe('The user state', () => {
  const userId = 'some-id';
  let baseDoc: UserDoc;
  let state: UserState;

  beforeEach(() => {
    baseDoc = {
      userId: '',
      pool: {
        screenplays: [],
      },
      owned: {
        screenplays: []
      }
    }; 
  });

  it('should take the userId on creation', () => {
    state = new UserState(userId);
    expect(state.userId).to.equal(userId);
  });

  describe('getting screenplays', () => {
    it('should get screenplay from pool', async () => {
      const screenplayId = 'some-other-id';
      const screenplay = { id: screenplayId } as Screenplay;
      const baseDocWithScreenplay = JSON.parse(JSON.stringify(baseDoc));
      const couchClient = new CouchDb();
      baseDocWithScreenplay.pool.screenplays.push(screenplay);

      sinon.stub(couchClient, 'get').returns(Promise.resolve(baseDocWithScreenplay));
      state.client = couchClient;
      
      const result = await state.getScreenplayFromPool(screenplayId)
    
      expect(result).to.equal(screenplay);
    });
  })
});