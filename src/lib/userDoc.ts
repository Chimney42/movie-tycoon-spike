import {MaybeDocument} from 'nano'
import Writer from '../models/writer';

interface UserDoc extends MaybeDocument {
  userId: string
}

export default UserDoc;