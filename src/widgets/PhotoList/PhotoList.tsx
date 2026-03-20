
import React from 'react';

interface PhotoListProps {
  userId: number;
}

const PhotoList: React.FC<PhotoListProps> = ({ userId }) => {
  return (
    <div>
      <h3>Задачи пользователя {userId}</h3>
      <p>Здесь будет список задач. Компонент временно заглушен.</p>
    </div>
  );
};

export default PhotoList;