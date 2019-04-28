import chai, {expect} from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
chai.use(sinonChai);

import CastingService from "../../src/services/castingService";
import TaskTime from "../../src/tasks/time";
import Screenplay from "../../src/models/screenplay";
import Genre from "../../src/models/genre";
import SchedulingService from "../../src/services/schedulingService";
import StateService from "../../src/services/stateService";
import CastActorsTask from '../../src/tasks/castActors';
import Actor from '../../src/models/actor';
import ActorFactory from '../../src/factories/actorFactory';
import ReportingService from '../../src/services/reportingService';

describe('The casting service', () => {
  it('should start process to find lead actors', async () => {
    const userId = 'some-user-id';
    const time = { ms: 1, level: 1 };
    const screenplay = new Screenplay('some-screenplay-id', Genre.Action, 0, 1);

    const reportingService = new ReportingService();
    const scheduler = new SchedulingService(reportingService);
    const actorFactory = new ActorFactory();
    const stateService = new StateService();
    const castingService = new CastingService(scheduler, actorFactory, stateService);
    const task = new CastActorsTask(screenplay, userId, actorFactory, stateService);
    sinon.stub(scheduler, 'scheduleTask').returns(Promise.resolve(null));

    await castingService.findLeadingActors(screenplay, userId, time);
    return expect(scheduler.scheduleTask).to.have.been.calledWith(task);
  });
});