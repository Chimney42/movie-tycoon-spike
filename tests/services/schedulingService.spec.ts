import chai, {expect} from "chai";
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
chai.use(sinonChai);

import SchedulingService from "../../src/services/schedulingService";
import StateService from "../../src/services/stateService";
import AddScreenplayToUserTask from "../../src/models/tasks/addScreenplayToUserTask";
import Screenplay from "../../src/models/screenplay";
import Genre from "../../src/models/genre";

describe('The scheduling service', () => {
  function sleep(s: number) {
    return new Promise(resolve => setTimeout(resolve, s));
  }

  it('should schedule a task', async () => {
    const stateService = new StateService();
    const scheduler = new SchedulingService(stateService);
    const userId = 'some-user-id';
    const time = 100;
    const screenplay = new Screenplay('', Genre.Action, 0, 0, 0, 0);
    const task = new AddScreenplayToUserTask(screenplay, userId);
    sinon.spy(stateService, 'addScreenplayToUser');

    await scheduler.scheduleTask(task, time);

    expect(stateService.addScreenplayToUser).to.have.been.calledWith(screenplay, userId);
  });
});