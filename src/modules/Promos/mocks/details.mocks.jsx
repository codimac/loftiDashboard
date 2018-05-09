const createFakeStudents = (number = 25) => {
  const students = Array(number);
  for (let i = 0; i < students.length; i++) {
    students[i] = { id: i, firstname: `name${i}`, lastname: `surname${i}`, username: `username${i}`};
  }
  students.push({id: number+1, firstname: 'François', lastname: 'Hollande', username: 'fhollande'});
  return {promotion: students, tempPromotion: students};
};

export default createFakeStudents();
