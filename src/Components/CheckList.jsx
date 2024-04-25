import React from 'react';

const CheckList = ({ task, completed, onToggle }) => {
  const itemStyle = {
    textDecoration: completed ? 'line-through' : 'none',
  };

  return (
    <li style={itemStyle} onClick={onToggle}>
      {task}
    </li>
  );
};

export default CheckList;

