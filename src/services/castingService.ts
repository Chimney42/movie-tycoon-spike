import Screenplay from "../models/screenplay";
import TaskTime from "../tasks/time";
import SchedulingService from "./schedulingService";
import CastActorsTask from "../tasks/castActors";
import ActorFactory from "../factories/actorFactory";
import StateService from "./stateService";

class CastingService {
  scheduler: SchedulingService;
  actorFactory: ActorFactory;
  stateService: StateService;

  constructor(scheduler: SchedulingService, actorFactory: ActorFactory, stateService: StateService) {
    this.scheduler = scheduler;
    this.actorFactory = actorFactory;
    this.stateService = stateService;
  }

  findLeadingActors(screenplay: Screenplay, userId: string, time: TaskTime): Promise<null> {
    const task = new CastActorsTask(screenplay, userId, this.actorFactory, this.stateService);
    return this.scheduler.scheduleTask(task, time.ms);
  }
}

export default CastingService;