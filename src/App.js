import React, { useState } from 'react';
import TaskList from './TaskList';
import TaskForm from './TaskForm';

const initialTasks = [
  // Dummy data
  { id: 1, title: 'Sample Task 1', completed: false, expanded: false, description: 'Description 1', timestamp: Date.now() },
  { id: 2, title: 'Sample Task 2', completed: true, expanded: false, description: 'Description 2', timestamp: Date.now() },
];

function App() {
  const [tasks, setTasks] = useState(initialTasks);

  const addTask = (title) => {
    setTasks([...tasks, { id: Date.now(), title, completed: false, expanded: false, description: '', timestamp: Date.now() }]);
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task => task.id === id ? { ...task, completed: !task.completed } : task));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <div>
      <h1>Todo List</h1>
      <TaskForm addTask={addTask} />
      <TaskList tasks={tasks} onToggle={toggleTask} onDelete={deleteTask} />
    </div>
  );
}

export default App;




