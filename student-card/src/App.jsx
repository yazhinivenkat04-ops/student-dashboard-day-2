
import { useState, useEffect } from "react";
import StudentForm from "./components/StudentForm";
import StudentList from "./components/StudentList";
import "./App.css";

const sampleStudents = [
  {
    id: 1,
    name: "Arun Kumar",
    regNo: "202601",
    department: "AI & DS",
    year: "3rd Year",
    dob: "2005-02-15",
    gender: "Male",
    bloodGroup: "O+",
    phone: "9876543210",
    email: "arun@gmail.com",
    photo: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    id: 2,
    name: "Priya Sharma",
    regNo: "202602",
    department: "Computer Science",
    year: "3rd Year",
    dob: "2005-05-20",
    gender: "Female",
    bloodGroup: "A+",
    phone: "9876543211",
    email: "priya@gmail.com",
    photo: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    id: 3,
    name: "Rahul Kumar",
    regNo: "202603",
    department: "ECE",
    year: "2nd Year",
    dob: "2006-01-10",
    gender: "Male",
    bloodGroup: "B+",
    phone: "9876543212",
    email: "rahul@gmail.com",
    photo: "https://randomuser.me/api/portraits/men/45.jpg"
  },
  {
    id: 4,
    name: "Sneha Devi",
    regNo: "202604",
    department: "Information Technology",
    year: "3rd Year",
    dob: "2005-08-12",
    gender: "Female",
    bloodGroup: "AB+",
    phone: "9876543213",
    email: "sneha@gmail.com",
    photo: "https://randomuser.me/api/portraits/women/68.jpg"
  },
  {
    id: 5,
    name: "Karthik Raj",
    regNo: "202605",
    department: "AI & DS",
    year: "2nd Year",
    dob: "2006-04-25",
    gender: "Male",
    bloodGroup: "O-",
    phone: "9876543214",
    email: "karthik@gmail.com",
    photo: "https://randomuser.me/api/portraits/men/75.jpg"
  }
];

function App() {
  const [students, setStudents] = useState(() => {
    try {
      const saved = localStorage.getItem("students");
      return saved ? JSON.parse(saved) : sampleStudents;
    } catch {
      return sampleStudents;
    }
  });

  const [search, setSearch] = useState("");

  useEffect(() => {
    localStorage.setItem("students", JSON.stringify(students));
  }, [students]);

  const addStudent = (data) => {
    const newStudent = {
      ...data,
      id: Date.now()
    };

    setStudents(prev => [...prev, newStudent]);
  };

  const deleteStudent = (id) => {
    if (window.confirm("Are you sure you want to delete this student?")) {
      setStudents(prev => prev.filter(student => student.id !== id));
    }
  };

  const filteredStudents = students.filter(student =>
    student.name.toLowerCase().includes(search.toLowerCase()) ||
    student.regNo.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="app">
      <header className="main-header">
        <h1>Student Card Management System</h1>
        <p>Smart College Student Identity Card Portal</p>
      </header>

      <main className="dashboard">
        <div className="stats">
          <h3>Total Students</h3>
          <h1>{students.length}</h1>
        </div>

        <StudentForm onAdd={addStudent} />

        <div className="search-box">
          <h2>Search Students</h2>
          <input
            type="text"
            placeholder="Search by name or register number..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <StudentList
          students={filteredStudents}
          onDelete={deleteStudent}
        />
      </main>

      <footer>
        <p>Student Card Management System © 2026</p>
      </footer>
    </div>
  );
}

export default App;
