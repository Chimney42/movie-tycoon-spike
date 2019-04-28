import TaskTime from "../tasks/time";
import Genre from "../models/genre";
import StateService from "./stateService";
import ScreenplayFactory from "../factories/screenplayFactory";
import SchedulingService from "./schedulingService";
import BuyScreenplay from "../tasks/buyScreenplay";
import Screenplay from "../models/screenplay";

class WritingService {
  stateService: StateService;
  screenplayFactory: ScreenplayFactory;
  scheduler: SchedulingService;

  constructor(stateService: StateService, screenplayFactory: ScreenplayFactory, scheduler: SchedulingService){
    this.stateService = stateService;
    this.screenplayFactory = screenplayFactory;
    this.scheduler = scheduler;
  }

  writeNewScreenplay(writerId: string, time: TaskTime, genre: Genre, userId: string): Promise<null> {
    const writer = this.stateService.getWriterById(writerId, userId);
    const screenplay = this.screenplayFactory.writeScreenplay(writer, time, genre);
    const task = new BuyScreenplay(screenplay, userId);
    
    return this.scheduler.scheduleTask(task, time.ms);
  }

  buyScreenplay(screenplay: Screenplay, userId: string) {
    this.stateService.addScreenplayToUser(screenplay, userId);
  }
}

export default WritingService;