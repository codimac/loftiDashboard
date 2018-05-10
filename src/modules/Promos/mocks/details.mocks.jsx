import faker from 'faker';

const createFakeStudents = (number = 25) => {
  const students = Array(number);
  for (let i = 0; i < students.length; i++) {
    students[i] = {
      id: i,
      firstname: `${faker.name.firstName()}`,
      lastname: `${faker.name.lastName()}`,
      username: `${faker.internet.userName()}`,
      td: +`${faker.random.number({min: 1, max: 2})}`
    };
  }
  students.push({id: number+1, firstname: 'François', lastname: 'Hollande', username: 'fhollande', td: 1});
  return students;
};

const students = createFakeStudents();

console.log(students);

export default {
  promotion: students,
  tempPromotion: students
};
