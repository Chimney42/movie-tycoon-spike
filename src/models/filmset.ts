enum SetSize {
  small,
  medium,
  large
}

enum SetType {
  internal,
  external
}

interface Filmset {
  readonly id: String;
  readonly size: SetSize;
  readonly type: SetType;
}

export {SetSize, SetType, Filmset}