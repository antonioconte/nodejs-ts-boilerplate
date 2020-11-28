import { makePost } from './factory/makePost';
import { Post, EmptyPost, PostWithText, PostWithNumber } from './entities/Post';

declare type TypePost = EmptyPost | PostWithText | PostWithNumber;

/*Factory*/
let post_0: TypePost = makePost('test'); // is a PostValidText type
let post_1: Post = makePost(); // is a PostEmpty type
let post_2: Post = makePost(1121); // is a PostValidText type

if (post_0 instanceof PostWithText) {
  console.log((<PostWithText>post_0).getBody());
}
