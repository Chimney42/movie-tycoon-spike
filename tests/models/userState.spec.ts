import { expect } from 'chai';

import UserState from '../../src/models/userState';
import UserDoc from '../../src/lib/userDoc';


describe('The user state', () => {
  it('should take the userdoc on creation', () => {
    const doc = {} as UserDoc;
    const state = new UserState(doc);

    expect(state.doc).to.equal(doc);
  });
});