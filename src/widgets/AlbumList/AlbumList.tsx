
import React from 'react';

interface AlbumListProps {
  userId: number;
}

const AlbumList: React.FC<AlbumListProps> = ({ userId }) => {
  return (
    <div>
      <h3>Задачи пользователя {userId}</h3>
      <p>Здесь будет список задач. Компонент временно заглушен.</p>
    </div>
  );
};

export default AlbumList;