export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface TopPost {
  postId: number;
  postTitle: string;
  postBody: string;
  totalNumberOfComments: number;
}
