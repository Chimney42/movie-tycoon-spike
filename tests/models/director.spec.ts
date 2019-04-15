import Director from '../../src/models/director';
import { expect } from 'chai';

describe('A director', () => {
  it('should have an id and a name', () => {
    const id = 231;
    const name = 'Foo Bar';
    const director = new Director(id, name);

    expect(director.id).to.equal(id);
    expect(director.name).to.equal(name);
  })
});