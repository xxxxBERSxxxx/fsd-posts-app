import { useParams } from "react-router-dom";
import PostCard from "../entities/post/ui/PostCard";
import CommentList from "../widgets/CommentList/ui/CommentList";
import { usePost } from '../entities/post/model/usePost';

const PostDetailsPage = () =>{
    const {id} = useParams <{id: string}>();
const postId = Number(id);
const {post, isLoading} = usePost(postId);

if(isLoading) return <div>Загрузка...</div>;
if(!post) return <div>Пост не найден</div>;

return (
    <div>
        <PostCard id={post.id} title={post.title} body={post.body} />
        <CommentList postId={postId} />
    </div>
);
};

export default PostDetailsPage;


