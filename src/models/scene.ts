import { v4 as uuid } from 'uuid';
import { Filmset } from './filmset';

class Scene {
  readonly id: String;
  readonly set: Filmset;

  constructor(set: Filmset) {
    this.id = uuid();
    this.set = set;
  }
}

export default Scene;