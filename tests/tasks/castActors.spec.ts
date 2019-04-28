import chai, {expect} from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
chai.use(sinonChai);

import CastActorsTask from "../../src/tasks/castActors";
import Actor from "../../src/models/actor";
import StateService from "../../src/services/stateService";
import ActorFactory from '../../src/factories/actorFactory';
import Screenplay from '../../src/models/screenplay';
import Genre from '../../src/models/genre';

describe('The CastActors task', () => {
  const userId = 'some-user-id';
  const screenplay = new Screenplay('some-screenplay-id', Genre.Action, 1, 1);
  let actorFactory: ActorFactory;
  let stateService: StateService;
  let task: CastActorsTask;

  beforeEach(() => {
    actorFactory = new ActorFactory();
    stateService = new StateService();
    task = new CastActorsTask(screenplay, userId, actorFactory, stateService);
  });

  it('should get actors from actor factory', () => {  
    sinon.spy(actorFactory, 'castActors');
    
    task.process();
    expect(actorFactory.castActors).to.have.been.calledWith(screenplay.rating, 1);
  });

  it('should add actors to users pool', () => {
    const actors = [new Actor('some-actor-id', 'some name', 1)];

    sinon.stub(actorFactory, 'castActors').returns(actors);
    sinon.spy(stateService, 'addActorsToUserPool');
    
    task.process();
    expect(stateService.addActorsToUserPool).to.have.been.calledWith(actors, userId);
  });
});