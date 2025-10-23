import React, { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, newTask]);
      setNewTask("");
    }
  };

  const deleteTask = (index) => {
    const updated = tasks.filter((_, i) => i !== index);
    setTasks(updated);
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}>📝 My Task Manager</h1>
        <div style={styles.inputContainer}>
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            placeholder="Enter a new task..."
            style={styles.input}
          />
          <button onClick={addTask} style={styles.addButton}>
            ➕ Add
          </button>
        </div>

        <ul style={styles.taskList}>
          {tasks.length === 0 ? (
            <p style={styles.emptyText}>No tasks yet! Add your first one 🌟</p>
          ) : (
            tasks.map((task, index) => (
              <li key={index} style={styles.taskItem}>
                <span>{task}</span>
                <button
                  onClick={() => deleteTask(index)}
                  style={styles.deleteButton}
                >
                  ❌
                </button>
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
  );
}

// 💅 Styling
const styles = {
  container: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(135deg, #89f7fe 0%, #66a6ff 100%)",
    fontFamily: "'Poppins', sans-serif",
  },
  card: {
    background: "white",
    borderRadius: "20px",
    boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
    padding: "40px",
    width: "400px",
    textAlign: "center",
    animation: "fadeIn 0.8s ease-in-out",
  },
  title: {
    marginBottom: "20px",
    color: "#333",
  },
  inputContainer: {
    display: "flex",
    gap: "10px",
    marginBottom: "20px",
  },
  input: {
    flex: 1,
    padding: "10px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    outline: "none",
    fontSize: "16px",
  },
  addButton: {
    backgroundColor: "#4CAF50",
    color: "white",
    border: "none",
    borderRadius: "8px",
    padding: "10px 16px",
    cursor: "pointer",
    transition: "0.3s",
  },
  taskList: {
    listStyle: "none",
    padding: 0,
    margin: 0,
  },
  taskItem: {
    background: "#f1f5f9",
    margin: "8px 0",
    padding: "10px",
    borderRadius: "10px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    transition: "transform 0.2s ease",
  },
  deleteButton: {
    backgroundColor: "#ff4d4f",
    border: "none",
    color: "white",
    padding: "6px 10px",
    borderRadius: "6px",
    cursor: "pointer",
    fontSize: "14px",
  },
  emptyText: {
    color: "#555",
    fontStyle: "italic",
  },
};

export default App;
