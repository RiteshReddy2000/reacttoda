import React from 'react';
import Task from './AppTask';

function TaskList({ tasks, onToggle, onDelete }) {
  return (
    <div>
      {tasks.map(task => (
        <Task key={task.id} task={task} onToggle={onToggle} onDelete={onDelete} />
      ))}
    </div>
  );
}

export default TaskList;
