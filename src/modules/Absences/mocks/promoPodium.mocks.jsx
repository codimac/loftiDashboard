const createFakeStudents = (number = 10) => {
  const students = Array(number);
  const absences = Math.floor(Math.random() * 30)+25;
  let downby = 3;
  for (let i = 0; i < students.length; i++) {
    students[i] = { id: i, firstname: `Name${i}`, lastname: `Surname${i}`, username: `username${i}`, absences: absences - downby };
    downby += Math.floor(Math.random() * 5)+1;
  }
  return students;
};

const students = createFakeStudents();

export default createFakeStudents(10);
