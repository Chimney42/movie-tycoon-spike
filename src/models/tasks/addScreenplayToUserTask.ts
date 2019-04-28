import BaseTask from "./baseTask";
import Screenplay from "../screenplay";
import TaskName from "./name";

class AddScreenplayToUserTask implements BaseTask {
  name: TaskName;
  userId: string;
  screenplay: Screenplay

  constructor(screenplay: Screenplay, userId: string) {
    this.name = TaskName.addScreenplayToUser;
    this.userId = userId;
    this.screenplay = screenplay;
  };
}

export default AddScreenplayToUserTask;