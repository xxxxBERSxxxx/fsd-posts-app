import React, { useState, useMemo, useCallback } from 'react';
import PostCard from '../../entities/post/ui/PostCard';
import PostLengthFilter from '../../features/PostLengthFilter/ui/PostLengthFilter';
import { filterByLength } from '../../features/PostLengthFilter/lib/filterByLength';
import withLoading from '../../shared/lib/theme/hoc/withLoading';
import styles from './PostList.module.css';
//import CommentList from '../../widgets/CommentList/ui/CommentList';

const mockPosts = [
  { id: 1, title: 'Первый пост', body: 'Содержимое первого поста...' },
  { id: 2, title: 'Второй пост', body: 'Содержимое второго поста...' },
  { id: 3, title: 'Третий пост', body: 'Содержимое третьего поста...' },
];

interface PostListProps {
  isLoading?: boolean; 
}

const PostList: React.FC<PostListProps> = ({ isLoading }) => {
  const [minLength, setMinLength] = useState(0);

 
  const filteredPosts = useMemo(() => {
    console.log('Фильтрация постов...'); 
    return filterByLength(mockPosts, minLength);
  }, [minLength]);


  const handleFilterChange = useCallback((length: number) => {
    setMinLength(length);
  }, []);


  return (
    <div className={styles.list}>
      <PostLengthFilter minLength={minLength} onFilterChange={handleFilterChange} />
      {filteredPosts.map((post) => (
        <PostCard key={post.id} id={post.id} title={post.title} body={post.body} />
      ))}
      {filteredPosts.length === 0 && <p>Постов, удовлетворяющих условию, нет.</p>}
    </div>
  );
};

export default withLoading(PostList);



