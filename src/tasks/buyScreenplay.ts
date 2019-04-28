import BaseTask from "./base";
import Screenplay from "../models/screenplay";
import TaskName from "./name";
import StateService from "../services/stateService";

class BuyScreenplayTask implements BaseTask {
  stateService: StateService;
  name: TaskName;
  userId: string;
  screenplay: Screenplay

  constructor(screenplay: Screenplay, userId: string, stateService: StateService) {
    this.name = TaskName.addScreenplayToUser;
    this.userId = userId;
    this.screenplay = screenplay;
    this.stateService = stateService;
  };

  process() {
    this.stateService.addScreenplayToUser(this.screenplay, this.userId);
  };
}

export default BuyScreenplayTask;