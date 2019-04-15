import {SetSize, SetType, Filmset} from '../../src/models/filmset';
import { expect } from 'chai';

describe('A filmset', () => {
  const size = SetSize.large;
  const type = SetType.internal;
  let set: Filmset;

  beforeEach(() => {
    set = new Filmset(size, type);
  });

  it('should have an id', () => {
    expect(set.id).to.be;

  })

  it('should take a size and type on creation', () => {
    expect(set.size).to.equal(size);
    expect(set.type).to.equal(type);
  })
})