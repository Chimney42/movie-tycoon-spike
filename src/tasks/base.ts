import TaskName from "./name";
import StateService from "../services/stateService";

interface BaseTask {
  name: TaskName,
  userId: string
  process: (stateService: StateService) => void;
};

export default BaseTask;