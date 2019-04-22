import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import chaiAsPromised from 'chai-as-promised';
chai.use(sinonChai);
chai.use(chaiAsPromised);

import UserState from '../../src/models/userState';
import UserDoc from '../../src/lib/userDoc';
import Screenplay from '../../src/models/screenplay';
import Genre from '../../src/models/genre';
import CouchDb from '../../src/lib/couchDb';
import { stat } from 'fs';


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

  describe('moving screenplay from pool to owned', () => {
    const screenplayId = 'some-other-id';
    const screenplay = { id: screenplayId } as Screenplay;
    let baseDocWithScreenplay: UserDoc;
    let baseDocWithScreenplayOwned: UserDoc;
    let couchClient: CouchDb;

    beforeEach(() => {
      state = new UserState(userId);
      couchClient = new CouchDb();
      baseDocWithScreenplay = JSON.parse(JSON.stringify(baseDoc));
      baseDocWithScreenplay.pool.screenplays.push(screenplay);
      baseDocWithScreenplayOwned = JSON.parse(JSON.stringify(baseDoc));
      baseDocWithScreenplayOwned.owned.screenplays.push(screenplay);
    });

    it('should remove screenplay from pool and add to owned', async () => {
      sinon.stub(couchClient, 'get').returns(Promise.resolve(baseDocWithScreenplay));
      sinon.stub(couchClient, 'put');
      state.client = couchClient;

      await state.moveScreenplayFromPoolToOwned(screenplayId);

      expect(couchClient.put).to.have.been.calledWith(baseDocWithScreenplayOwned);
    });

    it('should reject if screenplay does not exist in pool', async () => {
      sinon.stub(couchClient, 'get').returns(Promise.resolve(baseDoc));
      state.client = couchClient;

      await expect(state.moveScreenplayFromPoolToOwned(screenplayId)).to.be.rejected;
    });

    it('should only remove from pool if screenplay is already owned', async () => {
      const baseDocWithScreenplayInPoolAndOwned = JSON.parse(JSON.stringify(baseDocWithScreenplayOwned));
      baseDocWithScreenplayInPoolAndOwned.pool.screenplays.push(screenplay);

      sinon.stub(couchClient, 'get').returns(Promise.resolve(baseDocWithScreenplayInPoolAndOwned));
      sinon.stub(couchClient, 'put');
      state.client = couchClient;

      await state.moveScreenplayFromPoolToOwned(screenplayId);

      expect(couchClient.put).to.have.been.calledWith(baseDocWithScreenplayOwned);
    });
  })
});