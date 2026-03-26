import React, { useState, useMemo } from 'react';
import { useSelector } from 'react-redux';
import PostCard from '../../entities/post/ui/PostCard';
import PostLengthFilter from '../../features/PostLengthFilter/ui/PostLengthFilter';
import { filterByLength } from '../../features/PostLengthFilter/lib/filterByLength';
import styles from './PostList.module.css';
import { useGetPostsQuery } from '../../entities/post/api/postsApi';
import { selectAllPosts } from '../../entities/post/model/slice/postSlice';
import { ItemList } from '../../shared/ui/ItemList/ItemList';
import { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import { SerializedError } from '@reduxjs/toolkit';

interface PostListProps {
  userId?: number;
}

const PostList: React.FC<PostListProps> = ({ userId }) => {
  const { isLoading, error } = useGetPostsQuery({ userId });
  const posts = useSelector(selectAllPosts);
  const [minLength, setMinLength] = useState(0);

  const filteredPosts = useMemo(() => filterByLength(posts, minLength), [posts, minLength]);

  if (isLoading) return <div>Загрузка...</div>;

  if (error) {
    let errorMessage = 'Ошибка загрузки постов';
    if ('status' in error) {
      errorMessage = `Ошибка ${error.status}: ${JSON.stringify(error.data)}`;
    } else if ('message' in error) {
      errorMessage = error.message || errorMessage;
    }
    return <div>{errorMessage}</div>;
  }

  return (
    <div className={styles.list}>
      <PostLengthFilter minLength={minLength} onFilterChange={setMinLength} />
      <ItemList
        items={filteredPosts}
        keyExtractor={(post) => post.id}
        renderItem={(post) => <PostCard {...post} />}
        emptyMessage="Постов, удовлетворяющих условию, нет."
      />
    </div>
  );
};

export default PostList;