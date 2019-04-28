import chai, {expect} from "chai";
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import chaiAsPromised from 'chai-as-promised';
chai.use(sinonChai);
chai.use(chaiAsPromised);

import SchedulingService from "../../src/services/schedulingService";
import StateService from "../../src/services/stateService";
import AddScreenplayToUserTask from "../../src/models/tasks/addScreenplayToUserTask";
import Screenplay from "../../src/models/screenplay";
import Genre from "../../src/models/genre";
import AddActorsToUserPoolTask from "../../src/models/tasks/addActorsToUserPool";
import Actor from "../../src/models/actor";
import BaseTask from "../../src/models/tasks/baseTask";
import ReportingService from "../../src/services/reportingService";

describe('The scheduling service', () => {
  const userId = 'some-user-id';
  const time = 10;
  const stateService = new StateService();
  let reportingService: ReportingService;
  let scheduler: SchedulingService;

  beforeEach(() => {
    reportingService = new ReportingService();
    scheduler = new SchedulingService(stateService, reportingService);
    sinon.spy(reportingService, 'dispatch');
  })

  it('should reject if task is unknown', async () => {
    const task = {} as BaseTask;
    return expect(scheduler.scheduleTask(task, time)).to.be.rejectedWith(`Task unkown`);
  });

  it('should schedule AddScreenplayToUser task', async () => {
    const screenplay = new Screenplay('', Genre.Action, 0, 1);
    const task = new AddScreenplayToUserTask(screenplay, userId);
    const report = { userId, name: task.name } as BaseTask;
    sinon.spy(stateService, 'addScreenplayToUser');
    

    await scheduler.scheduleTask(task, time);
    expect(stateService.addScreenplayToUser).to.have.been.calledWith(screenplay, userId);
    return expect(reportingService.dispatch).to.have.been.calledWith(report);
  });

  it('should schedule FindActors task', async () => {
    const actors = [new Actor('', '', 0)];
    const task = new AddActorsToUserPoolTask(actors, userId);
    const report = { userId, name: task.name } as BaseTask;
    sinon.spy(stateService, 'addActorsToUserPool');

    await scheduler.scheduleTask(task, time);
    expect(stateService.addActorsToUserPool).to.have.been.calledWith(actors, userId);
    return expect(reportingService.dispatch).to.have.been.calledWith(report);
  });
});