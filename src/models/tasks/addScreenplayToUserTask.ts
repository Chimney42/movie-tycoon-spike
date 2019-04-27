import BaseTask from "./baseTask";
import Screenplay from "../screenplay";
import Task from "./task";

class AddScreenplayToUserTask implements BaseTask {
  name: Task;
  userId: string;
  screenplay: Screenplay

  constructor(screenplay: Screenplay, userId: string) {
    this.name = Task.addScreenplayToUser;
    this.userId = userId;
    this.screenplay = screenplay;
  };
}

export default AddScreenplayToUserTask;