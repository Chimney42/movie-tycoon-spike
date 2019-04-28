import BaseTask from "./baseTask";
import TaskName from "./name";
import Actor from "../actor";

class AddActorsToUserPoolTask implements BaseTask {
  name: TaskName;
  userId: string;
  actors: Actor[];

  constructor(actors: Actor[], userId: string) {
    this.name = TaskName.addActorsToUserPool;
    this.actors = actors;
    this.userId = userId;
  }
}

export default AddActorsToUserPoolTask;