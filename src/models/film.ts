import { v4 as uuid } from 'uuid';

class Film {
  readonly id: String;

  constructor() {
    this.id = uuid();
  }
}

export default Film;