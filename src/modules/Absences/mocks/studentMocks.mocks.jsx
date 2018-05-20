import { randomDate } from '@Shared/helpers/date.helpers';
import faker from 'faker';

const createFakeAbsences = (number = 5 /* faker.random.number({min: 1, max: 12}) */) => {
  const absences = Array(number);
  for (let i=0; i<number; i++) {
    absences[i] = {
      id: i,
      beginning: randomDate(new Date(2017, 0, 1), new Date()),
      end: randomDate(new Date(2012, 0, 1), new Date()),
      justified: faker.random.boolean()
    };
  }
  return absences;
};

export default createFakeAbsences();
