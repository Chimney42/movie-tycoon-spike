import chai, {expect} from "chai";
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import chaiAsPromised from 'chai-as-promised';
chai.use(sinonChai);
chai.use(chaiAsPromised);

import SchedulingService from "../../src/services/schedulingService";
import StateService from "../../src/services/stateService";
import Screenplay from "../../src/models/screenplay";
import Genre from "../../src/models/genre";
import CastActorsTask from "../../src/tasks/castActors";
import Actor from "../../src/models/actor";
import BaseTask from "../../src/tasks/base";
import ReportingService from "../../src/services/reportingService";
import BuyScreenplayTask from "../../src/tasks/buyScreenplay";

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

  it('should schedule task', async () => {
    const screenplay = new Screenplay('', Genre.Action, 0, 1);
    const task = new BuyScreenplayTask(screenplay, userId);
    sinon.spy(task, 'process');

    await scheduler.scheduleTask(task, time);
    return expect(task.process).to.have.been.calledWith(stateService);
  });
});