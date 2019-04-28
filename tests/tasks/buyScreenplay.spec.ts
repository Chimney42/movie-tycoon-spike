import chai, {expect} from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
chai.use(sinonChai);

import BuyScreenplayTask from "../../src/tasks/buyScreenplay";
import Screenplay from "../../src/models/screenplay";
import Genre from "../../src/models/genre";
import StateService from "../../src/services/stateService";

describe('The BuyScreenplay task', () => {
  it('should add the screenplay to user', () => {
    const userId = 'some-user-id';
    const screenplay = new Screenplay('some-screenplay-id', Genre.Action, 1, 1);
    
    const stateService = new StateService();
    sinon.spy(stateService, 'addScreenplayToUser')
    const task = new BuyScreenplayTask(screenplay, userId);
    
    task.process(stateService);
    expect(stateService.addScreenplayToUser).to.have.been.calledWith(screenplay, userId);
  });
});