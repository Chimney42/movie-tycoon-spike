import chai, {expect} from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
chai.use(sinonChai);

import CastingService from "../../src/services/castingService";
import Time from "../../src/models/time";
import Screenplay from "../../src/models/screenplay";
import Genre from "../../src/models/genre";
import SchedulingService from "../../src/services/schedulingService";
import StateService from "../../src/services/stateService";
import AddActorsToUserPoolTask from '../../src/models/tasks/addActorsToUserPool';
import Actor from '../../src/actor';
import ActorFactory from '../../src/factories/actorFactory';

describe('The casting service', () => {
  it('should start process to find actors', async () => {
    const userId = 'some-user-id';
    const time = {
      passed: 1,
      level: 1
    } as Time;
    const actors = [new Actor('some-actor-id', 'some name', 0)];
    const task = new AddActorsToUserPoolTask(actors, userId);
    const screenplay = new Screenplay('some-screenplay-id', Genre.Action, 0, 0, 0, 0);

    const actorFactory = new ActorFactory();
    const stateService = new StateService();
    const scheduler = new SchedulingService(stateService);
    const castingService = new CastingService(scheduler, actorFactory);
    sinon.stub(actorFactory, 'castActors').returns(actors);
    sinon.stub(scheduler, 'scheduleTask').returns(Promise.resolve(null));

    await castingService.findActors(screenplay, userId, time);
    expect(scheduler.scheduleTask).to.have.been.calledWith(task);
  });
});