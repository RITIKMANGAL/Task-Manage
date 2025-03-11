import React from 'react';
import TaskItem from './TaskItem';

function TaskList({ tasks, deleteTask, toggleStatus }) {
  if (tasks.length === 0) return <p>No tasks available.</p>;

  return (
    <ul>
      {tasks.map(task => (
        <TaskItem
          key={task._id}
          task={task}
          deleteTask={deleteTask}
          toggleStatus={toggleStatus}
        />
      ))}
    </ul>
  );
}

export default TaskList;
