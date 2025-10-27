import React, { useState } from "react";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

function App() {
  const [view, setView] = useState("add"); // "add" or "view"
  const [student, setStudent] = useState({
    name: "",
    roll: "",
    cgpa: "",
  });
  const [savedStudent, setSavedStudent] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudent({ ...student, [name]: value });
  };

  const handleAddCGPA = () => {
    if (student.name && student.roll && student.cgpa) {
      setSavedStudent(student);
      alert("Student CGPA added successfully!");
      setStudent({ name: "", roll: "", cgpa: "" });
      setView("view");
    } else {
      alert("Please fill all fields!");
    }
  };

 const handleDownloadPDF = () => {
  if (!savedStudent) {
    alert("No data available to download!");
    return;
  }

  const doc = new jsPDF();
  doc.text("Student CGPA Report", 70, 20);

  // Use autoTable function instead of doc.autoTable
  autoTable(doc, {
    head: [["Student Name", "Roll Number", "CGPA"]],
    body: [[savedStudent.name, savedStudent.roll, savedStudent.cgpa]],
    startY: 30,
  });

  doc.save("Student_CGPA.pdf");
};


  return (
    <div
      style={{
        fontFamily: "Poppins, sans-serif",
        textAlign: "center",
        padding: "40px",
      }}
    >
      {/* Navigation */}
      <div style={{ marginBottom: "20px" }}>
        <button
          onClick={() => setView("add")}
          style={{
            marginRight: "10px",
            border: "none",
            background: "none",
            color: "blue",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          Add CGPA
        </button>
        <button
          onClick={() => setView("view")}
          style={{
            border: "none",
            background: "none",
            color: "blue",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          View CGPA
        </button>
      </div>

      {/* Add CGPA Section */}
      {view === "add" && (
        <div
          style={{
            border: "1px solid #bfbfbf",
            borderRadius: "10px",
            padding: "20px",
            width: "300px",
            margin: "0 auto",
          }}
        >
          <h3>Add Student CGPA</h3>
          <div style={{ textAlign: "left", marginLeft: "25px" }}>
            <label>Student Name:</label>
            <br />
            <input
              type="text"
              name="name"
              value={student.name}
              onChange={handleChange}
              style={{ width: "85%", marginBottom: "10px" }}
            />
            <br />
            <label>Roll Number:</label>
            <br />
            <input
              type="text"
              name="roll"
              value={student.roll}
              onChange={handleChange}
              style={{ width: "85%", marginBottom: "10px" }}
            />
            <br />
            <label>CGPA:</label>
            <br />
            <input
              type="text"
              name="cgpa"
              value={student.cgpa}
              onChange={handleChange}
              style={{ width: "85%", marginBottom: "10px" }}
            />
          </div>
          <button
            onClick={handleAddCGPA}
            style={{
              marginTop: "10px",
              padding: "8px 20px",
              backgroundColor: "#007bff",
              color: "#fff",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Add CGPA
          </button>
          <br />
          <button
            onClick={handleDownloadPDF}
            style={{
              marginTop: "10px",
              padding: "6px 15px",
              backgroundColor: "#000",
              color: "#fff",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Download PDF
          </button>
        </div>
      )}

      {/* View CGPA Section */}
      {view === "view" && savedStudent && (
        <div
          style={{
            border: "1px solid #bfbfbf",
            borderRadius: "10px",
            padding: "20px",
            width: "300px",
            margin: "0 auto",
          }}
        >
          <h3>View Student CGPA</h3>
          <p>
            <strong>Student Name:</strong> {savedStudent.name}
          </p>
          <p>
            <strong>Roll Number:</strong> {savedStudent.roll}
          </p>
          <p>
            <strong>CGPA:</strong> {savedStudent.cgpa}
          </p>
          <button
            onClick={handleDownloadPDF}
            style={{
              marginTop: "10px",
              padding: "6px 15px",
              backgroundColor: "#000",
              color: "#fff",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Download PDF
          </button>
        </div>
      )}
    </div>
  );
}

export default App;

