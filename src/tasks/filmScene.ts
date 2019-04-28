import BaseTask from "./base";
import TaskName from "./name";
import Scene from "../models/scene";
import StateService from "../services/stateService";

class FilmSceneTask implements BaseTask {
  userId: string;
  name: TaskName;
  scene: Scene;

  constructor(scene: Scene, userId: string) {
    this.name = TaskName.filmScene;
    this.scene = scene;
    this.userId = userId;
  }

  process() {}
}

export default FilmSceneTask;