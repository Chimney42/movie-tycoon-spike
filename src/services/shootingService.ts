import Scene from "../models/scene";
import TaskTime from "../tasks/time";
import SchedulingService from "./schedulingService";
import FilmSceneTask from "../tasks/filmScene";
import StateService from "./stateService";

class ShootingService {
  schedulingService: SchedulingService;
  stateService: StateService;

  constructor(schedulingService: SchedulingService, stateService: StateService) {
    this.schedulingService = schedulingService;
    this.stateService = stateService;
  }

  filmScene(scene: Scene, userId: string, time: TaskTime) {
    const task = new FilmSceneTask(scene, userId, this.stateService);
    this.schedulingService.scheduleTask(task, time.ms);
  };
}

export default ShootingService;