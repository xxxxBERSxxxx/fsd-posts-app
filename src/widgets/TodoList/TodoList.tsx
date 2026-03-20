
import React from 'react';

interface TodoListProps {
  userId: number;
}

const TodoList: React.FC<TodoListProps> = ({ userId }) => {
  return (
    <div>
      <h3>Задачи пользователя {userId}</h3>
      <p>Здесь будет список задач. Компонент временно заглушен.</p>
    </div>
  );
};

export default TodoList;