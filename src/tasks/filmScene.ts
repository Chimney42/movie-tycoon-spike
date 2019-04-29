import BaseTask from "./base";
import TaskName from "./name";
import Scene from "../models/scene";
import StateService from "../services/stateService";

class FilmSceneTask implements BaseTask {
  stateService: StateService;
  userId: string;
  name: TaskName;
  scene: Scene;

  constructor(scene: Scene, userId: string, stateService: StateService) {
    this.name = TaskName.filmScene;
    this.scene = scene;
    this.userId = userId;
    this.stateService = stateService;
  }

  process() {
    this.stateService.updateSceneForUser(this.scene, this.userId);
  }
}

export default FilmSceneTask;