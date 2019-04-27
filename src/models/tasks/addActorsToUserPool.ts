import BaseTask from "./baseTask";
import Task from "./task";
import Actor from "../actor";

class AddActorsToUserPoolTask implements BaseTask {
  name: Task;
  userId: string;
  actors: Actor[];

  constructor(actors: Actor[], userId: string) {
    this.name = Task.addActorsToUserPool;
    this.actors = actors;
    this.userId = userId;
  }
}

export default AddActorsToUserPoolTask;