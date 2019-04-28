import BaseTask from "./baseTask";
import Task from "./task";
import Scene from "../scene";

class FilmSceneTask implements BaseTask {
  userId: string;
  name: Task;
  scene: Scene;

  constructor(scene: Scene, userId: string) {
    this.name = Task.filmScene;
    this.scene = scene;
    this.userId = userId;
  }
}

export default FilmSceneTask;