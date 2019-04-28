import BaseTask from "./base";
import TaskName from "./name";
import StateService from "../services/stateService";
import Screenplay from "../models/screenplay";
import ActorFactory from "../factories/actorFactory";

class CastActorsTask implements BaseTask {
  name: TaskName;
  userId: string;
  screenplay: Screenplay;

  actorFactory: ActorFactory;
  stateService: StateService;

  constructor(screenplay: Screenplay, userId: string, actorFactory: ActorFactory, stateService: StateService) {
    this.name = TaskName.addActorsToUserPool;
    this.screenplay = screenplay;
    this.userId = userId;
    this.actorFactory = actorFactory;
    this.stateService = stateService;
  }

  process() {
    const actors = this.actorFactory.castActors(this.screenplay.rating, 1);
    this.stateService.addActorsToUserPool(actors, this.userId);
  }
}

export default CastActorsTask;