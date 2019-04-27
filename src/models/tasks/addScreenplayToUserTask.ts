import BaseTask from "./baseTask";
import Screenplay from "../screenplay";

interface AddScreenplayToUserTask extends BaseTask {
  screenplay: Screenplay
}

export default AddScreenplayToUserTask;