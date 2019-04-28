import Scene from "../models/scene";
import Time from "../models/time";
import SchedulingService from "./schedulingService";
import FilmSceneTask from "../models/tasks/filmSceneTask";

class ShootingService {
  schedulingService: SchedulingService;

  constructor(schedulingService: SchedulingService) {
    this.schedulingService = schedulingService;
  }

  filmScene(scene: Scene, userId: string, time: Time) {
    const task = new FilmSceneTask(scene, userId);
    this.schedulingService.scheduleTask(task, time.passed);
  };
}

export default ShootingService;