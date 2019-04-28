import BaseTask from "../tasks/base";
import StateService from "./stateService";
import BuyScreenplay from "../tasks/buyScreenplay";
import AddActorsToUserPoolTask from "../tasks/castActors";
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
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        task.process(this.stateService);
        const report = {userId: task.userId, name: task.name} as BaseTask;
        this.reportingService.dispatch(report);
        resolve();
      }, timeInMs)
    });
  }
}

export default SchedulingService;