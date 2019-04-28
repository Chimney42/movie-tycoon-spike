import BaseTask from "./base";
import Screenplay from "../models/screenplay";
import TaskName from "./name";
import StateService from "../services/stateService";

class BuyScreenplayTask implements BaseTask {
  name: TaskName;
  userId: string;
  screenplay: Screenplay

  constructor(screenplay: Screenplay, userId: string) {
    this.name = TaskName.addScreenplayToUser;
    this.userId = userId;
    this.screenplay = screenplay;
  };

  process(stateService: StateService) {
    stateService.addScreenplayToUser(this.screenplay, this.userId);
  };
}

export default BuyScreenplayTask;