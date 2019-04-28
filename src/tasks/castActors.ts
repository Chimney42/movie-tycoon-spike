import BaseTask from "./base";
import TaskName from "./name";
import Actor from "../models/actor";
import StateService from "../services/stateService";

class CastActorsTask implements BaseTask {
  name: TaskName;
  userId: string;
  actors: Actor[];

  constructor(actors: Actor[], userId: string) {
    this.name = TaskName.addActorsToUserPool;
    this.actors = actors;
    this.userId = userId;
  }

  process(stateService: StateService) {
    
  }
}

export default CastActorsTask;