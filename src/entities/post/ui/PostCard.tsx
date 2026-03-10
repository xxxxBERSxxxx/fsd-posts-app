import styles from './PostCard.module.css';

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
        </div>
    );
};

export default PostCard;


