import { Filmset } from './filmset';
import Actor from './actor';

class Scene {
  readonly id: string;
  readonly set: Filmset;
  leadingActors: Actor[];
  supportingActors: Actor[];
  backgroundActors: Actor[];

  constructor(id: string, set: Filmset, leadingActors: Actor[], supportingActors: Actor[], backgroundActors: Actor[]) {
    this.id = id;
    this.set = set;
    this.leadingActors = leadingActors;
    this.supportingActors = supportingActors;
    this.backgroundActors = backgroundActors;
  }
}

export default Scene;