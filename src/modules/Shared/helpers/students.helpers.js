import faker from 'faker';

const createFakeStudents = (number = 25) => {
  const students = Array(number);
  for (let i = 1; i < students.length+1; i++) {
    students[i-1] = {
      id: i,
      firstname: `${faker.name.firstName()}`,
      lastname: `${faker.name.lastName()}`,
      username: `${faker.name.firstName()}`,
      td: +`${faker.random.number({min: 1, max: 2})}`,
      absences: +`${faker.random.number({min: 0, max: 30})}`,
      grades: +`${faker.random.number({min: 0, max: 20})}`
    };
  }
  return students;
};

export default createFakeStudents();
