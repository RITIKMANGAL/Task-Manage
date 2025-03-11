// src/api/tasks.js

const API_BASE_URL = 'https://task-management-seven-lake.vercel.app';

// Fetch all tasks
export const getTasks = async () => {
  const response = await fetch(`${API_BASE_URL}/tasks`);
  if (!response.ok) {
    throw new Error('Failed to fetch tasks');
  }
  return response.json();
};

// Add a new task
export const addTask = async (title) => {
  const response = await fetch(`${API_BASE_URL}/tasks`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ title }),
  });
  if (!response.ok) {
    throw new Error('Failed to add task');
  }
  return response.json();
};

// Delete a task
export const deleteTask = async (id) => {
  const response = await fetch(`${API_BASE_URL}/tasks/${id}`, {
    method: 'DELETE',
  });
  if (!response.ok) {
    throw new Error('Failed to delete task');
  }
  return response.json();
};

// Update task status
export const updateTaskStatus = async (id, status) => {
  const response = await fetch(`${API_BASE_URL}/task`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ id, status }),
  });
  if (!response.ok) {
    throw new Error('Failed to update task');
  }
  return response.json();
};
