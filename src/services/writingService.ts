import Time from "../models/time";
import Genre from "../models/genre";
import StateService from "./stateService";
import ScreenplayFactory from "../factories/screenplayFactory";
import SchedulingService from "./schedulingService";
import AddScreenplayToUserTask from "../models/tasks/addScreenplayToUserTask";
import Task from "../models/tasks/task";

class WritingService {
  stateService: StateService;
  screenplayFactory: ScreenplayFactory;
  scheduler: SchedulingService;

  constructor(stateService: StateService, screenplayFactory: ScreenplayFactory, scheduler: SchedulingService){
    this.stateService = stateService;
    this.screenplayFactory = screenplayFactory;
    this.scheduler = scheduler;
  }

  createNewScreenplayForUser(writerId: string, time: Time, genre: Genre, userId: string) {
    const writer = this.stateService.getWriterById(writerId, userId);
    const screenplay = this.screenplayFactory.writeScreenplay(writer, time, genre);
    const task = new AddScreenplayToUserTask(userId, screenplay);
    
    this.scheduler.scheduleTask(task);
  }
}

export default WritingService;