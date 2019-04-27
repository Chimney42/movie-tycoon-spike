import sinon from "sinon"
import sinonChai = require("sinon-chai");
import chai, {expect} from 'chai';
chai.use(sinonChai);

import WritingService from "../../src/services/writingService";
import SchedulingService from "../../src/services/schedulingService";
import StateService from "../../src/services/stateService";
import ScreenplayFactory from "../../src/factories/screenplayFactory";
import Screenplay from '../../src/models/screenplay';
import Writer from "../../src/models/writer";
import Genre from "../../src/models/genre";
import AddScreenplayToUserTask from "../../src/models/tasks/addScreenplayToUserTask";
import Task from "../../src/models/tasks/task";


describe("The writing service", () => {
  const userId = 'some-user-id';
  const genre = Genre.Action;
  const screenplay = new Screenplay('some-screenplay-id', genre, 1, 1, 0, 0);
  const stateService = new StateService();
  const scheduler = new SchedulingService(stateService);
  const screenplayFactory = new ScreenplayFactory();
  let writingService: WritingService;

  beforeEach(() => {
    writingService = new WritingService(stateService, screenplayFactory, scheduler);
  })

  it('should start process to create a new screenplay for user', async () => {
    const writerId = 'some-writer-id';
    const writer = new Writer(writerId, 'Foo Bar', 1);
    const time = { passed: 10, level: 1 };
    const task = new AddScreenplayToUserTask(screenplay, userId);
    
    sinon.stub(stateService, 'getWriterById').returns(writer);
    sinon.stub(screenplayFactory, 'writeScreenplay').returns(screenplay);
    sinon.stub(scheduler, 'scheduleTask').returns(Promise.resolve(null));

    await writingService.writeScreenplay(writerId, time, genre, userId);
    expect(stateService.getWriterById).to.have.been.calledWith(writerId);
    expect(screenplayFactory.writeScreenplay).to.have.been.calledWith(writer, time, genre);
    expect(scheduler.scheduleTask).to.have.been.calledWith(task);
  });

  it('should buy screenplay', () => {
    sinon.spy(stateService, 'addScreenplayToUser');

    writingService.buyScreenplay(screenplay, userId);

    expect(stateService.addScreenplayToUser).to.have.been.calledWith(screenplay, userId);
  });
});