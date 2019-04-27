import BaseTask from "../models/tasks/baseTask";
import StateService from "./stateService";
import Task from "../models/tasks/task";
import AddScreenplayToUserTask from "../models/tasks/addScreenplayToUserTask";
import Screenplay from "../models/screenplay";
import AddActorsToUserPoolTask from "../models/tasks/addActorsToUserPool";
import ReportingService from "./reportingService";

class SchedulingService {
  stateService: StateService;
  reportingService: ReportingService;

  constructor(stateService: StateService, reportingService: ReportingService) {
    this.stateService = stateService;
    this.reportingService = reportingService;
  }

  scheduleTask(task: BaseTask, timePassed: number): Promise<null> {
    let fn = () => {};
    return new Promise((resolve, reject) => {
      if (task instanceof AddScreenplayToUserTask) {
        fn = () => { 
          this.stateService.addScreenplayToUser(task.screenplay, task.userId);
        }
      } else if (task instanceof AddActorsToUserPoolTask) {
        fn = () => {
          this.stateService.addActorsToUserPool(task.actors, task.userId);
        }
      } else {
        reject(`Task unkown: ${task.name}`)
      }

      setTimeout(() => {
        fn();
        const report = {userId: task.userId, name: task.name} as BaseTask;
        this.reportingService.dispatch(report);
        resolve();
      }, timePassed)
    });
  }
}

export default SchedulingService;