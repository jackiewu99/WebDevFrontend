const StudentView = (props) => {
  const { student } = props;
  return (
    <div>
      <h1>{student.firstname + " " + student.lastname}</h1>
      <h3>Attendance: {student.campus.name}</h3>
      <p>Student Email: {student.email}</p>
      <p>GPA:{student.gpa}</p>
    </div>
  );

};

export default StudentView;