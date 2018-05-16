import faker from 'faker';

export default [
  {day: 'Lundi', absences: +`${faker.random.number({min: 0, max: 40})}`},
  {day: 'Mardi', absences: +`${faker.random.number({min: 0, max: 40})}`},
  {day: 'Mercredi', absences: +`${faker.random.number({min: 0, max: 40})}`},
  {day: 'Jeudi', absences: +`${faker.random.number({min: 0, max: 40})}`},
  {day: 'Vendredi', absences: +`${faker.random.number({min: 0, max: 40})}`}
];
