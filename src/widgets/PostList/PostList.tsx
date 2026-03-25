import React, { useState, useMemo } from 'react';
import PostCard from '../../entities/post/ui/PostCard';
import PostLengthFilter from '../../features/PostLengthFilter/ui/PostLengthFilter';
import { filterByLength } from '../../features/PostLengthFilter/lib/filterByLength';
import styles from './PostList.module.css';
import { useGetPostsQuery } from '../../entities/post/api/postsApi';
import { useSelector } from 'react-redux';
import { selectAllPosts } from '../../entities/post/model/slice/postSlice';

interface PostListProps {
  userId?: number;
}

const PostList: React.FC<PostListProps> = ({ userId }) => {
 
  const { isLoading, error } = useGetPostsQuery({ userId });
  
  const posts = useSelector(selectAllPosts);
  const [minLength, setMinLength] = useState(0);

  const filteredPosts = useMemo(() => filterByLength(posts, minLength), [posts, minLength]);

  if (isLoading) return <div>Загрузка...</div>;
  if (error) return <div>Ошибка: {JSON.stringify(error)}</div>;

  return (
    <div className={styles.list}>
      <PostLengthFilter minLength={minLength} onFilterChange={setMinLength} />
      {filteredPosts.map((post) => (
        <PostCard key={post.id} {...post} />
      ))}
      {filteredPosts.length === 0 && <p>Постов, удовлетворяющих условию, нет.</p>}
    </div>
  );
};

export default PostList;