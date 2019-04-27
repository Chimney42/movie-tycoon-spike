import BaseTask from "../models/tasks/baseTask";
import StateService from "./stateService";
import Task from "../models/tasks/task";
import AddScreenplayToUserTask from "../models/tasks/addScreenplayToUserTask";
import Screenplay from "../models/screenplay";

class SchedulingService {
  stateService: StateService;

  constructor(stateService: StateService) {
    this.stateService = stateService;
  }

  scheduleTask(task: BaseTask, timePassed: number) {
    let fn = () => {};
    if (task instanceof AddScreenplayToUserTask) {
      fn = () => { this.stateService.addScreenplayToUser(task.screenplay, task.userId); }
    }
    setTimeout(fn, timePassed)
  }
}

export default SchedulingService;