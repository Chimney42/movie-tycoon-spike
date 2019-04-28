import Screenplay from "../models/screenplay";
import TaskTime from "../tasks/time";
import SchedulingService from "./schedulingService";
import AddActorsToUserPoolTask from "../tasks/addActorsToUserPool";
import ActorFactory from "../factories/actorFactory";

class CastingService {
  scheduler: SchedulingService;
  actorFactory: ActorFactory;

  constructor(scheduler: SchedulingService, actorFactory: ActorFactory) {
    this.scheduler = scheduler;
    this.actorFactory = actorFactory;
  }

  findLeadingActors(screenplay: Screenplay, userId: string, time: TaskTime): Promise<null> {
    const actors = this.actorFactory.castActors(screenplay.rating, 2);
    const task = new AddActorsToUserPoolTask(actors, userId);
    return this.scheduler.scheduleTask(task, time.ms);
  }
}

export default CastingService;