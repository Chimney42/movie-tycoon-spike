import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import chaiAsPromised from 'chai-as-promised';
chai.use(sinonChai);
chai.use(chaiAsPromised);

import WritingService from '../../src/services/writingService';
import UserState from '../../src/models/userState';
import Screenplay from '../../src/models/screenplay';

describe('The writing service', () => {
  describe('adding screenplay to user', () => {
    const userId = 'some-id';
    const screenplayId = 'some-other-id';
    let writingService: WritingService;
    let userState: UserState;

    beforeEach(() => {
      userState = new UserState(userId);
      writingService = new WritingService(userState);
    })

    it('should move screenplay from pool to owned', async () => {
      const screenplay = {id: screenplayId} as Screenplay;
      sinon.stub(userState, 'moveScreenplayFromPoolToOwned');

      await writingService.addScreenplayToUser(screenplayId);
  
      expect(userState.moveScreenplayFromPoolToOwned).to.have.been.calledWith(screenplayId);
    });
  });
});
