import React, { useState, useCallback } from 'react';
import Button from '../../../shared/ui/Button/Button';
import { useGetCommentsByPostQuery } from '../../../entities/comment/api/commentsApi';

interface CommentListProps {
  postId: number;
}

const CommentList: React.FC<CommentListProps> = ({ postId }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { data: comments = [], isLoading } = useGetCommentsByPostQuery(postId, {
    skip: !isOpen, // запрос выполняется только когда открыт список комментариев
  });

  const toggleComments = useCallback(() => {
    setIsOpen(prev => !prev);
  }, []);

  return (
    <div style={{ marginTop: '1rem' }}>
      <Button onClick={toggleComments} variant="secondary">
        {isOpen ? 'Скрыть комментарии' : `Показать комментарии (${comments.length})`}
      </Button>
      {isOpen && (
        <>
          {isLoading && <div>Загрузка комментариев...</div>}
          <ul style={{ marginTop: '0.5rem', listStyle: 'none', padding: 0 }}>
            {comments.map(comment => (
              <li key={comment.id} style={{ padding: '0.5rem', borderBottom: '1px solid #eee' }}>
                <strong>{comment.name}:</strong> {comment.body}
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default React.memo(CommentList);