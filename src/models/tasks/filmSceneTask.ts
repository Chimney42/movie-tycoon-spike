import BaseTask from "./baseTask";
import TaskName from "./name";
import Scene from "../scene";

class FilmSceneTask implements BaseTask {
  userId: string;
  name: TaskName;
  scene: Scene;

  constructor(scene: Scene, userId: string) {
    this.name = TaskName.filmScene;
    this.scene = scene;
    this.userId = userId;
  }
}

export default FilmSceneTask;