import BaseTask from "../tasks/base";
import StateService from "./stateService";
import AddScreenplayToUserTask from "../tasks/addScreenplayToUser";
import AddActorsToUserPoolTask from "../tasks/addActorsToUserPool";
import ReportingService from "./reportingService";
import FilmSceneTask from "../tasks/filmScene";

class SchedulingService {
  stateService: StateService;
  reportingService: ReportingService;

  constructor(stateService: StateService, reportingService: ReportingService) {
    this.stateService = stateService;
    this.reportingService = reportingService;
  }

  scheduleTask(task: BaseTask, timeInMs: number): Promise<null> {
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
      } else if (task instanceof FilmSceneTask) {
        
      } else {
        reject(`Task unkown: ${task.name}`)
      }

      setTimeout(() => {
        fn();
        const report = {userId: task.userId, name: task.name} as BaseTask;
        this.reportingService.dispatch(report);
        resolve();
      }, timeInMs)
    });
  }
}

export default SchedulingService;