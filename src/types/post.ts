export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface TopPost {
  post_id: number;
  post_title: string;
  post_body: string;
  total_number_of_comments: number;
}

export interface TopPostQuery {
  limit: number;
}
