import { filterCommentSchema } from '../lib/schema';
import { getComments } from '../services/axios';
import { Comment } from '../types/comment';
import { Middleware } from '../types/koa';

const filter = (comments: Comment[], params: Comment) => {
  const { postId, id, name, email, body } = params;

  if (postId) {
    return comments.filter((x) => x.postId === postId);
  }

  if (id) {
    return comments.filter((x) => x.id === id);
  }

  if (name) {
    const lowerName = name.toLowerCase();

    return comments.filter((x) => x.name.toLowerCase().includes(lowerName));
  }

  if (email) {
    const lowerEmail = email.toLowerCase();

    return comments.filter((x) => x.email.toLowerCase() === lowerEmail);
  }

  if (body) {
    const lowerBody = body.toLowerCase();

    return comments.filter((x) => x.name.toLowerCase().includes(lowerBody));
  }

  return comments;
};

export const filterCommentsHandler: Middleware = async (ctx) => {
  const params = filterCommentSchema.validateSync(ctx.query);

  const comments = await getComments();

  ctx.body = filter(comments, params);
};
