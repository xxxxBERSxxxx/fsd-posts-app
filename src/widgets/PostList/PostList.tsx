import PostCard from '../../entities/post/ui/PostCard';
import styles from './PostList.module.css';

const mockPosts = [
  { id: 1, title: 'Первый пост', body: 'Содержимое первого поста...' },
  { id: 2, title: 'Второй пост', body: 'Содержимое второго поста...' },
  { id: 3, title: 'Третий пост', body: 'Содержимое третьего поста...' },
];

const PostList = () =>{
    return(
        <div className={styles.list}>
            {mockPosts.map((post)=>(
             <PostCard
          key={post.id}
          id={post.id}
          title={post.title}
          body={post.body}
        />     
            ))}
        </div>
    );
};

export default PostList;



