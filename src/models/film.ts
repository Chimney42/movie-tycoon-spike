import Screenplay from "./screenplay";
import Scene from "./scene";
import Actor from "./actor";

class Film {
  id: string;
  screenplay: Screenplay | null;
  leadingActors: Actor[];
  supportingActors: Actor[];
  backgroundActors: Actor[];
  scenes: Scene[];

  constructor(id: string) {
    this.id = id;
    this.screenplay = null;
    this.leadingActors = [];
    this.supportingActors = [];
    this.backgroundActors = [];
    this.scenes = [];
  }
};

export default Film;