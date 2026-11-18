
function StudentCard({ student, onDelete }) {
  return (
    <div className="id-card">
      <div className="id-header">
        <div className="college-logo">SC</div>
        <h3>STUDENT CARD SYSTEM</h3>
        <p>STUDENT IDENTITY CARD</p>
      </div>

      <img
        src={student.photo}
        alt={student.name}
        className="student-photo"
      />

      <h2>{student.name}</h2>

      <div className="details">
        <p><b>Student ID:</b> SC{student.id}</p>
        <p><b>Register No:</b> {student.regNo}</p>
        <p><b>Department:</b> {student.department}</p>
        <p><b>Academic Year:</b> {student.year}</p>
        <p><b>Date of Birth:</b> {student.dob}</p>
        <p><b>Gender:</b> {student.gender}</p>
        <p><b>Blood Group:</b> {student.bloodGroup}</p>
        <p><b>Phone:</b> {student.phone}</p>
        <p><b>Email:</b> {student.email}</p>
      </div>

      <div className="id-footer">
        <span>STUDENT</span>
        <span>AUTHORIZED SIGNATURE</span>
      </div>

      <button className="delete-btn"
        onClick={() => onDelete(student.id)}>
        Delete Card
      </button>
    </div>
  );
}

export default StudentCard;
