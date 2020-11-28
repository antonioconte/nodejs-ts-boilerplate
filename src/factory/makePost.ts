import { getRandomID } from '../utils/math';
import { EmptyPost, PostWithText, PostWithNumber } from '../entities/Post';

export function makePost(body = null) {
  let randomID = getRandomID();
  if (!body) return new EmptyPost(randomID);
  else if (Number.isInteger(body)) return new PostWithNumber(randomID, body);
  else return new PostWithText(randomID, body);
}
