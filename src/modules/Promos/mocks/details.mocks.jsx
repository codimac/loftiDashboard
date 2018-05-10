const createFakeStudents = (number = 25) => {
  const students = Array(number);
  for (let i = 0; i < students.length; i++) {
    students[i] = { id: i, firstname: `name${i}`, lastname: `surname${i}`, username: `username${i}`, absences: Math.floor(Math.random() * 30), grades: Math.floor(Math.random() * 20)};
  }
  students.push({id: number+1, firstname: 'François', lastname: 'Hollande', username: 'fhollande'});
  return students;
};

const students = createFakeStudents();

export default {
  promotion: students,
  tempPromotion: students
};
