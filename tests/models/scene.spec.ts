import Scene from '../../src/models/scene';
import {SetSize, SetType, Filmset} from '../../src/models/filmset';
import { expect } from 'chai';

describe('A scene', () => {
  let scene: Scene;
  let set: Filmset;
  beforeEach(() => {
    set = new Filmset(SetSize.large, SetType.external);
    scene = new Scene(set);
  });

  it('should have an id', () => {
    expect(scene.id).to.be;
  });

  it('should take a set on creation', () => {
    expect(scene.set).to.equal(set);
  });
});