import {MaybeDocument} from 'nano'
import Screenplay from '../models/screenplay';

interface UserDoc extends MaybeDocument {
  userId: string,
  pool: {
    screenplays: Screenplay[],
  },
  owned: {
    screenplays: Screenplay[]
  }
}

export default UserDoc;