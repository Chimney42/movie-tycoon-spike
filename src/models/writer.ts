class Writer {
  id: string;
  name: string;
  level: number;

  constructor(id: string, name: string, level: number) {
    this.id = id;
    this.name = name;
    this.level = level;
  }
}

export default Writer;