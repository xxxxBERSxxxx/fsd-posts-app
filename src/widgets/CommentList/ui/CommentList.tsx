import React, { useState, useCallback } from 'react';
import Button from '../../../shared/ui/Button/Button';

interface Comment {
    id: number;
    text: string;
    author: string;
}

const mockComments: Record<number, Comment[]> = {
  1: [
    { id: 1, text: 'Отличный пост!', author: 'Анна' },
    { id: 2, text: 'Спасибо, полезно', author: 'Иван' },
  ],
  2: [
    { id: 3, text: 'Жду продолжения', author: 'Мария' },
    { id: 4, text: 'Интересная мысль', author: 'Петр' },
  ],
  3: [
    { id: 5, text: 'Согласен', author: 'Елена' },
    { id: 6, text: 'Нужно подумать', author: 'Дмитрий' },
  ],
};

interface CommentListProps {
    postId: number;
}

const CommentList: React.FC<CommentListProps> = ({postId})=>{
   const [isOpen, setIsOpen] = useState(false);
   
   const toggleComments = useCallback(()=>{
    setIsOpen(prev => !prev);
   }, []);

const comments = mockComments[postId] || [];

return (
  <div style={{marginTop: '1rem'}}>
    <Button onClick={toggleComments} variant="secondary">
        {isOpen ? 'Скрыть комментарии' : `Показать комментарии (${comments.length})`}
    </Button>
    {isOpen && (
        <ul style={{marginTop: '0.5rem', listStyle: 'none', padding: 0}}>
            {comments.map(comment=>(
                <li key={comment.id} style={{padding: '0.5rem', borderBottom: '1px solid #eee'}}>
                    <strong>{comment.author}:</strong>{comment.text}
                </li>
            ))}
        </ul>
    )}
  </div>  
);
};

export default React.memo(CommentList);






















