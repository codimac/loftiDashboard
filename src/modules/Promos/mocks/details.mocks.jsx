const createFakeStudents = (number = 25) => {
  const students = Array(number);
  for (let i = 0; i < students.length; i++) {
    students[i] = { id: i, firstname: `name${i}`, lastname: `surname${i}`, username: `username${i}`};
  }
  return {promotion: students, tempPromotion: students};
};

export default createFakeStudents();
