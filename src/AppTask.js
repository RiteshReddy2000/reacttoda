import React from 'react';

function Task({ task, onToggle, onDelete }) {
  return (
    <div>
      <h3>
        {task.title}
        <button onClick={() => onToggle(task.id)}>{task.completed ? 'Undo' : 'Done'}</button>
        <button onClick={() => onDelete(task.id)}>Delete</button>
      </h3>
      {task.expanded && (
        <div>
          <p>{task.description}</p>
          <small>{new Date(task.timestamp).toLocaleString()}</small>
        </div>
      )}
    </div>
  );
}

export default Task;
