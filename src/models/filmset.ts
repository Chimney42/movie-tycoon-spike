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
  readonly id: string;
  readonly size: SetSize;
  readonly type: SetType;

  constructor(id: string, size: SetSize, type: SetType) {
    this.id = id;
    this.size = size;
    this.type = type;
  }
}

export {SetSize, SetType, Filmset}