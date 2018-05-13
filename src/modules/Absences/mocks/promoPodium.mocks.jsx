const createFakeStudents = (number = 10) => {
  const students = Array(number);
  for (let i = 0; i < students.length; i++) {
    students[i] = { id: i, firstname: `name${i}`, lastname: `surname${i}`, username: `username${i}`, absences: Math.floor(Math.random() * 30)};
  }
  students.push({id: number+1, firstname: 'François', lastname: 'Hollande', username: 'fhollande'});
  return students;
};

const students = createFakeStudents();

export default createFakeStudents(10);
