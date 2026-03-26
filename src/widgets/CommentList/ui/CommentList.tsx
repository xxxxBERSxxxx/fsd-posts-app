import React, { useState, useCallback } from 'react';
import Button from '../../../shared/ui/Button/Button';
import { useGetCommentsByPostQuery } from '../../../entities/comment/api/commentsApi';
import { FetchBaseQueryError } from '@reduxjs/toolkit/query';

interface CommentListProps {
  postId: number;
}

const CommentList: React.FC<CommentListProps> = ({ postId }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { data: comments = [], isLoading, error } = useGetCommentsByPostQuery(postId, {
    skip: !isOpen,
  });

  const toggleComments = useCallback(() => {
    setIsOpen(prev => !prev);
  }, []);

  let errorMessage = null;
  if (error) {
    if ('status' in error) {
      errorMessage = `Ошибка загрузки комментариев: ${error.status}`;
    } else {
      errorMessage = error.message || 'Ошибка загрузки комментариев';
    }
  }

  return (
    <div style={{ marginTop: '1rem' }}>
      <Button onClick={toggleComments} variant="secondary">
        {isOpen ? 'Скрыть комментарии' : `Показать комментарии (${comments.length})`}
      </Button>
      {isOpen && (
        <>
          {isLoading && <div>Загрузка комментариев...</div>}
          {errorMessage && <div>{errorMessage}</div>}
          {!isLoading && !error && (
            <ul style={{ marginTop: '0.5rem', listStyle: 'none', padding: 0 }}>
              {comments.map(comment => (
                <li key={comment.id} style={{ padding: '0.5rem', borderBottom: '1px solid #eee' }}>
                  <strong>{comment.name}:</strong> {comment.body}
                </li>
              ))}
            </ul>
          )}
        </>
      )}
    </div>
  );
};

export default React.memo(CommentList);