import * as yup from 'yup';
import { Comment } from '../types/comment';
import { TopPostQuery } from '../types/post';

export const filterCommentSchema: yup.SchemaOf<Comment> = yup.object({
  postId: yup.number().nullable().notRequired(),
  id: yup.number().notRequired(),
  name: yup.string().nullable().notRequired(),
  email: yup.string().nullable().notRequired().email(),
  body: yup.string().nullable().notRequired()
});

export const topPostSchema: yup.SchemaOf<TopPostQuery> = yup.object({
  limit: yup.number().nullable().notRequired().default(10)
});
