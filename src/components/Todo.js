import React from 'react';

const Todo = ({
  onToggleClick,
  onRemoveClick,
  completed,
  text
}) => (
  <li>
    <span
      onClick={onToggleClick}
      style={
        {
          textDecoration: completed ?
            'line-through' :
            'none',
          fontWeight: 500,
          cursor: 'pointer'
        }
      }
    >
      {text}
    </span>
    {' '}
    <a
      href=""
      onClick={(e) => {
        e.preventDefault();
        onRemoveClick();
      }}
    >
      [&times;]
    </a>
  </li>
);

export default Todo;
