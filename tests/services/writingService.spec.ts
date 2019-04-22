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

    it('should get screenplay from pool', async () => {
      const screenplay = {id: screenplayId} as Screenplay;
      sinon.stub(userState, 'getScreenplayFromPool').returns(Promise.resolve(screenplay));

      await writingService.addScreenplayToUser(screenplayId);
  
      expect(userState.getScreenplayFromPool).to.have.been.calledWith(screenplayId);
    });

    it('should be rejected if screenplay does not exist in pool', async () => {
      sinon.stub(userState, 'getScreenplayFromPool').returns(Promise.resolve(undefined));
      
      await expect(writingService.addScreenplayToUser(screenplayId)).to.be.rejected;
    });
  });
});
