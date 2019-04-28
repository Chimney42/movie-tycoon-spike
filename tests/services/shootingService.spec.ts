import chai, {expect} from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
chai.use(sinonChai);

import Scene from '../../src/models/scene';
import ShootingService from "../../src/services/shootingService";
import { Filmset, SetSize, SetType } from '../../src/models/filmset';
import SchedulingService from '../../src/services/schedulingService';
import StateService from '../../src/services/stateService';
import ReportingService from '../../src/services/reportingService';
import FilmSceneTask from '../../src/tasks/filmScene';

describe('The shooting service', () => {
  it('should start process to shoot a scene', () => {
    const userId = 'some-user-id';
    const set = new Filmset("", SetSize.large, SetType.external)
    const scene: Scene = new Scene('some-scene-id', set, [], [], []);
    const time = { ms: 0, level: 1 };
    const task = new FilmSceneTask(scene, userId);

    const stateService = new StateService();
    const reportingService = new ReportingService();
    const schedulingService = new SchedulingService(stateService, reportingService);
    const shootingService = new ShootingService(schedulingService);
    sinon.spy(schedulingService, 'scheduleTask');
    
    shootingService.filmScene(scene, userId, time);
    expect(schedulingService.scheduleTask).to.have.been.calledWith(task, time.ms);
  });
});