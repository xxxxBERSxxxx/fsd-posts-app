import React, { useState, useMemo } from 'react';
import PostCard from '../../entities/post/ui/PostCard';
import PostLengthFilter from '../../features/PostLengthFilter/ui/PostLengthFilter';
import { filterByLength } from '../../features/PostLengthFilter/lib/filterByLength';
import withLoading from '../../shared/lib/theme/hoc/withLoading';
import styles from './PostList.module.css';
import { usePosts } from '../../features/PostList/model/hooks/usePosts';

interface PostListProps {
  userId?: number;
}

const PostList: React.FC<PostListProps> = ({ userId }) => {
  const { posts, isLoading, error } = usePosts({ userId });
  const [minLength, setMinLength] = useState(0);

 
  const filteredPosts = useMemo(() => {
    console.log('Фильтрация постов...'); 
    return filterByLength(posts, minLength);
  }, [posts, minLength]);

  if (isLoading) return <div>Загрузка...</div>;
  if (error) return <div>Ошибка: {error}</div>;



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

export default withLoading(PostList);



