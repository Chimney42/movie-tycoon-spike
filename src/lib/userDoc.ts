import {MaybeDocument} from 'nano'
import Screenplay from '../models/screenplay';

interface UserDoc extends MaybeDocument {
  userId: String,
  screenplays: Screenplay[]
}

export default UserDoc;