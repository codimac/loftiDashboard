import faker from 'faker';

const createFakeStudents = (number = 25) => {
  const students = Array(number);
  for (let i = 1; i < students.length; i++) {
    students[i] = {
      id: i,
      firstname: `${faker.name.firstName()}`,
      lastname: `${faker.name.lastName()}`,
      username: `${faker.internet.userName()}`,
      td: +`${faker.random.number({min: 1, max: 2})}`,
      absences: +`${faker.random.number({min: 0, max: 30})}`,
      grades: +`${faker.random.number({min: 0, max: 20})}`
    };
  }
  return students;
};

const students = createFakeStudents();

export default {
  promotion: students,
  tempPromotion: students
};
