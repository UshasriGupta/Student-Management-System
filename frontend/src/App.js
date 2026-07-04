import { useState, useEffect } from "react";

function App() {
  const [name, setName] = useState("");
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/students")
      .then((res) => res.json())
      .then((data) => setStudents(data));
  }, []);

  const addStudent = async () => {
    if (!name) return;

    await fetch("http://localhost:5000/students", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name }),
    });

    setStudents([...students, { name }]);
    setName("");
  };

  return (
    <div style={{ padding: "30px" }}>
      <h1>Student Management System</h1>

      <input
        type="text"
        placeholder="Enter Student Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <button onClick={addStudent}>Add Student</button>

      <h2>Student List</h2>

      <ul>
        {students.map((student, index) => (
          <li key={index}>{student.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;