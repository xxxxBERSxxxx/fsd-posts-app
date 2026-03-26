import React from 'react';
import { useGetTodosByUserQuery } from '../../entities/todo/api/todosApi';
import { ItemList } from '../../shared/ui/ItemList/ItemList';

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
      <ItemList
        items={todos}
        keyExtractor={(todo) => todo.id}
        renderItem={(todo) => (
          <li style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
            {todo.title}
          </li>
        )}
        emptyMessage="Нет задач"
      />
    </div>
  );
};

export default TodoList;