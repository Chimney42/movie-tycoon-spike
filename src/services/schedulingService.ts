import BaseTask from "../models/tasks/baseTask";
import StateService from "./stateService";
import Task from "../models/tasks/task";
import AddScreenplayToUserTask from "../models/tasks/addScreenplayToUserTask";
import Screenplay from "../models/screenplay";
import AddActorsToUserPoolTask from "../models/tasks/addActorsToUserPool";

class SchedulingService {
  stateService: StateService;

  constructor(stateService: StateService) {
    this.stateService = stateService;
  }

  scheduleTask(task: BaseTask, timePassed: number): Promise<null> {
    let fn = () => {};
    return new Promise((resolve, reject) => {
      if (task instanceof AddScreenplayToUserTask) {
        fn = () => { 
          this.stateService.addScreenplayToUser(task.screenplay, task.userId); 
          resolve();
        }
      } else if (task instanceof AddActorsToUserPoolTask) {
        fn = () => {
          this.stateService.addActorsToUserPool(task.actors, task.userId);
          resolve();
        }
      } else {
        reject(`Task unkown: ${task.name}`)
      }

      setTimeout(fn, timePassed)
    });
  }
}

export default SchedulingService;