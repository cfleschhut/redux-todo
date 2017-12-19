import React from 'react';
import Todo from './Todo';

const TodoList = ({
  todos,
  onTodoToggle,
  onTodoRemove
}) => (
  <ul>
    {todos.map((todo) => (
      <Todo
        key={todo.id}
        {...todo}
        onToggleClick={() => onTodoToggle(todo.id)}
        onRemoveClick={() => onTodoRemove(todo.id)}
      />
    ))}
  </ul>
);

export default TodoList;
