import { v4 as uuid } from 'uuid';

enum SetSize {
  small,
  medium,
  large
}

enum SetType {
  internal,
  external
}

class Filmset {
  readonly id: String;
  readonly size: SetSize;
  readonly type: SetType;

  constructor(size: SetSize, type: SetType) {
    this.id = uuid();
    this.size = size;
    this.type = type;
  }
}

export {SetSize, SetType, Filmset}