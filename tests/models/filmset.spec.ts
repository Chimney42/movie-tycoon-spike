import {SetSize, SetType, Filmset} from '../../src/models/filmset';
import { expect } from 'chai';

describe('A filmset', () => {
  it('should have an id, size and type', () => {
    const id = 2;
    const size = SetSize.large;
    const type = SetType.internal;
    const set = new Filmset(id, size, type);

    expect(set.id).to.equal(id);
    expect(set.size).to.equal(size);
    expect(set.type).to.equal(type);
  })
})