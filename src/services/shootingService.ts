import Scene from "../models/scene";
import TaskTime from "../tasks/time";
import SchedulingService from "./schedulingService";
import FilmSceneTask from "../tasks/filmScene";

class ShootingService {
  schedulingService: SchedulingService;

  constructor(schedulingService: SchedulingService) {
    this.schedulingService = schedulingService;
  }

  filmScene(scene: Scene, userId: string, time: TaskTime) {
    const task = new FilmSceneTask(scene, userId);
    this.schedulingService.scheduleTask(task, time.ms);
  };
}

export default ShootingService;