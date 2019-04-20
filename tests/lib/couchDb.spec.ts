import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
chai.use(sinonChai);

import Client from "davenport";
import {UserDoc, CouchDb} from '../../src/lib/couchDb';
import Genre from '../../src/models/genre';
import Screenplay from '../../src/models/screenplay';

describe('The couchDB client', () => {
  it('should add screenplay to user doc', async () => {
    const clientStub: Client<UserDoc> = new Client<UserDoc>('', '');
    sinon.stub(clientStub, 'get');
    const couchDBClient = new CouchDb(clientStub);

    const userId = 'fnwo432e-fi2423noe';
    const screenplay = new Screenplay(Genre.Action);
    await couchDBClient.addScreenplayToUser(screenplay, userId);

    expect(clientStub.get).to.have.been.calledWith(userId);
  });
})
