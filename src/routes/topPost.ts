import { topPostSchema } from '../lib/schema';
import { getComments, getPostById } from '../services/axios';
import { Comment } from '../types/comment';
import { Middleware } from '../types/koa';
import { TopPost } from '../types/post';

interface PostGroup {
  [key: string]: Comment[];
}

const groupByPost = (comments: Comment[]) => {
  const results = comments.reduce((acc, crr) => {
    (acc[crr.postId] = acc[crr.postId] || []).push(crr);

    return acc;
  }, {} as PostGroup);

  return Object.values(results).sort((x, y) => {
    if (x.length === y.length) {
      return 0;
    }

    return x.length > y.length ? -1 : 1;
  });
};

const populatePost = (posts: Comment[][]) => {
  const promises = posts.map(async (x) => {
    const [first] = x;
    const post = await getPostById(first.postId);

    return {
      post_id: first.postId,
      post_title: post.title,
      post_body: post.body,
      total_number_of_comments: x.length
    } as TopPost;
  });

  return Promise.all(promises);
};

export const topPostHandler: Middleware = async (ctx) => {
  const { limit } = topPostSchema.validateSync(ctx.query);

  const comments = await getComments();
  const posts = groupByPost(comments);
  const topPost = await populatePost(posts.slice(0, limit));

  ctx.body = topPost;
};
