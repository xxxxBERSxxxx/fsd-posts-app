import React from 'react';
import { useGetTodosByUserQuery } from '../../entities/todo/api/todosApi';

interface TodoListProps {
  userId: number;
}

const TodoList: React.FC<TodoListProps> = ({ userId }) => {
  const { data: todos = [], isLoading, error } = useGetTodosByUserQuery(userId);

  if (isLoading) return <div>Загрузка задач...</div>;
  if (error) return <div>Ошибка загрузки задач</div>;

  return (
    <div>
      <h3>Задачи пользователя {userId}</h3>
      <ul>
        {todos.map(todo => (
          <li key={todo.id} style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
            {todo.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;