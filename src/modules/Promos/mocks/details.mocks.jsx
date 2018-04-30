const createFakeStudents = (number = 25) => {
  const students = Array(number);
  for (let i = 0; i < students.length; i++) {
    students[i] = { id: i, firstname: `name${i}`, lastname: `surname${i}`, uersname: `username${i}`}
  }
  return students;
};

export default createFakeStudents();

// export default [
//   { id: 1, firstname: 'Florian', lastname: 'Zobèle' },
//   { id: 2, firstname: 'Lila', lastname: 'Gazeau'}
// ];