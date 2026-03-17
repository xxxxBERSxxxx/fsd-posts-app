import styles from './PostCard.module.css';
import CommentList from '../../../widgets/CommentList/ui/CommentList';

interface PostCardProps {
  id: number;
  title: string;
  body: string;
}

const PostCard: React.FC<PostCardProps> = ({id, title, body})=>{
    return(
        <div className={styles.card}>
      <h2>{title}</h2>
      <p>{body}</p>
      <small>Post ID: {id}</small> 
       <CommentList postId={id} />     
        </div>
    );
};

export default PostCard;


