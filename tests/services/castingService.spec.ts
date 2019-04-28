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
import AddActorsToUserPoolTask from '../../src/tasks/addActorsToUserPool';
import Actor from '../../src/models/actor';
import ActorFactory from '../../src/factories/actorFactory';
import ReportingService from '../../src/services/reportingService';

describe('The casting service', () => {
  it('should start process to find lead actors', async () => {
    const userId = 'some-user-id';
    const time = { ms: 1, level: 1 };
    const actors = [new Actor('some-actor-id', 'some name', 0)];
    const task = new AddActorsToUserPoolTask(actors, userId);
    const screenplay = new Screenplay('some-screenplay-id', Genre.Action, 0, 1);

    const actorFactory = new ActorFactory();
    const stateService = new StateService();
    const reportingService = new ReportingService();
    const scheduler = new SchedulingService(stateService, reportingService);
    const castingService = new CastingService(scheduler, actorFactory);
    sinon.stub(actorFactory, 'castActors').returns(actors);
    sinon.stub(scheduler, 'scheduleTask').returns(Promise.resolve(null));

    await castingService.findLeadingActors(screenplay, userId, time);
    return expect(scheduler.scheduleTask).to.have.been.calledWith(task);
  });
});