import * as yup from 'yup';

import { CommentFilter } from '../types/comment';
import { TopPostQuery } from '../types/post';

const baseFilter = yup.object({
  limit: yup.number().notRequired().default(10)
});

export const filterCommentSchema: yup.SchemaOf<CommentFilter> = baseFilter.shape(
  {
    q: yup.string().default('')
  }
);

export const topPostSchema: yup.SchemaOf<TopPostQuery> = baseFilter;
