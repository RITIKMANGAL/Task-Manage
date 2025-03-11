// src/App.jsx

import React, { useState, useEffect } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import { getTasks, addTask, deleteTask, updateTaskStatus } from './api/tasks';

function App() {
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    try {
      const data = await getTasks();
      setTasks(data);
    } catch (err) {
      console.error('Error fetching tasks:', err);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const handleAddTask = async (title) => {
    try {
      const newTask = await addTask(title);
      setTasks(prevTasks => [...prevTasks, newTask]);
    } catch (err) {
      console.error('Error adding task:', err);
    }
  };

  const handleDeleteTask = async (id) => {
    try {
      await deleteTask(id);
      setTasks(prevTasks => prevTasks.filter(task => task._id !== id));
    } catch (err) {
      console.error('Error deleting task:', err);
    }
  };

  const handleToggleStatus = async (id) => {
    const task = tasks.find(t => t._id === id);
    if (!task) return;
    const newStatus = task.status === 'Pending' ? 'Completed' : 'Pending';
    try {
      const updatedTask = await updateTaskStatus(id, newStatus);
      setTasks(prevTasks =>
        prevTasks.map(t => (t._id === id ? updatedTask : t))
      );
    } catch (err) {
      console.error('Error updating task:', err);
    }
  };

  return (
    <div className="container">
      <h1>Task Manager</h1>
      <TaskForm addTask={handleAddTask} />
      <TaskList tasks={tasks} deleteTask={handleDeleteTask} toggleStatus={handleToggleStatus} />
    </div>
  );
}

export default App;
