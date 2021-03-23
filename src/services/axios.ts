import { createAxios } from '../lib/axios';
import { Comment } from '../types/comment';
import { Post } from '../types/post';

const axios = createAxios({ baseURL: 'https://jsonplaceholder.typicode.com' });

const axiosGet = async <M>(path: string) => {
  const { data } = await axios.get<M>(path);
  return data;
};

export const getComments = () => axiosGet<Comment[]>('/comments');
export const getPostById = (id: number) => axiosGet<Post>(`/posts/${id}`);
export const getPost = () => axiosGet<Post[]>('/posts');
