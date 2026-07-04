const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

let students = [];

// Home route
app.get("/", (req, res) => {
  res.send("Student Management Backend is Running!");
});

// Get all students
app.get("/students", (req, res) => {
  res.json(students);
});

// Add a student
app.post("/students", (req, res) => {
  const student = req.body;
  students.push(student);
  res.json({
    message: "Student added successfully!",
    students: students
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});