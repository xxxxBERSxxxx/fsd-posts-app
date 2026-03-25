import { useParams } from 'react-router-dom';
import PostCard from '../entities/post/ui/PostCard';
import CommentList from '../widgets/CommentList/ui/CommentList';
import { useGetPostByIdQuery } from '../entities/post/api/postsApi';

const PostDetailsPage = () => {
  const { id } = useParams<{ id: string }>();
  const postId = Number(id);
  const { data: post, isLoading, error } = useGetPostByIdQuery(postId);

  if (isLoading) return <div>Загрузка...</div>;
  if (error || !post) return <div>Пост не найден</div>;

  return (
    <div>
      <PostCard id={post.id} title={post.title} body={post.body} />
      <CommentList postId={postId} />
    </div>
  );
};

export default PostDetailsPage;