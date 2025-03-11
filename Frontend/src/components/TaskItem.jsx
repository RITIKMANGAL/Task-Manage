import React from 'react';

function TaskItem({ task, deleteTask, toggleStatus }) {
  return (
    <li className="task-item">
      <div>
        <span style={{ marginRight: '10px', textDecoration: task.status === 'Completed' ? 'line-through' : 'none' }}>
          {task.title}
        </span>
        <span>[{task.status}]</span>
      </div>
      <div>
        <button onClick={() => toggleStatus(task._id)} className="toggle">Toggle Status</button>
        <button onClick={() => deleteTask(task._id)} className="delete">Delete</button>
      </div>
    </li>
  );
}

export default TaskItem;
