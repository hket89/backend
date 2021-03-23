import * as yup from 'yup';

import { Comment } from '../types/comment';
import { TopPostQuery } from '../types/post';

export const filterCommentSchema: yup.SchemaOf<Comment> = yup.object({
  postId: yup.number().default(0),
  id: yup.number().default(0),
  name: yup.string().default(''),
  email: yup.string().default('').email(),
  body: yup.string().default('')
});

export const topPostSchema: yup.SchemaOf<TopPostQuery> = yup.object({
  limit: yup.number().notRequired().default(10)
});
