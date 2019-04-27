import Screenplay from "../models/screenplay";
import Time from "../models/time";
import Actor from "../models/actor";
import SchedulingService from "./schedulingService";
import AddActorsToUserPoolTask from "../models/tasks/addActorsToUserPool";
import ActorFactory from "../factories/actorFactory";

class CastingService {
  scheduler: SchedulingService;
  actorFactory: ActorFactory;

  constructor(scheduler: SchedulingService, actorFactory: ActorFactory) {
    this.scheduler = scheduler;
    this.actorFactory = actorFactory;
  }

  findLeadingActors(screenplay: Screenplay, userId: string, time: Time): Promise<null> {
    const actors = this.actorFactory.castActors(screenplay.rating, 2);
    const task = new AddActorsToUserPoolTask(actors, userId);
    return this.scheduler.scheduleTask(task, time.passed);
  }
}

export default CastingService;