import chai, {expect} from "chai";
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
chai.use(sinonChai);

import SchedulingService from "../../src/services/schedulingService";
import StateService from "../../src/services/stateService";
import AddScreenplayToUserTask from "../../src/models/tasks/addScreenplayToUserTask";
import Screenplay from "../../src/models/screenplay";
import Genre from "../../src/models/genre";
import AddActorsToUserPoolTask from "../../src/models/tasks/addActorsToUserPool";
import Actor from "../../src/actor";

describe('The scheduling service', () => {
  const userId = 'some-user-id';
  const time = 10;
  const stateService = new StateService();
  let scheduler: SchedulingService;

  beforeEach(() => {
    scheduler = new SchedulingService(stateService);
  })

  function sleep(s: number) {
    return new Promise(resolve => setTimeout(resolve, s));
  }

  it('should schedule AddScreenplayToUser task', async () => {
    const screenplay = new Screenplay('', Genre.Action, 0, 0, 0, 0);
    const task = new AddScreenplayToUserTask(screenplay, userId);
    sinon.spy(stateService, 'addScreenplayToUser');

    await scheduler.scheduleTask(task, time);

    expect(stateService.addScreenplayToUser).to.have.been.calledWith(screenplay, userId);
  });

  it('should schedule FindActors task', async () => {
    const actors = [new Actor('', '', 0)];
    const task = new AddActorsToUserPoolTask(actors, userId);
    sinon.spy(stateService, 'addActorsToUserPool');

    await scheduler.scheduleTask(task, time);
    expect(stateService.addActorsToUserPool).to.have.been.calledWith(actors, userId);
  });
});