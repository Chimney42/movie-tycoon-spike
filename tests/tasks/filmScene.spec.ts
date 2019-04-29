import chai, {expect} from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
chai.use(sinonChai);

import FilmSceneTask from "../../src/tasks/filmScene";
import Scene from "../../src/models/scene";
import { Filmset, SetSize, SetType } from "../../src/models/filmset";
import StateService from "../../src/services/stateService";

describe('The FilmScene task', () => {
  it('should update scene for user', () => {
    const userId = 'some-user-id';
    const scene = new Scene('some-scene-id', new Filmset('some-set-id', SetSize.large, SetType.external), [], [], []);

    const stateService = new StateService();
    sinon.spy(stateService, 'updateSceneForUser')
    const task = new FilmSceneTask(scene, userId, stateService);

    task.process();
    expect(stateService.updateSceneForUser).to.have.been.calledWith(scene, userId);
  });
});