import { filterCommentSchema } from '../lib/schema';
import { getComments } from '../services/axios';
import { Comment } from '../types/comment';
import { Middleware } from '../types/koa';

const filter = (comments: Comment[], query: string) => {
  const fields = ['email', 'name', 'body'];

  if (query) {
    return fields
      .map((x) => comments.filter((y: any) => y[x].includes(query)))
      .flat();
  }
  return comments;
};

export const filterCommentsHandler: Middleware = async (ctx) => {
  const { q, limit } = filterCommentSchema.validateSync(ctx.query);

  const comments = await getComments();

  ctx.body = filter(comments, q).slice(0, limit);
};
