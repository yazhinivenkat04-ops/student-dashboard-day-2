
import StudentCard from "./StudentCard";

function StudentList({ students, onDelete }) {
  return (
    <section className="student-list">
      <h2>Student ID Cards</h2>

      {students.length === 0 ? (
        <p className="empty">No student records found.</p>
      ) : (
        <div className="card-container">
          {students.map(student => (
            <StudentCard
              key={student.id}
              student={student}
              onDelete={onDelete}
            />
          ))}
        </div>
      )}
    </section>
  );
}

export default StudentList;
